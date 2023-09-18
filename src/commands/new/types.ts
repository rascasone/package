import { JSX } from "react";

export type StepName =
  | "PackageName"
  | "SelectLanguage"
  | "SelectTemplate"
  | "SelectVariant"
  | "PackageSummary";

export type Step = Record<StepName, () => JSX.Element>;
