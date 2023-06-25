import { access, cp, mkdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { SHARED_DIR } from "./constants.js";

export const mkdirIfNotExists = async (path: string) => {
	try {
		await access(path);
	} catch {
		await mkdir(path);
	}
};

export const createPackage = async (
  templateDir: string,
	packageName: string,
) => {
	const packageDir = join(process.cwd(), packageName);
	const packageJson = join(packageDir, "package.json");

	await mkdirIfNotExists(packageDir);
	await cp(templateDir, packageDir, { recursive: true });
	await cp(SHARED_DIR, packageDir);

	const json = JSON.parse(await readFile(packageJson, "utf8"));

	json.name = packageName;

  return {
    packageDir,
    packageJson,
    json,
    saveJson: () => writeFile(packageJson, JSON.stringify(json, null, 2), "utf8")
  };
};

export const assertKebabCase = (packageName: string) => {
	if(packageName.toLowerCase() !== packageName) {
		throw Error(`${packageName} is not a kebab-case`);
	}
};
