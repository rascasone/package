#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import New from "./components/New.js";

const cli = meow(`
  Usage
    package new - Create a new package
    package update - Update a package (TODO)
`, {
  importMeta: import.meta,
});

const options = {
  new: () => render(<New />),
  update: () => console.log("TODO"),
};

const option = cli.input[0];

if(!(option in options)) {
  cli.showHelp()
}

options[option as keyof typeof options]();
