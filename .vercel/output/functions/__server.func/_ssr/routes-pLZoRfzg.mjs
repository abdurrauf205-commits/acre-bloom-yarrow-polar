import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Clock3, i as RotateCcw, n as Send, o as ChevronLeft, r as Search, s as CheckCheck } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-pLZoRfzg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CONTACTS = [
	{
		id: "rina",
		name: "Rina Voss",
		role: "Line supervisor",
		shop: "Line 3",
		phone: "+1 415 555 0142"
	},
	{
		id: "prakash",
		name: "Prakash Nair",
		role: "Wash house",
		shop: "Riverwash",
		phone: "+91 98400 22110"
	},
	{
		id: "mei",
		name: "Mei Chen",
		role: "QC",
		shop: "Shade bay",
		phone: "+1 628 555 0194"
	},
	{
		id: "omar",
		name: "Omar Haddad",
		role: "Trim store",
		shop: "Cage B",
		phone: "+1 510 555 0177"
	},
	{
		id: "lena",
		name: "Lena Ortiz",
		role: "Shipping",
		shop: "Dock",
		phone: "+1 415 555 0118"
	}
];
var SEED_JOBS = [
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
		lastNote: "Collars were short yesterday. Bodies are done."
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
		lastNote: "Lot was still in the drum yesterday."
	},
	{
		id: "WO-4433",
		style: "Canvas market tote",
		sku: "TB-CNV-11",
		qty: 1e3,
		buyer: "Market Day",
		dueLabel: "Thu 30 Oct",
		urgency: "late",
		stage: "material",
		contactId: "omar",
		followUpDue: true,
		unanswered: 2,
		snooze: "No reply — last WhatsApp chase",
		lastNote: "25mm webbing dye lot never confirmed."
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
		lastNote: "Shade is lighter than standard."
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
		lastNote: "14 cartons handed to the carrier."
	}
];
var SEED_MESSAGES = [
	{
		id: "m1",
		contactId: "rina",
		jobId: "WO-4418",
		from: "bot",
		at: 10,
		day: "Yesterday",
		timeLabel: "16:02",
		text: "Rina — Olive chore coat WO-4418, 320 pcs for Atelier North, due Saturday. Collar was short yesterday. What's the count now?"
	},
	{
		id: "m2",
		contactId: "rina",
		jobId: "WO-4418",
		from: "them",
		at: 20,
		day: "Yesterday",
		timeLabel: "16:41",
		text: "Collar team finished 90. Bodies are done. I'll keep them tonight."
	},
	{
		id: "m3",
		contactId: "prakash",
		jobId: "WO-4421",
		from: "bot",
		at: 30,
		day: "Yesterday",
		timeLabel: "11:20",
		text: "Prakash, status on Indigo type-II WO-4421 (180 pcs)? Need the ship-ready count and when the lot leaves Riverwash."
	},
	{
		id: "m4",
		contactId: "prakash",
		jobId: "WO-4421",
		from: "them",
		at: 40,
		day: "Yesterday",
		timeLabel: "13:05",
		text: "Lot is in the drum. Softener tomorrow, then back to you."
	},
	{
		id: "m5",
		contactId: "prakash",
		jobId: "WO-4421",
		from: "bot",
		at: 50,
		day: "Today",
		timeLabel: "08:12",
		text: "Prakash, following up on Indigo type-II WO-4421 — softener should be done. How many are ready, and when does the van leave?"
	},
	{
		id: "m6",
		contactId: "mei",
		jobId: "WO-4390",
		from: "bot",
		at: 60,
		day: "Today",
		timeLabel: "07:48",
		text: "Mei, Merino crew WO-4390 is on shade hold for Hearth Goods. Cleared to pack, or are we recutting?"
	},
	{
		id: "m7",
		contactId: "mei",
		jobId: "WO-4390",
		from: "them",
		at: 70,
		day: "Today",
		timeLabel: "08:20",
		text: "Lighter than the standard. Waiting on the buyer comment before I release it."
	},
	{
		id: "m8",
		contactId: "omar",
		jobId: "WO-4433",
		from: "bot",
		at: 80,
		day: "Yesterday",
		timeLabel: "09:10",
		text: "Omar, canvas market tote WO-4433 is waiting on 25mm webbing. ETA for the dye lot?"
	},
	{
		id: "m9",
		contactId: "omar",
		jobId: "WO-4433",
		from: "bot",
		at: 90,
		day: "Yesterday",
		timeLabel: "15:40",
		text: "Omar, following up — the Market Day tote still can't be issued without webbing. Need an ETA today."
	},
	{
		id: "m10",
		contactId: "lena",
		jobId: "WO-4402",
		from: "bot",
		at: 100,
		day: "Yesterday",
		timeLabel: "17:05",
		text: "Lena, wool overshirt WO-4402 — has the dock released it?"
	},
	{
		id: "m11",
		contactId: "lena",
		jobId: "WO-4402",
		from: "them",
		at: 110,
		day: "Yesterday",
		timeLabel: "17:22",
		text: "14 cartons, handed to the carrier. POD is on the board."
	},
	{
		id: "m12",
		contactId: "lena",
		jobId: "WO-4402",
		from: "bot",
		at: 120,
		day: "Yesterday",
		timeLabel: "17:23",
		text: "Marked WO-4402 shipped. Chase is closed."
	}
];
var DEFAULT_RULES = {
	sewing: true,
	vendor: true,
	qc: true,
	material: true
};
var STAGE_LABEL = {
	sewing: "On the line",
	vendor: "At the vendor",
	qc: "QC hold",
	material: "Waiting trims",
	shipped: "Shipped"
};
var FLOOR_CLOCK = "Thu 22 Oct · 09:30";
function initialJobs() {
	return structuredClone(SEED_JOBS);
}
function initialMessages() {
	return structuredClone(SEED_MESSAGES);
}
function contactById(id) {
	const found = CONTACTS.find((c) => c.id === id);
	if (!found) throw new Error(`Unknown contact ${id}`);
	return found;
}
function firstName(name) {
	return name.split(" ")[0] ?? name;
}
var msgSeq = 200;
function makeMsg(input) {
	msgSeq += 1;
	const now = /* @__PURE__ */ new Date();
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
		day: "Today"
	};
}
var SHIPPED = /(dispatch|shipped|handed to the carrier|carton|on the truck|left the dock)/;
var CLEARED = /(cleared|released|shade ok|buyer approved|approved to pack|issued|arrived|received|in house)/;
var QC = /(qc|shade|reject|recut|measurement|failed lot|\bhold\b)/;
var MATERIAL = /(webbing|dye lot|not in store|waiting on|trim wait|no trims|fabric late)/;
var DELAY = /(machine|down|delay|behind|friday|bottleneck|short of)/;
var PROGRESS = /(done today|output|on track|pcs|pieces|sewn|washed|drum|leaves|van|ready|finish)/;
function interpret(text) {
	const t = text.toLowerCase();
	if (SHIPPED.test(t)) return "shipped";
	if (CLEARED.test(t)) return "progress";
	if (QC.test(t)) return "qc";
	if (MATERIAL.test(t)) return "material";
	if (DELAY.test(t)) return "delay";
	if (PROGRESS.test(t)) return "progress";
	return "unknown";
}
function applyIntent(job, text) {
	const intent = interpret(text);
	const heard = {
		...job,
		unanswered: 0,
		followUpDue: false,
		lastNote: text
	};
	switch (intent) {
		case "shipped": return {
			job: {
				...heard,
				stage: "shipped",
				urgency: "ok",
				dueLabel: "Shipped",
				snooze: "Chase closed"
			},
			reply: `Marked ${job.id} shipped. I'm closing the chase and keeping your note on the order.`
		};
		case "qc": return {
			job: {
				...heard,
				stage: "qc",
				snooze: "Hold — line stays quiet"
			},
			reply: `QC hold logged on ${job.id}. I won't chase the line. Reply "cleared" when the buyer signs off.`
		};
		case "material": return {
			job: {
				...heard,
				stage: "material",
				snooze: "Ask the store tomorrow"
			},
			reply: `Trim wait logged on ${job.id}. I'll leave the line alone and ask again tomorrow unless you send an ETA.`
		};
		case "delay": return {
			job: {
				...heard,
				urgency: "late",
				snooze: "Chase again this afternoon"
			},
			reply: `Delay noted on ${job.id}. It stays on the rush list — I'll ping again this afternoon.`
		};
		case "progress": {
			let stage = job.stage;
			if ((stage === "qc" || stage === "material") && CLEARED.test(text.toLowerCase())) stage = "sewing";
			return {
				job: {
					...heard,
					stage,
					snooze: "Next check in 8h"
				},
				reply: `Logged. ${job.id} stays in play. Next check in 8 hours unless the floor writes first.`
			};
		}
		default: return {
			job: {
				...heard,
				snooze: "Reply saved — still open"
			},
			reply: `Saved on ${job.id}. Reply with output, a delay, trims, QC, or shipped and I'll move the board.`
		};
	}
}
function followUpCopy(job, name) {
	if (job.unanswered >= 2) return `Still nothing on ${job.style} ${job.id}. This is the last WhatsApp chase — if I don't hear back I'm calling ${job.stage === "vendor" ? "the vendor" : "the floor"} and flagging ${job.buyer}.`;
	if (job.unanswered === 1) return `${name}, following up on ${job.style} ${job.id}. I don't have an update yet. Need output, a hold, or a new date today.`;
	switch (job.stage) {
		case "sewing": return `${name} — ${job.style} ${job.id}, ${job.qty} pcs for ${job.buyer}, due ${job.dueLabel}. What's line output today, and is anything blocking the finish?`;
		case "vendor": return `${name}, status on ${job.style} ${job.id} (${job.qty} pcs)? Need the ship-ready count and when the lot leaves your floor.`;
		case "qc": return `${name}, ${job.style} ${job.id} is still on hold. Cleared to pack, or are we recutting?`;
		case "material": return `${name}, ${job.style} ${job.id} is waiting on trims. What's missing, and what's the ETA today?`;
		case "shipped": return `${name}, confirming ${job.style} ${job.id} has left. Carton count when you have it.`;
	}
}
function suggestions(stage) {
	switch (stage) {
		case "sewing": return [
			"186 done today, collar still slow",
			"Machine 4 is down until Friday",
			"On track, finish tomorrow"
		];
		case "vendor": return [
			"140 washed, 40 still in the drum",
			"Lot leaves tomorrow 6am",
			"Machine down, delay to Friday"
		];
		case "qc": return [
			"Shade failed, recut 40 pcs",
			"Cleared — buyer approved the lot",
			"Still on hold for measurement"
		];
		case "material": return [
			"Webbing lands tomorrow 11am",
			"Trim not in store, dye lot slipped",
			"Webbing received, issued to the line"
		];
		case "shipped": return ["18 cartons dispatched", "Handed to the carrier just now"];
	}
}
var RULE_COPY = [
	{
		key: "sewing",
		title: "Line chase",
		detail: "Ask for output when a sewing order has gone quiet."
	},
	{
		key: "vendor",
		title: "Vendor chase",
		detail: "Ask wash and subcontract lots for a ship-ready count."
	},
	{
		key: "qc",
		title: "Hold check",
		detail: "Ask QC once. Don't ping the line while a hold is open."
	},
	{
		key: "material",
		title: "Trim chase",
		detail: "Ask the store for an ETA, then wait until morning."
	}
];
var STORAGE_KEY = "threadline-desk-v1";
function patchJob(jobs, id, next) {
	return jobs.map((job) => job.id === id ? next : job);
}
function persist(state) {
	if (typeof window === "undefined") return;
	const data = {
		jobs: state.jobs,
		messages: state.messages,
		rules: state.rules,
		selectedId: state.selectedId
	};
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
var useDesk = create((set, get) => {
	function commit(partial) {
		set(partial);
		persist(get());
	}
	return {
		jobs: initialJobs(),
		messages: initialMessages(),
		rules: { ...DEFAULT_RULES },
		selectedId: "WO-4418",
		select: (id) => commit({ selectedId: id }),
		toggleRule: (key) => {
			commit({ rules: {
				...get().rules,
				[key]: !get().rules[key]
			} });
		},
		sendMerch: (jobId, text) => {
			const trimmed = text.trim();
			if (!trimmed) return;
			const job = get().jobs.find((item) => item.id === jobId);
			if (!job) return;
			const msg = makeMsg({
				contactId: job.contactId,
				jobId,
				from: "bot",
				text: trimmed
			});
			const next = {
				...job,
				unanswered: job.unanswered + 1,
				followUpDue: false,
				snooze: "Waiting on a reply",
				lastNote: trimmed
			};
			commit({
				jobs: patchJob(get().jobs, jobId, next),
				messages: [...get().messages, msg]
			});
		},
		pushThem: (jobId, text) => {
			const trimmed = text.trim();
			if (!trimmed) return;
			const job = get().jobs.find((item) => item.id === jobId);
			if (!job) return;
			const msg = makeMsg({
				contactId: job.contactId,
				jobId,
				from: "them",
				text: trimmed
			});
			commit({ messages: [...get().messages, msg] });
		},
		ack: (jobId, text) => {
			const job = get().jobs.find((item) => item.id === jobId);
			if (!job) return;
			const result = applyIntent(job, text);
			const msg = makeMsg({
				contactId: job.contactId,
				jobId,
				from: "bot",
				text: result.reply
			});
			commit({
				jobs: patchJob(get().jobs, jobId, result.job),
				messages: [...get().messages, msg]
			});
		},
		sendFollowUp: (jobId) => {
			const job = get().jobs.find((item) => item.id === jobId);
			if (!job || job.stage === "shipped") return false;
			if (!get().rules[job.stage]) return false;
			const text = followUpCopy(job, firstName(contactById(job.contactId).name));
			const msg = makeMsg({
				contactId: job.contactId,
				jobId,
				from: "bot",
				text
			});
			const unanswered = job.unanswered + 1;
			const next = {
				...job,
				unanswered,
				followUpDue: false,
				snooze: unanswered >= 3 ? "Escalated — call them" : "Waiting on a reply"
			};
			commit({
				jobs: patchJob(get().jobs, jobId, next),
				messages: [...get().messages, msg]
			});
			return true;
		},
		setStage: (jobId, stage) => {
			const job = get().jobs.find((item) => item.id === jobId);
			if (!job) return;
			const next = {
				...job,
				stage,
				followUpDue: false,
				urgency: stage === "shipped" ? "ok" : job.urgency,
				dueLabel: stage === "shipped" ? "Shipped" : job.dueLabel,
				snooze: stage === "shipped" ? "Chase closed" : "Stage set by you"
			};
			commit({ jobs: patchJob(get().jobs, jobId, next) });
		},
		reset: () => {
			if (typeof window !== "undefined") localStorage.removeItem(STORAGE_KEY);
			set({
				jobs: initialJobs(),
				messages: initialMessages(),
				rules: { ...DEFAULT_RULES },
				selectedId: "WO-4418"
			});
		},
		hydrate: (data) => {
			if (!data.jobs?.length || !data.messages?.length || !data.rules) return;
			set({
				jobs: data.jobs,
				messages: data.messages,
				rules: {
					...DEFAULT_RULES,
					...data.rules
				},
				selectedId: data.selectedId || data.jobs[0]?.id || "WO-4418"
			});
		}
	};
});
var FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "due",
		label: "Due"
	},
	{
		id: "hold",
		label: "Holds"
	},
	{
		id: "shipped",
		label: "Shipped"
	}
];
var STAGES = [
	"sewing",
	"vendor",
	"qc",
	"material",
	"shipped"
];
function useHydrateDesk() {
	const hydrate = useDesk((s) => s.hydrate);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (!raw) return;
			hydrate(JSON.parse(raw));
		} catch {}
	}, [hydrate]);
}
function rank(job) {
	if (job.stage === "shipped") return 50;
	if (job.followUpDue) return job.urgency === "late" ? 0 : 1;
	if (job.urgency === "late") return 2;
	if (job.urgency === "soon") return 3;
	return 4;
}
function Desk() {
	useHydrateDesk();
	const [pane, setPane] = (0, import_react.useState)("queue");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const jobs = useDesk((s) => s.jobs);
	const selectedId = useDesk((s) => s.selectedId);
	const select = useDesk((s) => s.select);
	const sendFollowUp = useDesk((s) => s.sendFollowUp);
	const reset = useDesk((s) => s.reset);
	const rules = useDesk((s) => s.rules);
	const due = jobs.filter((job) => job.followUpDue && job.stage !== "shipped" && rules[job.stage]);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 px-4 py-3 sm:px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 flex-1 items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary font-display text-lg text-primary-fg",
								children: "T"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display text-xl leading-none tracking-tight",
									children: "Threadline"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 truncate text-sm text-muted",
									children: "Northline Apparel · WhatsApp follow-up"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "hidden text-right text-sm text-muted tabular-nums md:block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-fg",
									children: FLOOR_CLOCK
								}),
								open,
								" open · ",
								due.length,
								" due · ",
								holds,
								" on hold"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => void sendDue(),
							disabled: busy || due.length === 0,
							className: "h-11 shrink-0 rounded-lg bg-primary px-4 text-sm font-medium text-primary-fg disabled:opacity-40",
							children: busy ? "Sending…" : due.length === 0 ? "Nothing due" : `Send ${due.length} due`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: reset,
							"aria-label": "Reset the floor desk",
							className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "stitch",
					"aria-hidden": "true"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex shrink-0 border-b border-border lg:hidden",
				"aria-label": "Desk sections",
				children: [
					["queue", "Orders"],
					["thread", "WhatsApp"],
					["order", "Chase"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setPane(id),
					className: `h-11 flex-1 text-sm ${pane === id ? "text-primary" : "text-muted"}`,
					"aria-current": pane === id ? "page" : void 0,
					children: label
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-h-0 min-w-0 flex-1 grid-rows-[minmax(0,1fr)] lg:grid-cols-[20rem_minmax(0,1fr)_22rem]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: pane === "queue" ? "flex h-full min-h-0 min-w-0 flex-col" : "hidden h-full min-h-0 min-w-0 lg:flex lg:flex-col",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Queue, { onOpen: (id) => {
							select(id);
							setPane("thread");
						} })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: pane === "thread" ? "flex h-full min-h-0 min-w-0 flex-col" : "hidden h-full min-h-0 min-w-0 lg:flex lg:flex-col",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thread, {
							selectedId,
							onBack: () => setPane("queue"),
							onOpenOrder: () => setPane("order")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: pane === "order" ? "h-full min-h-0 min-w-0 overflow-y-auto" : "hidden h-full min-h-0 min-w-0 overflow-y-auto lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inspector, { selectedId })
					})
				]
			})
		]
	});
}
function Queue({ onOpen }) {
	const jobs = useDesk((s) => s.jobs);
	const selectedId = useDesk((s) => s.selectedId);
	const [query, setQuery] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const visible = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		return [...jobs].filter((job) => {
			if (filter === "due") return job.followUpDue && job.stage !== "shipped";
			if (filter === "hold") return job.stage === "qc" || job.stage === "material";
			if (filter === "shipped") return job.stage === "shipped";
			return true;
		}).filter((job) => {
			if (!q) return true;
			const contact = contactById(job.contactId);
			return [
				job.id,
				job.style,
				job.buyer,
				job.sku,
				contact.name
			].join(" ").toLowerCase().includes(q);
		}).sort((a, b) => rank(a) - rank(b) || a.id.localeCompare(b.id));
	}, [
		jobs,
		query,
		filter
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 min-w-0 flex-col border-border lg:border-r",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex h-11 items-center gap-2 rounded-lg border border-border bg-surface px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 shrink-0 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (event) => setQuery(event.target.value),
						placeholder: "Style, buyer, or WO",
						className: "w-full bg-transparent text-sm text-fg outline-none placeholder:text-muted"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2",
					children: FILTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(item.id),
						"aria-pressed": filter === item.id,
						className: `h-9 flex-1 rounded-lg text-sm ${filter === item.id ? "bg-surface-2 text-fg" : "text-muted"}`,
						children: item.label
					}, item.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "min-h-0 flex-1 overflow-y-auto px-2 pb-3",
				children: visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "px-3 py-8 text-sm text-muted",
					children: "No orders in this cut."
				}) : visible.map((job) => {
					const contact = contactById(job.contactId);
					const selected = job.id === selectedId;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onOpen(job.id),
						className: `mb-1 w-full rounded-lg border-l-2 px-3 py-3 text-left ${selected ? "border-primary bg-surface-2" : "border-transparent hover:bg-surface"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-baseline justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium tabular-nums",
									children: job.id
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `text-xs tracking-wide uppercase ${job.followUpDue ? "text-alert" : "text-muted"}`,
									children: job.followUpDue ? "Due" : job.dueLabel
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-display text-lg leading-tight",
								children: job.style
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-1 block text-sm text-muted",
								children: [
									job.qty,
									" pcs · ",
									job.buyer
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-2 flex items-center justify-between gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "truncate text-fg",
									children: [
										firstName(contact.name),
										" · ",
										contact.shop
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 text-muted",
									children: STAGE_LABEL[job.stage]
								})]
							})
						]
					}) }, job.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "border-t border-border px-4 py-3 text-sm text-pretty text-muted",
				children: "Due chases go out in the merchandiser’s WhatsApp voice. Answer as the floor and the board moves."
			})
		]
	});
}
function Thread({ selectedId, onBack, onOpenOrder }) {
	const jobs = useDesk((s) => s.jobs);
	const messages = useDesk((s) => s.messages);
	const sendMerch = useDesk((s) => s.sendMerch);
	const pushThem = useDesk((s) => s.pushThem);
	const ack = useDesk((s) => s.ack);
	const sendFollowUp = useDesk((s) => s.sendFollowUp);
	const rules = useDesk((s) => s.rules);
	const job = jobs.find((item) => item.id === selectedId) ?? jobs[0];
	const contact = job ? contactById(job.contactId) : CONTACTS[0];
	const thread = messages.filter((msg) => msg.contactId === contact?.id).slice().sort((a, b) => a.at - b.at);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [asFloor, setAsFloor] = (0, import_react.useState)(false);
	const [typing, setTyping] = (0, import_react.useState)(false);
	const endRef = (0, import_react.useRef)(null);
	const timer = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		endRef.current?.scrollIntoView({ block: "end" });
	}, [
		thread.length,
		typing,
		selectedId
	]);
	(0, import_react.useEffect)(() => {
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
	function simulate(text) {
		if (typing) return;
		pushThem(job.id, text);
		setTyping(true);
		timer.current = window.setTimeout(() => {
			ack(job.id, text);
			setTyping(false);
		}, 700);
	}
	let lastDay = "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "paper-grain flex h-full min-h-0 min-w-0 flex-col text-paper-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-2 border-b border-paper-fg/10 px-2 py-2 sm:px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onBack,
						"aria-label": "Back to orders",
						className: "flex h-11 w-11 items-center justify-center rounded-lg lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm text-primary-fg",
						children: initials(contact.name)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-medium",
							children: contact.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "truncate text-sm text-paper-fg/70",
							children: [
								"WhatsApp · ",
								contact.role,
								" · ",
								contact.shop
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onOpenOrder,
						className: "h-11 rounded-lg px-3 text-sm text-paper-fg/80 lg:hidden",
						children: "Order"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 min-w-0 flex-1 space-y-2 overflow-y-auto px-3 py-4 sm:px-5",
				role: "log",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mb-4 max-w-full text-center text-xs text-pretty text-paper-fg/60",
						children: "Threadline replies as the Northline desk. Messages stay in this browser — this is the chase, not a live WhatsApp line."
					}),
					thread.map((msg) => {
						const showDay = msg.day !== lastDay;
						lastDay = msg.day;
						const mine = msg.from === "bot";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [showDay ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto my-2 w-fit rounded-full bg-paper-fg/10 px-3 py-1 text-xs text-paper-fg/70",
							children: msg.day
						}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `flex ${mine ? "justify-end" : "justify-start"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed text-pretty sm:max-w-md ${mine ? "rounded-tr-sm bg-out text-out-fg" : "rounded-tl-sm bg-bubble text-paper-fg"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: msg.text }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: `mt-1 flex items-center justify-end gap-1 text-xs tabular-nums ${mine ? "text-out-fg/60" : "text-paper-fg/50"}`,
									children: [msg.timeLabel, mine ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, {
										className: "size-3.5",
										"aria-label": "Read"
									}) : null]
								})]
							})
						})] }, msg.id);
					}),
					typing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1 rounded-2xl rounded-tr-sm bg-out px-3 py-3 text-out-fg",
							"aria-label": "Desk is typing",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "typing-dot size-1.5 rounded-full bg-out-fg" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "typing-dot size-1.5 rounded-full bg-out-fg" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "typing-dot size-1.5 rounded-full bg-out-fg" })
							]
						})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shrink-0 border-t border-paper-fg/10 px-3 py-3 sm:px-4",
				children: [
					job.followUpDue && job.stage !== "shipped" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: !ruleOn,
						onClick: () => sendFollowUp(job.id),
						className: "mb-3 h-11 w-full rounded-lg bg-primary text-sm font-medium text-primary-fg disabled:opacity-40",
						children: ruleOn ? `Send chase for ${job.id}` : `${STAGE_LABEL[job.stage]} chase is off`
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-2 text-xs tracking-wide text-paper-fg/60 uppercase",
						children: ["Reply as ", firstName(contact.name)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex min-w-0 flex-wrap gap-2",
						children: chips.map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: typing,
							onClick: () => simulate(chip),
							className: "min-h-11 max-w-full rounded-full border border-paper-fg/15 bg-bubble px-3 text-left text-sm text-pretty text-paper-fg disabled:opacity-40",
							children: chip
						}, chip))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex min-w-0 items-end gap-2",
						onSubmit: (event) => {
							event.preventDefault();
							sendDraft();
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-11 shrink-0 overflow-hidden rounded-full border border-paper-fg/15 bg-bubble text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setAsFloor(false),
									"aria-pressed": !asFloor,
									className: `px-3 ${asFloor ? "text-paper-fg/50" : "bg-primary text-primary-fg"}`,
									children: "Desk"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setAsFloor(true),
									"aria-pressed": asFloor,
									className: `px-3 ${asFloor ? "bg-primary text-primary-fg" : "text-paper-fg/50"}`,
									children: "Floor"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "sr-only",
								htmlFor: "composer",
								children: asFloor ? `Reply as ${contact.name}` : "Message on WhatsApp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "composer",
								rows: 1,
								value: draft,
								onChange: (event) => setDraft(event.target.value),
								onKeyDown: (event) => {
									if (event.key === "Enter" && !event.shiftKey) {
										event.preventDefault();
										sendDraft();
									}
								},
								placeholder: asFloor ? `Reply as ${firstName(contact.name)}` : "Message on WhatsApp",
								className: "h-11 max-h-24 min-w-0 flex-1 resize-none rounded-full border border-paper-fg/15 bg-bubble px-4 py-2.5 text-sm text-paper-fg outline-none placeholder:text-paper-fg/40"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: !draft.trim() || typing,
								"aria-label": "Send",
								className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-fg disabled:opacity-40",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
							})
						]
					})
				]
			})
		]
	});
}
function Inspector({ selectedId }) {
	const jobs = useDesk((s) => s.jobs);
	const rules = useDesk((s) => s.rules);
	const toggleRule = useDesk((s) => s.toggleRule);
	const setStage = useDesk((s) => s.setStage);
	const job = jobs.find((item) => item.id === selectedId) ?? jobs[0];
	if (!job) return null;
	const contact = contactById(job.contactId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-full min-w-0 overflow-y-auto border-border lg:border-l",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5 p-4 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted tabular-nums",
						children: [
							job.id,
							" · ",
							job.sku
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-2xl leading-tight",
						children: job.style
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							job.qty,
							" pcs for ",
							job.buyer
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid grid-cols-2 gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Due",
							value: job.dueLabel,
							warn: job.urgency === "late" && job.stage !== "shipped"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Stage",
							value: STAGE_LABEL[job.stage]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Chasing",
							value: `${contact.name} · ${contact.phone}`,
							wide: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Next",
							value: job.snooze,
							wide: true
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-start gap-2 text-sm text-pretty text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "mt-0.5 size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						job.unanswered === 0 ? "No open ping." : `${job.unanswered} unanswered ${job.unanswered === 1 ? "ping" : "pings"}.`,
						" ",
						job.lastNote
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-medium",
					children: "Move the order"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-wrap gap-2",
					children: STAGES.map((stage) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": job.stage === stage,
						onClick: () => setStage(job.id, stage),
						className: `h-11 rounded-lg px-3 text-sm ${job.stage === stage ? "bg-primary text-primary-fg" : "bg-surface-2 text-fg"}`,
						children: STAGE_LABEL[stage]
					}, stage))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-medium",
					children: "Bot rules"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-2",
					children: RULE_COPY.map((rule) => {
						const on = rules[rule.key];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg bg-surface p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: rule.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": on,
									onClick: () => toggleRule(rule.key),
									className: `h-9 min-w-14 rounded-lg px-3 text-sm ${on ? "bg-primary text-primary-fg" : "bg-surface-2 text-muted"}`,
									children: on ? "On" : "Off"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-pretty text-muted",
								children: rule.detail
							})]
						}, rule.key);
					})
				})] })
			]
		})
	});
}
function Fact({ label, value, warn = false, wide = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-lg bg-surface px-3 py-2 ${wide ? "col-span-2" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: `mt-1 break-words text-pretty ${warn ? "text-alert" : "text-fg"}`,
			children: value
		})]
	});
}
function initials(name) {
	return name.split(" ").slice(0, 2).map((part) => part[0] ?? "").join("");
}
var SplitComponent = Desk;
//#endregion
export { SplitComponent as component };
