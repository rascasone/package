import type { Dispatch, SetStateAction } from "react";
import { createContext, useMemo, useState } from "react";
import type { StepName } from "./types.js";

export const AppContext = createContext<{
  step: StepName;
  setStep: Dispatch<SetStateAction<StepName>>;
  packageName: string;
  setPackageName: Dispatch<SetStateAction<string>>;
  languageName: string;
  setLanguageName: Dispatch<SetStateAction<string>>;
  templateName: string;
  setTemplateName: Dispatch<SetStateAction<string>>;
  variantName: string;
  setVariantName: Dispatch<SetStateAction<string>>;
}>({} as never);

export const useAppContext = () => {
  const [step, setStep] = useState<StepName>("PackageName");
  const [languageName, setLanguageName] = useState<string>("");
  const [templateName, setTemplateName] = useState<string>("");
  const [packageName, setPackageName] = useState<string>("");
  const [variantName, setVariantName] = useState<string>("");

  return useMemo(
    () => ({
      step,
      setStep,
      packageName,
      setPackageName,
      languageName,
      setLanguageName,
      templateName,
      setTemplateName,
      variantName,
      setVariantName,
    }),
    [step, languageName, packageName, templateName, variantName],
  );
};
