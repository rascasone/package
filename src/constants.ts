import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const ROOT = dirname(fileURLToPath(import.meta.url));

export const TEMPLATES_DIR = join(ROOT, "../templates");

export const SHARED_DIR = join(ROOT, "../shared");

export const PACKAGE_JSON = join(ROOT, "../package.json");
