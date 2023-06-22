import { access, cp, mkdir, readFile, writeFile, readdir } from "fs/promises";
import { join } from "path";
import { SHARED_DIR, TEMPLATES_DIR } from "./constants.js";

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
	await cp(SHARED_DIR, packageDir);

	const json = JSON.parse(await readFile(packageJson, "utf8"));

	json.name = packageName;

	await writeFile(packageJson, JSON.stringify(json, null, 2), "utf8");
};

export const getTemplateNames = async () => {
	const templates: string[] = [];
	const files = await readdir(TEMPLATES_DIR, { withFileTypes: true });

	for (let i = 0; i < files.length; ++i) {
		const file = files[i];

		if (file.isDirectory()) {
			templates.push(file.name);
		}
	}

	return templates;
};

export const assertKebabCase = (packageName: string) => {
	if(packageName.toLowerCase() !== packageName) {
		throw Error(`${packageName} is not a kebab-case`);
	}
};
