import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { step0 } from "./step0";
import { step1 } from "./step1";
import { step2 } from "./step2";

export const TEMPLATES_DIR = join(
	dirname(fileURLToPath(import.meta.url)),
	"../templates",
);

export const STEPS = [step0, step1, step2] as const;
