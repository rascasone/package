import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Step0 } from "./step0.js";
import { Step1 } from "./step1.js";
import { Step2 } from "./step2.js";

export const TEMPLATES_DIR = join(
	dirname(fileURLToPath(import.meta.url)),
	"../templates",
);

export const STEPS = [Step0, Step1, Step2] as const;
