import { join } from "path";
import { readFile } from "fs/promises";
import {SHARED_DIR, TEMPLATES_DIR} from "../constants.js";
import { mkdirSafe } from "./mkdirSafe.js";
import {Language, Template, Variant} from "../types.js";
import {copyDir} from "./copy.js";
import {writeFile} from "node:fs/promises";

type Props = {
  language: Language,
  template: Template,
  variant: Variant,
  packageName: string,
};

const create: Record<Language, (props: Props & {
  packageDir: string;
  templateDir: string;
}) => Promise<unknown>> = {
  typescript: async ({ packageName, packageDir }) => {
    const packageJson = join(packageDir, "package.json");
    const json = JSON.parse(await readFile(packageJson, "utf8"));

    json.name = packageName;

    await writeFile(packageJson, JSON.stringify(json, null, 2));
  }
};

export const writeDotPackage = async (packageDir: string) => {
  const date = new Date().toISOString();

  await writeFile(join(packageDir, ".package.json"), JSON.stringify({
    created: date,
    updated: date
  }, null, 2));
}

export const createPackage = async (props: Props) => {
  const { language, template, variant, packageName } = props;
  const packageDir = join(process.cwd(), packageName);
  const templateDir = join(TEMPLATES_DIR, language, template, variant);

  await mkdirSafe(packageDir);
  await copyDir(join(SHARED_DIR, language), packageDir, -1);
  await copyDir(join(SHARED_DIR, language, variant), packageDir);
  await copyDir(templateDir, packageDir);
  await writeDotPackage(packageDir);

  await create[language]({
    ...props,
    packageDir,
    templateDir,
  });
};
