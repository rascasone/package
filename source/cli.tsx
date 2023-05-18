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

render(
	<App
		defaultTemplate={cli.flags.template}
		defaultPackageName={cli.input[0]}
	/>,
);
