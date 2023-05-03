#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

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
				type: 'string',
			},
		},
	},
);

render(<App template={cli.flags.template} packageName={cli.input[0]} />);
