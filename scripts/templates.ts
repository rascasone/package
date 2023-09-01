import {readdir, writeFile} from "node:fs/promises";
import {dirname, join} from "path";
import {fileURLToPath} from "url";

export const ROOT = dirname(fileURLToPath(import.meta.url));

export const TEMPLATES_DIR = join(ROOT, "../templates");

(async () => {
  const dirs = await readdir(TEMPLATES_DIR, { withFileTypes: true });
  const templates: Record<string, string[]> = {};

  for (const dir of dirs) {
    if(dir.isDirectory()) {
      templates[dir.name] = await readdir(join(dir.path, dir.name));
    }
  }

  await writeFile(join(TEMPLATES_DIR, "index.ts"), `export const templates = ${JSON.stringify(templates, null, 2)} as const;`);
})();
