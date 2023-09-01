import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { PackageName } from "./components/PackageName.js";
import {SelectLanguage} from "./components/SelectLanguage.js";
import { SelectTemplate } from "./components/SelectTemplate.js";
import { SelectVariant } from "./components/SelectVariant.js";
import { PackageSummary } from "./components/PackageSummary.js";
import { templates } from "../templates/index.js";
import {Step, Templates} from "./types.js";

export const ROOT = dirname(fileURLToPath(import.meta.url));

export const TEMPLATES_DIR = join(ROOT, "../templates");

export const SHARED_DIR = join(ROOT, "../shared");

export const STEPS = {
  PackageName,
  SelectLanguage,
  SelectTemplate,
  SelectVariant,
  PackageSummary,
} satisfies Step;

export const LANGUAGES = Object.keys(templates) as (keyof Templates)[];
