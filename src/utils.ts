import { access, cp, mkdir, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { TEMPLATES_DIR } from "./constants";

export const mkdirIfNotExists = async (path: string) => {
	try {
		await access(path);
	} catch {
		await mkdir(path);
	}
};

export const createPackage = async (
	packageName: string,
	templateName: string,
) => {
	const templateDir = join(TEMPLATES_DIR, templateName);
	const packageDir = join(process.cwd(), packageName);
	const packageJson = join(packageDir, "package.json");

	await mkdirIfNotExists(packageDir);
	await cp(templateDir, packageDir, { recursive: true });

	const json = JSON.parse(await readFile(packageJson, "utf8"));

	json.name = packageName;

	await writeFile(packageJson, JSON.stringify(json, null, 2), "utf8");
};
