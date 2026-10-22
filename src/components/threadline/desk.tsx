import { useEffect, useMemo, useRef, useState } from "react";
import {
  CheckCheck,
  ChevronLeft,
  Clock3,
  RotateCcw,
  Search,
  Send,
} from "lucide-react";
import {
  CONTACTS,
  contactById,
  firstName,
  FLOOR_CLOCK,
  STAGE_LABEL,
} from "@/lib/threadline/data";
import { RULE_COPY, suggestions } from "@/lib/threadline/engine";
import { STORAGE_KEY, useDesk } from "@/lib/threadline/store";
import type { Job, Stage } from "@/lib/threadline/types";

type Pane = "queue" | "thread" | "order";
type Filter = "all" | "due" | "hold" | "shipped";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "due", label: "Due" },
  { id: "hold", label: "Holds" },
  { id: "shipped", label: "Shipped" },
];

const STAGES: Stage[] = ["sewing", "vendor", "qc", "material", "shipped"];

function useHydrateDesk() {
  const hydrate = useDesk((s) => s.hydrate);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      hydrate(JSON.parse(raw) as never);
    } catch {
      /* ignore a bad save */
    }
  }, [hydrate]);
}

function rank(job: Job): number {
  if (job.stage === "shipped") return 50;
  if (job.followUpDue) return job.urgency === "late" ? 0 : 1;
  if (job.urgency === "late") return 2;
  if (job.urgency === "soon") return 3;
  return 4;
}

export function Desk() {
  useHydrateDesk();
  const [pane, setPane] = useState<Pane>("queue");
  const [busy, setBusy] = useState(false);
  const jobs = useDesk((s) => s.jobs);
  const selectedId = useDesk((s) => s.selectedId);
  const select = useDesk((s) => s.select);
  const sendFollowUp = useDesk((s) => s.sendFollowUp);
  const reset = useDesk((s) => s.reset);

  const rules = useDesk((s) => s.rules);
  const due = jobs.filter(
    (job) => job.followUpDue && job.stage !== "shipped" && rules[job.stage],
  );
  const open = jobs.filter((job) => job.stage !== "shipped").length;
  const holds = jobs.filter((job) => job.stage === "qc" || job.stage === "material").length;

  async function sendDue() {
    if (busy || due.length === 0) return;
    setBusy(true);
    const ids = [...due].sort((a, b) => rank(a) - rank(b)).map((job) => job.id);
    for (const id of ids) {
      sendFollowUp(id);
      await new Promise((resolve) => window.setTimeout(resolve, 420));
    }
    setBusy(false);
  }

  return (
    <div className="flex h-dvh flex-col bg-bg text-fg">
      <header className="shrink-0">
        <div className="flex items-center gap-3 px-4 py-3 sm:px-5">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary font-display text-lg text-primary-fg">
              T
            </span>
            <div className="min-w-0">
              <h1 className="font-display text-xl leading-none tracking-tight">Threadline</h1>
              <p className="mt-1 truncate text-sm text-muted">
                Northline Apparel · WhatsApp follow-up
              </p>
            </div>
          </div>
          <p className="hidden text-right text-sm text-muted tabular-nums md:block">
            <span className="block text-fg">{FLOOR_CLOCK}</span>
            {open} open · {due.length} due · {holds} on hold
          </p>
          <button
            type="button"
            onClick={() => void sendDue()}
            disabled={busy || due.length === 0}
            className="h-11 shrink-0 rounded-lg bg-primary px-4 text-sm font-medium text-primary-fg disabled:opacity-40"
          >
            {busy ? "Sending…" : due.length === 0 ? "Nothing due" : `Send ${due.length} due`}
          </button>
          <button
            type="button"
            onClick={reset}
            aria-label="Reset the floor desk"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border text-muted"
          >
            <RotateCcw className="size-4" />
          </button>
        </div>
        <div className="stitch" aria-hidden="true" />
      </header>

      <nav className="flex shrink-0 border-b border-border lg:hidden" aria-label="Desk sections">
        {(
          [
            ["queue", "Orders"],
            ["thread", "WhatsApp"],
            ["order", "Chase"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setPane(id)}
            className={`h-11 flex-1 text-sm ${pane === id ? "text-primary" : "text-muted"}`}
            aria-current={pane === id ? "page" : undefined}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="grid min-h-0 min-w-0 flex-1 grid-rows-[minmax(0,1fr)] lg:grid-cols-[20rem_minmax(0,1fr)_22rem]">
        <section className={pane === "queue" ? "flex h-full min-h-0 min-w-0 flex-col" : "hidden h-full min-h-0 min-w-0 lg:flex lg:flex-col"}>
          <Queue
            onOpen={(id) => {
              select(id);
              setPane("thread");
            }}
          />
        </section>
        <section className={pane === "thread" ? "flex h-full min-h-0 min-w-0 flex-col" : "hidden h-full min-h-0 min-w-0 lg:flex lg:flex-col"}>
          <Thread
            selectedId={selectedId}
            onBack={() => setPane("queue")}
            onOpenOrder={() => setPane("order")}
          />
        </section>
        <section className={pane === "order" ? "h-full min-h-0 min-w-0 overflow-y-auto" : "hidden h-full min-h-0 min-w-0 overflow-y-auto lg:block"}>
          <Inspector selectedId={selectedId} />
        </section>
      </div>
    </div>
  );
}

function Queue({ onOpen }: { onOpen: (id: string) => void }) {
  const jobs = useDesk((s) => s.jobs);
  const selectedId = useDesk((s) => s.selectedId);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...jobs]
      .filter((job) => {
        if (filter === "due") return job.followUpDue && job.stage !== "shipped";
        if (filter === "hold") return job.stage === "qc" || job.stage === "material";
        if (filter === "shipped") return job.stage === "shipped";
        return true;
      })
      .filter((job) => {
        if (!q) return true;
        const contact = contactById(job.contactId);
        return [job.id, job.style, job.buyer, job.sku, contact.name]
          .join(" ")
          .toLowerCase()
          .includes(q);
      })
      .sort((a, b) => rank(a) - rank(b) || a.id.localeCompare(b.id));
  }, [jobs, query, filter]);

  return (
    <div className="flex h-full min-h-0 min-w-0 flex-col border-border lg:border-r">
      <div className="space-y-3 p-3">
        <label className="flex h-11 items-center gap-2 rounded-lg border border-border bg-surface px-3">
          <Search className="size-4 shrink-0 text-muted" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Style, buyer, or WO"
            className="w-full bg-transparent text-sm text-fg outline-none placeholder:text-muted"
          />
        </label>
        <div className="flex gap-2">
          {FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
              className={`h-9 flex-1 rounded-lg text-sm ${
                filter === item.id ? "bg-surface-2 text-fg" : "text-muted"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <ul className="min-h-0 flex-1 overflow-y-auto px-2 pb-3">
        {visible.length === 0 ? (
          <li className="px-3 py-8 text-sm text-muted">No orders in this cut.</li>
        ) : (
          visible.map((job) => {
            const contact = contactById(job.contactId);
            const selected = job.id === selectedId;
            return (
              <li key={job.id}>
                <button
                  type="button"
                  onClick={() => onOpen(job.id)}
                  className={`mb-1 w-full rounded-lg border-l-2 px-3 py-3 text-left ${
                    selected
                      ? "border-primary bg-surface-2"
                      : "border-transparent hover:bg-surface"
                  }`}
                >
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="font-medium tabular-nums">{job.id}</span>
                    <span
                      className={`text-xs tracking-wide uppercase ${
                        job.followUpDue ? "text-alert" : "text-muted"
                      }`}
                    >
                      {job.followUpDue ? "Due" : job.dueLabel}
                    </span>
                  </span>
                  <span className="mt-1 block font-display text-lg leading-tight">{job.style}</span>
                  <span className="mt-1 block text-sm text-muted">
                    {job.qty} pcs · {job.buyer}
                  </span>
                  <span className="mt-2 flex items-center justify-between gap-2 text-sm">
                    <span className="truncate text-fg">
                      {firstName(contact.name)} · {contact.shop}
                    </span>
                    <span className="shrink-0 text-muted">{STAGE_LABEL[job.stage]}</span>
                  </span>
                </button>
              </li>
            );
          })
        )}
      </ul>
      <p className="border-t border-border px-4 py-3 text-sm text-pretty text-muted">
        Due chases go out in the merchandiser’s WhatsApp voice. Answer as the floor and the board moves.
      </p>
    </div>
  );
}

function Thread({
  selectedId,
  onBack,
  onOpenOrder,
}: {
  selectedId: string;
  onBack: () => void;
  onOpenOrder: () => void;
}) {
  const jobs = useDesk((s) => s.jobs);
  const messages = useDesk((s) => s.messages);
  const sendMerch = useDesk((s) => s.sendMerch);
  const pushThem = useDesk((s) => s.pushThem);
  const ack = useDesk((s) => s.ack);
  const sendFollowUp = useDesk((s) => s.sendFollowUp);
  const rules = useDesk((s) => s.rules);
  const job = jobs.find((item) => item.id === selectedId) ?? jobs[0];
  const contact = job ? contactById(job.contactId) : CONTACTS[0];
  const thread = messages
    .filter((msg) => msg.contactId === contact?.id)
    .slice()
    .sort((a, b) => a.at - b.at);
  const [draft, setDraft] = useState("");
  const [asFloor, setAsFloor] = useState(false);
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [thread.length, typing, selectedId]);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  if (!job || !contact) return null;

  const ruleOn = job.stage === "shipped" ? false : rules[job.stage];
  const chips = suggestions(job.stage);

  function sendDraft() {
    const text = draft.trim();
    if (!text || typing) return;
    setDraft("");
    if (asFloor) simulate(text);
    else sendMerch(job.id, text);
  }

  function simulate(text: string) {
    if (typing) return;
    pushThem(job.id, text);
    setTyping(true);
    timer.current = window.setTimeout(() => {
      ack(job.id, text);
      setTyping(false);
    }, 700);
  }

  let lastDay = "";

  return (
    <div className="paper-grain flex h-full min-h-0 min-w-0 flex-col text-paper-fg">
      <header className="flex items-center gap-2 border-b border-paper-fg/10 px-2 py-2 sm:px-4">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back to orders"
          className="flex h-11 w-11 items-center justify-center rounded-lg lg:hidden"
        >
          <ChevronLeft className="size-5" />
        </button>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm text-primary-fg">
          {initials(contact.name)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium">{contact.name}</p>
          <p className="truncate text-sm text-paper-fg/70">
            WhatsApp · {contact.role} · {contact.shop}
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenOrder}
          className="h-11 rounded-lg px-3 text-sm text-paper-fg/80 lg:hidden"
        >
          Order
        </button>
      </header>

      <div className="min-h-0 min-w-0 flex-1 space-y-2 overflow-y-auto px-3 py-4 sm:px-5" role="log" aria-live="polite">
        <p className="mx-auto mb-4 max-w-full text-center text-xs text-pretty text-paper-fg/60">
          Threadline replies as the Northline desk. Messages stay in this browser — this is the chase, not a live WhatsApp line.
        </p>
        {thread.map((msg) => {
          const showDay = msg.day !== lastDay;
          lastDay = msg.day;
          const mine = msg.from === "bot";
          return (
            <div key={msg.id}>
              {showDay ? (
                <p className="mx-auto my-2 w-fit rounded-full bg-paper-fg/10 px-3 py-1 text-xs text-paper-fg/70">
                  {msg.day}
                </p>
              ) : null}
              <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed text-pretty sm:max-w-md ${
                    mine
                      ? "rounded-tr-sm bg-out text-out-fg"
                      : "rounded-tl-sm bg-bubble text-paper-fg"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className={`mt-1 flex items-center justify-end gap-1 text-xs tabular-nums ${mine ? "text-out-fg/60" : "text-paper-fg/50"}`}>
                    {msg.timeLabel}
                    {mine ? <CheckCheck className="size-3.5" aria-label="Read" /> : null}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {typing ? (
          <div className="flex justify-end">
            <p className="flex items-center gap-1 rounded-2xl rounded-tr-sm bg-out px-3 py-3 text-out-fg" aria-label="Desk is typing">
              <span className="typing-dot size-1.5 rounded-full bg-out-fg" />
              <span className="typing-dot size-1.5 rounded-full bg-out-fg" />
              <span className="typing-dot size-1.5 rounded-full bg-out-fg" />
            </p>
          </div>
        ) : null}
        <div ref={endRef} />
      </div>

      <div className="shrink-0 border-t border-paper-fg/10 px-3 py-3 sm:px-4">
        {job.followUpDue && job.stage !== "shipped" ? (
          <button
            type="button"
            disabled={!ruleOn}
            onClick={() => sendFollowUp(job.id)}
            className="mb-3 h-11 w-full rounded-lg bg-primary text-sm font-medium text-primary-fg disabled:opacity-40"
          >
            {ruleOn ? `Send chase for ${job.id}` : `${STAGE_LABEL[job.stage]} chase is off`}
          </button>
        ) : null}
        <p className="mb-2 text-xs tracking-wide text-paper-fg/60 uppercase">Reply as {firstName(contact.name)}</p>
        <div className="mb-3 flex min-w-0 flex-wrap gap-2">
          {chips.map((chip) => (
            <button
              key={chip}
              type="button"
              disabled={typing}
              onClick={() => simulate(chip)}
              className="min-h-11 max-w-full rounded-full border border-paper-fg/15 bg-bubble px-3 text-left text-sm text-pretty text-paper-fg disabled:opacity-40"
            >
              {chip}
            </button>
          ))}
        </div>
        <form
          className="flex min-w-0 items-end gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            sendDraft();
          }}
        >
          <div className="flex h-11 shrink-0 overflow-hidden rounded-full border border-paper-fg/15 bg-bubble text-sm">
            <button
              type="button"
              onClick={() => setAsFloor(false)}
              aria-pressed={!asFloor}
              className={`px-3 ${asFloor ? "text-paper-fg/50" : "bg-primary text-primary-fg"}`}
            >
              Desk
            </button>
            <button
              type="button"
              onClick={() => setAsFloor(true)}
              aria-pressed={asFloor}
              className={`px-3 ${asFloor ? "bg-primary text-primary-fg" : "text-paper-fg/50"}`}
            >
              Floor
            </button>
          </div>
          <label className="sr-only" htmlFor="composer">
            {asFloor ? `Reply as ${contact.name}` : "Message on WhatsApp"}
          </label>
          <textarea
            id="composer"
            rows={1}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                sendDraft();
              }
            }}
            placeholder={asFloor ? `Reply as ${firstName(contact.name)}` : "Message on WhatsApp"}
            className="h-11 max-h-24 min-w-0 flex-1 resize-none rounded-full border border-paper-fg/15 bg-bubble px-4 py-2.5 text-sm text-paper-fg outline-none placeholder:text-paper-fg/40"
          />
          <button
            type="submit"
            disabled={!draft.trim() || typing}
            aria-label="Send"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-fg disabled:opacity-40"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

function Inspector({ selectedId }: { selectedId: string }) {
  const jobs = useDesk((s) => s.jobs);
  const rules = useDesk((s) => s.rules);
  const toggleRule = useDesk((s) => s.toggleRule);
  const setStage = useDesk((s) => s.setStage);
  const job = jobs.find((item) => item.id === selectedId) ?? jobs[0];
  if (!job) return null;
  const contact = contactById(job.contactId);

  return (
    <div className="h-full min-w-0 overflow-y-auto border-border lg:border-l">
      <div className="space-y-5 p-4 sm:p-5">
        <div>
          <p className="text-sm text-muted tabular-nums">{job.id} · {job.sku}</p>
          <h2 className="mt-1 font-display text-2xl leading-tight">{job.style}</h2>
          <p className="mt-2 text-sm text-muted">
            {job.qty} pcs for {job.buyer}
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-3 text-sm">
          <Fact label="Due" value={job.dueLabel} warn={job.urgency === "late" && job.stage !== "shipped"} />
          <Fact label="Stage" value={STAGE_LABEL[job.stage]} />
          <Fact label="Chasing" value={`${contact.name} · ${contact.phone}`} wide />
          <Fact label="Next" value={job.snooze} wide />
        </dl>

        <p className="flex items-start gap-2 text-sm text-pretty text-muted">
          <Clock3 className="mt-0.5 size-4 shrink-0" />
          <span>
            {job.unanswered === 0
              ? "No open ping."
              : `${job.unanswered} unanswered ${job.unanswered === 1 ? "ping" : "pings"}.`}{" "}
            {job.lastNote}
          </span>
        </p>

        <div>
          <h3 className="text-sm font-medium">Move the order</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {STAGES.map((stage) => (
              <button
                key={stage}
                type="button"
                aria-pressed={job.stage === stage}
                onClick={() => setStage(job.id, stage)}
                className={`h-11 rounded-lg px-3 text-sm ${
                  job.stage === stage ? "bg-primary text-primary-fg" : "bg-surface-2 text-fg"
                }`}
              >
                {STAGE_LABEL[stage]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium">Bot rules</h3>
          <ul className="mt-2 space-y-2">
            {RULE_COPY.map((rule) => {
              const on = rules[rule.key];
              return (
                <li key={rule.key} className="rounded-lg bg-surface p-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium">{rule.title}</p>
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggleRule(rule.key)}
                      className={`h-9 min-w-14 rounded-lg px-3 text-sm ${
                        on ? "bg-primary text-primary-fg" : "bg-surface-2 text-muted"
                      }`}
                    >
                      {on ? "On" : "Off"}
                    </button>
                  </div>
                  <p className="mt-1 text-sm text-pretty text-muted">{rule.detail}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Fact({
  label,
  value,
  warn = false,
  wide = false,
}: {
  label: string;
  value: string;
  warn?: boolean;
  wide?: boolean;
}) {
  return (
    <div className={`rounded-lg bg-surface px-3 py-2 ${wide ? "col-span-2" : ""}`}>
      <dt className="text-xs tracking-wide text-muted uppercase">{label}</dt>
      <dd className={`mt-1 break-words text-pretty ${warn ? "text-alert" : "text-fg"}`}>{value}</dd>
    </div>
  );
}

function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("");
}
