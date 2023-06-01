import React from "react";
import { STEPS } from "./constants.js";
import { AppContext, useAppContext } from "./context.js";

export default function App({
	templateDefault,
	packageDefault,
}: {
	templateDefault: string;
	packageDefault: string;
}) {
	const value = useAppContext(templateDefault, packageDefault);
	const Component = STEPS[value.step];

	return (
		<AppContext.Provider value={value}>
			<Component />
		</AppContext.Provider>
	);
}
