import React, { useContext } from "react";
import { Text } from "ink";
import { AppContext } from "./context.js";

export function Step1() {
	const { template, packageName } = useContext(AppContext);
	return (
		<>
			<Text>
				Hello, it looks like you want to create package named{" "}
				<Text color="green">{packageName}</Text> using <Text color="green">{template}</Text>
			</Text>
			<Text>I created a basic template for you</Text>
			<Text>Good luck!</Text>
		</>
	);
}
