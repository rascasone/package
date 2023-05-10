import React from "react";
import { Text } from "ink";
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

type Props = {
	template: string | undefined;
	packageName: string | undefined;
};

const defaultPackageName = "i-have-no-imagination"

function createPackage(packageName: Props["packageName"] = defaultPackageName) {
	const templateName = "basic-ts-template"
	const templatesDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '../templates');
	const templateDir = path.join(templatesDir, templateName);

	try {
		if (!fs.existsSync(packageName)) {
			fs.mkdirSync(packageName);
		}
	} catch (err) {
		console.error(err);
		return;
	}

	fs.cp(templateDir, packageName, { recursive: true }, (err) => {
		if (err) {
			console.log(err);
			return;
		}
		const packageJson = path.join(packageName, 'package.json');
		const json = JSON.parse(fs.readFileSync(packageJson, 'utf8'));
		json.name = packageName
		fs.writeFileSync(packageJson, JSON.stringify(json, null, 2), 'utf8');
	})
}

export default function App({
	template = "plain Typescript",
	packageName = defaultPackageName,
}: Props) {
	createPackage(packageName)
	return (
		<>
			<Text>
				Hello, it looks like you want to create package named{" "}
				<Text color="green">{packageName}</Text> using{" "}
				<Text color="green">{template}</Text>
			</Text>
			<Text>I created a basic template for you</Text>
			<Text>Good luck!</Text>
		</>
	);
}
