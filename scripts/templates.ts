import {readdir, writeFile} from "node:fs/promises";
import {dirname, join} from "path";
import {fileURLToPath} from "url";

export const ROOT = dirname(fileURLToPath(import.meta.url));

export const TEMPLATES_DIR = join(ROOT, "../templates");

(async () => {
  const dirs = await readdir(TEMPLATES_DIR, { withFileTypes: true });
  const languages: Record<string, Record<string, string[]>> = {};

  for (const dir of dirs) {
    if(dir.isDirectory()) {
      languages[dir.name] = {};

      const templates = await readdir(join(dir.path, dir.name));

      for (const template of templates) {
        languages[dir.name][template] = await readdir(join(dir.path, dir.name, template));
      }
    }
  }

  await writeFile(join(TEMPLATES_DIR, "index.ts"), `export const templates = ${JSON.stringify(languages, null, 2)} as const;`);
})();
