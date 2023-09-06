import { PackageName } from "./steps/PackageName.js";
import { SelectLanguage } from "./steps/SelectLanguage.js";
import { SelectTemplate } from "./steps/SelectTemplate.js";
import { SelectVariant } from "./steps/SelectVariant.js";
import { PackageSummary } from "./steps/PackageSummary.js";
import { Step } from "./types.js";

export const STEPS = {
  PackageName,
  SelectLanguage,
  SelectTemplate,
  SelectVariant,
  PackageSummary,
} satisfies Step;
