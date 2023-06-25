import simple from "./simple/index.js";

export const templates = {
  simple
};

export const templateNames = Object.keys(templates) as (keyof typeof templates)[];
