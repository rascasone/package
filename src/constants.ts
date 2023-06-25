import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Step0 } from "./step0.js";
import { Step1 } from "./step1.js";
import { Step2 } from "./step2.js";
import { Step3 } from "./step3.js";

export const ROOT = dirname(fileURLToPath(import.meta.url));

export const TEMPLATES_DIR = join(ROOT, "../templates");

export const SHARED_DIR = join(ROOT, "../shared");

export const STEPS = [Step0, Step1, Step2, Step3] as const;
