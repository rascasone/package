import { Props } from "../types.js";
import { PACKAGE_JSON } from "../constants.js";
import { join } from "path";
import { loadFile } from "./loadFile.js";
import { fromJSON } from "./fromJSON.js";
import { saveFile } from "./saveFile.js";
import { toJSON } from "./toJSON.js";

export const writeDotPackage = async (packageDir: string, props: Props) => {
  const date = new Date().toISOString();
  const packageJson = (await loadFile(PACKAGE_JSON)) as string;
  const version = fromJSON(packageJson).version as string;

  await saveFile(
    join(packageDir, ".package.json"),
    toJSON({
      created: {
        date,
        version,
      },
      updated: {
        date,
        version,
      },
      props,
    }),
  );
};
