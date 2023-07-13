import basic from "./basic/index.js";

export const templates = {
  basic: basic,
};

export const templateNames = Object.keys(
  templates,
) as (keyof typeof templates)[];
