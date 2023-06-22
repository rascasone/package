import type { Dispatch, SetStateAction } from "react";
import { createContext, useMemo, useState } from "react";
import type { StepIndex } from "./types.js";

export const AppContext = createContext<{
	step: StepIndex;
	setStep: Dispatch<SetStateAction<StepIndex>>;
	templateName: string;
	setTemplateName: Dispatch<SetStateAction<string>>;
	packageName: string;
	setPackageName: Dispatch<SetStateAction<string>>;
}>({} as never);

export const useAppContext = () => {
	const [step, setStep] = useState<StepIndex>(0);
	const [templateName, setTemplateName] = useState<string>("");
	const [packageName, setPackageName] = useState<string>("");
	const value = useMemo(
		() => ({
			step,
			setStep,
			templateName,
			setTemplateName,
			packageName,
			setPackageName,
		}),
		[step, templateName, packageName],
	);

	return value;
};
