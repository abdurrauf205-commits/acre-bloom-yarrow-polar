import type { Contact, Job, Msg, RuleKey, Stage } from "./types";

export const CONTACTS: Contact[] = [
  {
    id: "rina",
    name: "Rina Voss",
    role: "Line supervisor",
    shop: "Line 3",
    phone: "+1 415 555 0142",
  },
  {
    id: "prakash",
    name: "Prakash Nair",
    role: "Wash house",
    shop: "Riverwash",
    phone: "+91 98400 22110",
  },
  {
    id: "mei",
    name: "Mei Chen",
    role: "QC",
    shop: "Shade bay",
    phone: "+1 628 555 0194",
  },
  {
    id: "omar",
    name: "Omar Haddad",
    role: "Trim store",
    shop: "Cage B",
    phone: "+1 510 555 0177",
  },
  {
    id: "lena",
    name: "Lena Ortiz",
    role: "Shipping",
    shop: "Dock",
    phone: "+1 415 555 0118",
  },
];

const SEED_JOBS: Job[] = [
  {
    id: "WO-4418",
    style: "Olive chore coat",
    sku: "CC-OLV-04",
    qty: 320,
    buyer: "Atelier North",
    dueLabel: "Sat 24 Oct",
    urgency: "soon",
    stage: "sewing",
    contactId: "rina",
    followUpDue: true,
    unanswered: 0,
    snooze: "Morning chase not sent",
    lastNote: "Collars were short yesterday. Bodies are done.",
  },
  {
    id: "WO-4421",
    style: "Indigo type-II jacket",
    sku: "DJ-IND-02",
    qty: 180,
    buyer: "Field & Co",
    dueLabel: "Tue 27 Oct",
    urgency: "soon",
    stage: "vendor",
    contactId: "prakash",
    followUpDue: true,
    unanswered: 1,
    snooze: "Softener was promised today",
    lastNote: "Lot was still in the drum yesterday.",
  },
  {
    id: "WO-4433",
    style: "Canvas market tote",
    sku: "TB-CNV-11",
    qty: 1000,
    buyer: "Market Day",
    dueLabel: "Thu 30 Oct",
    urgency: "late",
    stage: "material",
    contactId: "omar",
    followUpDue: true,
    unanswered: 2,
    snooze: "No reply — last WhatsApp chase",
    lastNote: "25mm webbing dye lot never confirmed.",
  },
  {
    id: "WO-4390",
    style: "Merino crew",
    sku: "KN-MER-07",
    qty: 500,
    buyer: "Hearth Goods",
    dueLabel: "Fri 23 Oct",
    urgency: "late",
    stage: "qc",
    contactId: "mei",
    followUpDue: false,
    unanswered: 0,
    snooze: "Waiting on the buyer",
    lastNote: "Shade is lighter than standard.",
  },
  {
    id: "WO-4402",
    style: "Wool overshirt",
    sku: "SH-WOL-03",
    qty: 140,
    buyer: "Atelier North",
    dueLabel: "Shipped",
    urgency: "ok",
    stage: "shipped",
    contactId: "lena",
    followUpDue: false,
    unanswered: 0,
    snooze: "Chase closed",
    lastNote: "14 cartons handed to the carrier.",
  },
];

const SEED_MESSAGES: Msg[] = [
  {
    id: "m1",
    contactId: "rina",
    jobId: "WO-4418",
    from: "bot",
    at: 10,
    day: "Yesterday",
    timeLabel: "16:02",
    text: "Rina — Olive chore coat WO-4418, 320 pcs for Atelier North, due Saturday. Collar was short yesterday. What's the count now?",
  },
  {
    id: "m2",
    contactId: "rina",
    jobId: "WO-4418",
    from: "them",
    at: 20,
    day: "Yesterday",
    timeLabel: "16:41",
    text: "Collar team finished 90. Bodies are done. I'll keep them tonight.",
  },
  {
    id: "m3",
    contactId: "prakash",
    jobId: "WO-4421",
    from: "bot",
    at: 30,
    day: "Yesterday",
    timeLabel: "11:20",
    text: "Prakash, status on Indigo type-II WO-4421 (180 pcs)? Need the ship-ready count and when the lot leaves Riverwash.",
  },
  {
    id: "m4",
    contactId: "prakash",
    jobId: "WO-4421",
    from: "them",
    at: 40,
    day: "Yesterday",
    timeLabel: "13:05",
    text: "Lot is in the drum. Softener tomorrow, then back to you.",
  },
  {
    id: "m5",
    contactId: "prakash",
    jobId: "WO-4421",
    from: "bot",
    at: 50,
    day: "Today",
    timeLabel: "08:12",
    text: "Prakash, following up on Indigo type-II WO-4421 — softener should be done. How many are ready, and when does the van leave?",
  },
  {
    id: "m6",
    contactId: "mei",
    jobId: "WO-4390",
    from: "bot",
    at: 60,
    day: "Today",
    timeLabel: "07:48",
    text: "Mei, Merino crew WO-4390 is on shade hold for Hearth Goods. Cleared to pack, or are we recutting?",
  },
  {
    id: "m7",
    contactId: "mei",
    jobId: "WO-4390",
    from: "them",
    at: 70,
    day: "Today",
    timeLabel: "08:20",
    text: "Lighter than the standard. Waiting on the buyer comment before I release it.",
  },
  {
    id: "m8",
    contactId: "omar",
    jobId: "WO-4433",
    from: "bot",
    at: 80,
    day: "Yesterday",
    timeLabel: "09:10",
    text: "Omar, canvas market tote WO-4433 is waiting on 25mm webbing. ETA for the dye lot?",
  },
  {
    id: "m9",
    contactId: "omar",
    jobId: "WO-4433",
    from: "bot",
    at: 90,
    day: "Yesterday",
    timeLabel: "15:40",
    text: "Omar, following up — the Market Day tote still can't be issued without webbing. Need an ETA today.",
  },
  {
    id: "m10",
    contactId: "lena",
    jobId: "WO-4402",
    from: "bot",
    at: 100,
    day: "Yesterday",
    timeLabel: "17:05",
    text: "Lena, wool overshirt WO-4402 — has the dock released it?",
  },
  {
    id: "m11",
    contactId: "lena",
    jobId: "WO-4402",
    from: "them",
    at: 110,
    day: "Yesterday",
    timeLabel: "17:22",
    text: "14 cartons, handed to the carrier. POD is on the board.",
  },
  {
    id: "m12",
    contactId: "lena",
    jobId: "WO-4402",
    from: "bot",
    at: 120,
    day: "Yesterday",
    timeLabel: "17:23",
    text: "Marked WO-4402 shipped. Chase is closed.",
  },
];

export const DEFAULT_RULES: Record<RuleKey, boolean> = {
  sewing: true,
  vendor: true,
  qc: true,
  material: true,
};

export const STAGE_LABEL: Record<Stage, string> = {
  sewing: "On the line",
  vendor: "At the vendor",
  qc: "QC hold",
  material: "Waiting trims",
  shipped: "Shipped",
};

export const FLOOR_CLOCK = "Thu 22 Oct · 09:30";

export function initialJobs(): Job[] {
  return structuredClone(SEED_JOBS);
}

export function initialMessages(): Msg[] {
  return structuredClone(SEED_MESSAGES);
}

export function contactById(id: string): Contact {
  const found = CONTACTS.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown contact ${id}`);
  return found;
}

export function firstName(name: string): string {
  return name.split(" ")[0] ?? name;
}

let msgSeq = 200;

export function makeMsg(input: {
  contactId: string;
  jobId: string;
  from: Msg["from"];
  text: string;
}): Msg {
  msgSeq += 1;
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  return {
    id: `m${msgSeq}`,
    contactId: input.contactId,
    jobId: input.jobId,
    from: input.from,
    text: input.text,
    at: Date.now(),
    timeLabel: `${hh}:${mm}`,
    day: "Today",
  };
}
