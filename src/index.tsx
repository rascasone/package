#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./components/App.js";

meow("", {
  importMeta: import.meta,
});

render(<App />);
