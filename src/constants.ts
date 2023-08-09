import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { PackageName } from "./components/PackageName.js";
import { SelectTemplate } from "./components/SelectTemplate.js";
import { SelectVariant } from "./components/SelectVariant.js";
import { PackageSummary } from "./components/PackageSummary.js";
import { templateNames } from "../templates/index.js";
import { TemplateItem, Step } from "./types.js";

export const ROOT = dirname(fileURLToPath(import.meta.url));

export const TEMPLATES_DIR = join(ROOT, "../templates");

export const SHARED_DIR = join(ROOT, "../shared");

export const STEPS = {
  PackageName,
  SelectTemplate,
  SelectVariant,
  PackageSummary,
} satisfies Step;

export const TEMPLATE_ITEMS = templateNames.map((name) => ({
  label: name,
  value: name,
})) satisfies TemplateItem[];
