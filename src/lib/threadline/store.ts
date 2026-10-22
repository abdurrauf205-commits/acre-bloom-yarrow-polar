import { create } from "zustand";
import {
  contactById,
  DEFAULT_RULES,
  firstName,
  initialJobs,
  initialMessages,
  makeMsg,
} from "./data";
import { applyIntent, followUpCopy } from "./engine";
import type { Job, Msg, Persisted, RuleKey, Stage } from "./types";

export const STORAGE_KEY = "threadline-desk-v1";

type DeskState = Persisted & {
  select: (id: string) => void;
  toggleRule: (key: RuleKey) => void;
  sendMerch: (jobId: string, text: string) => void;
  pushThem: (jobId: string, text: string) => void;
  ack: (jobId: string, text: string) => void;
  sendFollowUp: (jobId: string) => boolean;
  setStage: (jobId: string, stage: Stage) => void;
  reset: () => void;
  hydrate: (data: Persisted) => void;
};

function patchJob(jobs: Job[], id: string, next: Job): Job[] {
  return jobs.map((job) => (job.id === id ? next : job));
}

function persist(state: Persisted) {
  if (typeof window === "undefined") return;
  const data: Persisted = {
    jobs: state.jobs,
    messages: state.messages,
    rules: state.rules,
    selectedId: state.selectedId,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export const useDesk = create<DeskState>((set, get) => {
  function commit(partial: Partial<Persisted>) {
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
      const rules = { ...get().rules, [key]: !get().rules[key] };
      commit({ rules });
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
        text: trimmed,
      });
      const next: Job = {
        ...job,
        unanswered: job.unanswered + 1,
        followUpDue: false,
        snooze: "Waiting on a reply",
        lastNote: trimmed,
      };
      commit({
        jobs: patchJob(get().jobs, jobId, next),
        messages: [...get().messages, msg],
      });
    },
    pushThem: (jobId, text) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      const job = get().jobs.find((item) => item.id === jobId);
      if (!job) return;
      const msg: Msg = makeMsg({
        contactId: job.contactId,
        jobId,
        from: "them",
        text: trimmed,
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
        text: result.reply,
      });
      commit({
        jobs: patchJob(get().jobs, jobId, result.job),
        messages: [...get().messages, msg],
      });
    },
    sendFollowUp: (jobId) => {
      const job = get().jobs.find((item) => item.id === jobId);
      if (!job || job.stage === "shipped") return false;
      const ruleOn = get().rules[job.stage];
      if (!ruleOn) return false;
      const contact = contactById(job.contactId);
      const text = followUpCopy(job, firstName(contact.name));
      const msg = makeMsg({
        contactId: job.contactId,
        jobId,
        from: "bot",
        text,
      });
      const unanswered = job.unanswered + 1;
      const next: Job = {
        ...job,
        unanswered,
        followUpDue: false,
        snooze: unanswered >= 3 ? "Escalated — call them" : "Waiting on a reply",
      };
      commit({
        jobs: patchJob(get().jobs, jobId, next),
        messages: [...get().messages, msg],
      });
      return true;
    },
    setStage: (jobId, stage) => {
      const job = get().jobs.find((item) => item.id === jobId);
      if (!job) return;
      const next: Job = {
        ...job,
        stage,
        followUpDue: false,
        urgency: stage === "shipped" ? "ok" : job.urgency,
        dueLabel: stage === "shipped" ? "Shipped" : job.dueLabel,
        snooze: stage === "shipped" ? "Chase closed" : "Stage set by you",
      };
      commit({ jobs: patchJob(get().jobs, jobId, next) });
    },
    reset: () => {
      if (typeof window !== "undefined") localStorage.removeItem(STORAGE_KEY);
      set({
        jobs: initialJobs(),
        messages: initialMessages(),
        rules: { ...DEFAULT_RULES },
        selectedId: "WO-4418",
      });
    },
    hydrate: (data) => {
      if (!data.jobs?.length || !data.messages?.length || !data.rules) return;
      set({
        jobs: data.jobs,
        messages: data.messages,
        rules: { ...DEFAULT_RULES, ...data.rules },
        selectedId: data.selectedId || data.jobs[0]?.id || "WO-4418",
      });
    },
  };
});
