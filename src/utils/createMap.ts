import { Language, Props } from "../types.js";
import { join } from "path";
import { loadFile } from "./loadFile.js";
import { fromJSON } from "./fromJSON.js";
import { saveFile } from "./saveFile.js";
import { toJSON } from "./toJSON.js";

export const createMap: Record<
  Language,
  (
    props: Props & {
      packageDir: string;
      templateDir: string;
    },
  ) => Promise<unknown>
> = {
  typescript: async ({ name, packageDir }) => {
    const path = join(packageDir, "package.json");
    const packageJson = await loadFile(path);

    if (packageJson === null) {
      throw new Error(`package.json is missing on path [${path}]`);
    }

    const json = fromJSON(packageJson);

    json.name = name;

    await saveFile(path, toJSON(json));
  },
};
