import React from "react";
import { Text, Box } from "ink";
import TextInput from "ink-text-input";
import { useCallback, useContext } from "react";
import { AppContext } from "./context.js";

export function Step0() {
	const { packageName, setPackageName, setStep } = useContext(AppContext);
	const onSubmit = useCallback((value: string) => {
		value.length && setStep(1);
	}, []);

	return (
		<>
			<Text>
				It looks like you forgot to type your{" "}
				<Text color="green">package name</Text>.{" "}
			</Text>
			<Box>
				<Box marginRight={1}>
					<Text>Package name:</Text>
				</Box>

				<TextInput
					value={packageName}
					onChange={setPackageName}
					onSubmit={onSubmit}
				/>
			</Box>
		</>
	);
}
