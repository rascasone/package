import { readdir, writeFile } from "node:fs/promises";
import { join } from "path";
import { toJSON } from "../src/utils/index.js";
import { TEMPLATES_DIR } from "../src/constants.js";

(async () => {
  const dirs = await readdir(TEMPLATES_DIR, { withFileTypes: true });
  const languages: Record<string, Record<string, string[]>> = {};

  for (const dir of dirs) {
    if (dir.isDirectory()) {
      languages[dir.name] = {};

      const templates = await readdir(join(dir.path, dir.name));

      for (const template of templates) {
        languages[dir.name][template] = await readdir(
          join(dir.path, dir.name, template),
        );
      }
    }
  }

  await writeFile(
    join(TEMPLATES_DIR, "index.ts"),
    `// generated with "pnpm generate:templates"\nexport const templates = ${toJSON(
      languages,
    )} as const;`,
  );
})();
