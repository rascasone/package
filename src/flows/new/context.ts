import type { Dispatch, SetStateAction } from "react";
import { createContext, useMemo, useState } from "react";
import type { Language, Template, Variant } from "../../types.js";
import { StepName } from "./types.js";

export const AppContext = createContext<{
  step: StepName;
  setStep: Dispatch<SetStateAction<StepName>>;
  packageName: string;
  setPackageName: Dispatch<SetStateAction<string>>;
  languageName: Language;
  setLanguageName: Dispatch<SetStateAction<Language>>;
  templateName: Template;
  setTemplateName: Dispatch<SetStateAction<Template>>;
  variantName: Variant;
  setVariantName: Dispatch<SetStateAction<Variant>>;
}>({} as never);

export const useAppContext = () => {
  const [step, setStep] = useState<StepName>("PackageName");
  const [packageName, setPackageName] = useState<string>("");
  const [languageName, setLanguageName] = useState<Language>("" as never);
  const [templateName, setTemplateName] = useState<Template>("" as never);
  const [variantName, setVariantName] = useState<Variant>("" as never);

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
