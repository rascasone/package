import { JSX } from "react";

export type StepName =
  | "PackageName"
  | "SelectTemplate"
  | "SelectVariant"
  | "PackageSummary";

export type Step = Record<StepName, () => JSX.Element>;

export type Template<$Variations extends string[]> = {
  variants: () => $Variations;
  create: (props: {
    packageName: string;
    templateName: string;
    variant: $Variations[number];
  }) => Promise<void>;
};

export type TemplateItem = { label: string; value: string };
