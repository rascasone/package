import {
	createContext,
	Dispatch,
	SetStateAction,
	useMemo,
	useState,
} from "react";
import { StepIndex } from "./types";

export const AppContext = createContext<{
	step: StepIndex;
	setStep: Dispatch<SetStateAction<StepIndex>>;
	template: string;
	setTemplate: Dispatch<SetStateAction<string>>;
	packageName: string;
	setPackageName: Dispatch<SetStateAction<string>>;
}>({} as never);

export const useAppContext = (
	templateDefault: string,
	packageDefault: string,
) => {
	const [step, setStep] = useState<StepIndex>(0);
	const [template, setTemplate] = useState<string>(templateDefault);
	const [packageName, setPackageName] = useState<string>(packageDefault);
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

	return value;
};