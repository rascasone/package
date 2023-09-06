import { templates } from "../templates/index.js";

export type TemplateItem = { label: string; value: string };

export type Templates = typeof templates;

export type Language = keyof Templates;

export type Template = keyof Templates[Language];

export type Variant = Templates[Language][Template][number];

export type Props = {
  language: Language;
  template: Template;
  variant: Variant;
  name: string;
};
