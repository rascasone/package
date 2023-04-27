import React from 'react';
import { Text } from 'ink';

type Props = {
	template: string | undefined;
	packageName: string | undefined;
};

export default function App({ template = 'plain Typescript', packageName }: Props) {
	return (
		<>
			<Text>
				Hello, it looks like you want to create package named <Text color="green">{packageName}</Text> using <Text color="green">{template}</Text>
			</Text>
			<Text>
				Good luck with that!
			</Text>
		</>
	);
}
