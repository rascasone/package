import { join } from "path";
import { cp, readFile, writeFile } from "fs/promises";
import { SHARED_DIR } from "../constants.js";
import { mkdirSafe } from "./mkdirSafe.js";

export const createPackage = async (
  templateDir: string,
  packageName: string,
) => {
  const packageDir = join(process.cwd(), packageName);
  const packageJson = join(packageDir, "package.json");

  await mkdirSafe(packageDir);
  await cp(templateDir, packageDir, { recursive: true });
  await cp(SHARED_DIR, packageDir, { recursive: true });

  const json = JSON.parse(await readFile(packageJson, "utf8"));

  json.name = packageName;

  return {
    packageDir,
    packageJson,
    json,
    saveJson: () =>
      writeFile(packageJson, JSON.stringify(json, null, 2), "utf8"),
  };
};
