#!/usr/bin/env node
import React from "react";
import meow from "meow";
import { render } from "ink";
import New from "./flows/new/New.js";

const cli = meow(
  `
Usage
  package new - Create a new package
  `,
  {
    importMeta: import.meta,
  },
);

export const flows = {
  new: () => <New />,
};

const option = cli.input[0];

if (option === "" || !(option in flows)) {
  cli.showHelp();
}

render(flows[option as keyof typeof flows]());
