import type { Job, RuleKey, Stage } from "./types";

export type Intent = "shipped" | "qc" | "material" | "delay" | "progress" | "unknown";

const SHIPPED = /(dispatch|shipped|handed to the carrier|carton|on the truck|left the dock)/;
const CLEARED = /(cleared|released|shade ok|buyer approved|approved to pack|issued|arrived|received|in house)/;
const QC = /(qc|shade|reject|recut|measurement|failed lot|\bhold\b)/;
const MATERIAL = /(webbing|dye lot|not in store|waiting on|trim wait|no trims|fabric late)/;
const DELAY = /(machine|down|delay|behind|friday|bottleneck|short of)/;
const PROGRESS = /(done today|output|on track|pcs|pieces|sewn|washed|drum|leaves|van|ready|finish)/;

export function interpret(text: string): Intent {
  const t = text.toLowerCase();
  if (SHIPPED.test(t)) return "shipped";
  if (CLEARED.test(t)) return "progress";
  if (QC.test(t)) return "qc";
  if (MATERIAL.test(t)) return "material";
  if (DELAY.test(t)) return "delay";
  if (PROGRESS.test(t)) return "progress";
  return "unknown";
}

export function applyIntent(job: Job, text: string): { job: Job; reply: string } {
  const intent = interpret(text);
  const heard = {
    ...job,
    unanswered: 0,
    followUpDue: false,
    lastNote: text,
  };

  switch (intent) {
    case "shipped":
      return {
        job: {
          ...heard,
          stage: "shipped",
          urgency: "ok",
          dueLabel: "Shipped",
          snooze: "Chase closed",
        },
        reply: `Marked ${job.id} shipped. I'm closing the chase and keeping your note on the order.`,
      };
    case "qc":
      return {
        job: { ...heard, stage: "qc", snooze: "Hold — line stays quiet" },
        reply: `QC hold logged on ${job.id}. I won't chase the line. Reply "cleared" when the buyer signs off.`,
      };
    case "material":
      return {
        job: { ...heard, stage: "material", snooze: "Ask the store tomorrow" },
        reply: `Trim wait logged on ${job.id}. I'll leave the line alone and ask again tomorrow unless you send an ETA.`,
      };
    case "delay":
      return {
        job: {
          ...heard,
          urgency: "late",
          snooze: "Chase again this afternoon",
        },
        reply: `Delay noted on ${job.id}. It stays on the rush list — I'll ping again this afternoon.`,
      };
    case "progress": {
      let stage: Stage = job.stage;
      if (
        (stage === "qc" || stage === "material") &&
        CLEARED.test(text.toLowerCase())
      ) {
        stage = "sewing";
      }
      return {
        job: { ...heard, stage, snooze: "Next check in 8h" },
        reply: `Logged. ${job.id} stays in play. Next check in 8 hours unless the floor writes first.`,
      };
    }
    default:
      return {
        job: { ...heard, snooze: "Reply saved — still open" },
        reply: `Saved on ${job.id}. Reply with output, a delay, trims, QC, or shipped and I'll move the board.`,
      };
  }
}

export function followUpCopy(job: Job, name: string): string {
  if (job.unanswered >= 2) {
    return `Still nothing on ${job.style} ${job.id}. This is the last WhatsApp chase — if I don't hear back I'm calling ${job.stage === "vendor" ? "the vendor" : "the floor"} and flagging ${job.buyer}.`;
  }
  if (job.unanswered === 1) {
    return `${name}, following up on ${job.style} ${job.id}. I don't have an update yet. Need output, a hold, or a new date today.`;
  }
  switch (job.stage) {
    case "sewing":
      return `${name} — ${job.style} ${job.id}, ${job.qty} pcs for ${job.buyer}, due ${job.dueLabel}. What's line output today, and is anything blocking the finish?`;
    case "vendor":
      return `${name}, status on ${job.style} ${job.id} (${job.qty} pcs)? Need the ship-ready count and when the lot leaves your floor.`;
    case "qc":
      return `${name}, ${job.style} ${job.id} is still on hold. Cleared to pack, or are we recutting?`;
    case "material":
      return `${name}, ${job.style} ${job.id} is waiting on trims. What's missing, and what's the ETA today?`;
    case "shipped":
      return `${name}, confirming ${job.style} ${job.id} has left. Carton count when you have it.`;
  }
}

export function suggestions(stage: Stage): string[] {
  switch (stage) {
    case "sewing":
      return [
        "186 done today, collar still slow",
        "Machine 4 is down until Friday",
        "On track, finish tomorrow",
      ];
    case "vendor":
      return [
        "140 washed, 40 still in the drum",
        "Lot leaves tomorrow 6am",
        "Machine down, delay to Friday",
      ];
    case "qc":
      return [
        "Shade failed, recut 40 pcs",
        "Cleared — buyer approved the lot",
        "Still on hold for measurement",
      ];
    case "material":
      return [
        "Webbing lands tomorrow 11am",
        "Trim not in store, dye lot slipped",
        "Webbing received, issued to the line",
      ];
    case "shipped":
      return ["18 cartons dispatched", "Handed to the carrier just now"];
  }
}

export const RULE_COPY: { key: RuleKey; title: string; detail: string }[] = [
  {
    key: "sewing",
    title: "Line chase",
    detail: "Ask for output when a sewing order has gone quiet.",
  },
  {
    key: "vendor",
    title: "Vendor chase",
    detail: "Ask wash and subcontract lots for a ship-ready count.",
  },
  {
    key: "qc",
    title: "Hold check",
    detail: "Ask QC once. Don't ping the line while a hold is open.",
  },
  {
    key: "material",
    title: "Trim chase",
    detail: "Ask the store for an ETA, then wait until morning.",
  },
];
