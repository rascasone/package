#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./app.js";

const cli = meow(
	`
	Usage
	  $ rsc-pkg

	Options
		--template  framework you want to use

	Examples
	  $ rsc-pkg --template=React
`,
	{
		importMeta: import.meta,
		flags: {
			template: {
				type: "string",
			},
		},
	},
);

//TODO: fix template flag not bing passed
render(
	<App
		templateDefault={cli.flags.template || ""}
		packageDefault={cli.input[0] || ""}
	/>,
);
