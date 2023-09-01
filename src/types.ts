import { JSX } from "react";
import {templates} from "../templates/index.js";

export type StepName =
  | "PackageName"
  | "SelectLanguage"
  | "SelectTemplate"
  | "SelectVariant"
  | "PackageSummary";

export type Step = Record<StepName, () => JSX.Element>;

export type TemplateItem = { label: string; value: string };

export type Templates = typeof templates;

export type Language = keyof Templates;

export type Template = keyof Templates[Language];

export type Variant = Templates[Language][Template][number];
