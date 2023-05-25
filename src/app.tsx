import React from "react";
import { STEPS } from "./constants.js";
import { AppContext, useAppContext } from "./context.js";

export default function App({
	templateDefault = "",
	packageDefault = "",
}: {
	templateDefault: string;
	packageDefault: string;
}) {
	const value = useAppContext(templateDefault, packageDefault);

	return (
		<AppContext.Provider value={value}>
			{STEPS[value.step]()}
		</AppContext.Provider>
	);
}
