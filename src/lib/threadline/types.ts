export type Stage = "sewing" | "vendor" | "qc" | "material" | "shipped";

export type RuleKey = Exclude<Stage, "shipped">;

export type Urgency = "ok" | "soon" | "late";

export type Contact = {
  id: string;
  name: string;
  role: string;
  shop: string;
  phone: string;
};

export type Job = {
  id: string;
  style: string;
  sku: string;
  qty: number;
  buyer: string;
  dueLabel: string;
  urgency: Urgency;
  stage: Stage;
  contactId: string;
  followUpDue: boolean;
  unanswered: number;
  snooze: string;
  lastNote: string;
};

export type Msg = {
  id: string;
  contactId: string;
  jobId: string;
  from: "bot" | "them";
  text: string;
  at: number;
  timeLabel: string;
  day: string;
};

export type Persisted = {
  jobs: Job[];
  messages: Msg[];
  rules: Record<RuleKey, boolean>;
  selectedId: string;
};
