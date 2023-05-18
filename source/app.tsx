import type { Dispatch, SetStateAction } from "react";
import React, {
	useState,
	createContext,
	useContext,
	useMemo,
	useCallback,
} from "react";
import { Box, Text } from "ink";
import TextInput from "ink-text-input";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

type Props = {
	defaultTemplate: string | undefined;
	defaultPackageName: string | undefined;
};

const defaultPackageName = "i-have-no-imagination";

export const Context = createContext<{
	step: StepIndex;
	setStep: Dispatch<SetStateAction<StepIndex>>;
	template: string;
	setTemplate: Dispatch<SetStateAction<string>>;
	packageName: string;
	setPackageName: Dispatch<SetStateAction<string>>;
}>({} as never);

function createPackage(
	packageName: Props["defaultPackageName"] = defaultPackageName,
) {
	const templateName = "basic-ts-template";
	const templatesDir = path.join(
		path.dirname(fileURLToPath(import.meta.url)),
		"../templates",
	);
	const templateDir = path.join(templatesDir, templateName);

	const packageDir = path.join(process.cwd(), packageName);

	try {
		if (!fs.existsSync(packageDir)) {
			fs.mkdirSync(packageDir);
		}
	} catch (err) {
		console.error(err);
		return;
	}

	fs.cp(templateDir, packageDir, { recursive: true }, (err) => {
		if (err) {
			console.log(err);
			return;
		}
		const packageJson = path.join(packageDir, "package.json");
		const json = JSON.parse(fs.readFileSync(packageJson, "utf8"));
		json.name = packageName;
		fs.writeFileSync(packageJson, JSON.stringify(json, null, 2), "utf8");
	});
}

export function step0() {
	const { template, setTemplate, setStep } = useContext(Context);
	const onSubmit = useCallback((value: string) => {
		if (value.length) {
			setStep(1);
		}
	}, []);

	return (
		<>
			<Text>
				It looks like you forgot to type your{" "}
				<Text color="green">package name</Text>.{" "}
			</Text>
			<Box>
				<Box marginRight={1}>
					<Text>Package name:</Text>
				</Box>

				<TextInput
					value={template}
					onChange={setTemplate}
					onSubmit={onSubmit}
				/>
			</Box>
		</>
	);
}
export function step1() {
	return (
		<>
			<Text>
				Hello, it looks like you want to create package named{" "}
				<Text color="green">TODO</Text> using <Text color="green">TODO</Text>
			</Text>
			<Text>I created a basic template for you</Text>
			<Text>Good luck!</Text>
		</>
	);
}
export function step2() {
	return <div></div>;
}

export const STEPS = [step0, step1, step2] as const;

export type StepIndex = 0 | 1 | 2;

export type Maybe<T> = undefined | T;

export default function App({
	defaultTemplate = "",
	defaultPackageName = "",
}: Props) {
	const [step, setStep] = useState<StepIndex>(0);
	const [template, setTemplate] = useState<string>(defaultTemplate);
	const [packageName, setPackageName] = useState<string>(defaultPackageName);
	const value = useMemo(
		() => ({
			step,
			setStep,
			template,
			setTemplate,
			packageName,
			setPackageName,
		}),
		[step, template, packageName],
	);

	return <Context.Provider value={value}>{STEPS[step]()}</Context.Provider>;
}
