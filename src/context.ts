import type { Dispatch, SetStateAction } from "react";
import { createContext, useMemo, useState } from "react";
import type { StepIndex } from "./types.js";

export const AppContext = createContext<{
  step: StepIndex;
  setStep: Dispatch<SetStateAction<StepIndex>>;
  packageName: string;
  setPackageName: Dispatch<SetStateAction<string>>;
  templateName: string;
  setTemplateName: Dispatch<SetStateAction<string>>;
  variantName: string;
  setVariantName: Dispatch<SetStateAction<string>>;
}>({} as never);

export const useAppContext = () => {
  const [step, setStep] = useState<StepIndex>(0);
  const [templateName, setTemplateName] = useState<string>("");
  const [packageName, setPackageName] = useState<string>("");
  const [variantName, setVariantName] = useState<string>("");
  const value = useMemo(
    () => ({
      step,
      setStep,
      packageName,
      setPackageName,
      templateName,
      setTemplateName,
      variantName,
      setVariantName,
    }),
    [step, packageName, templateName, variantName],
  );

  return value;
};
