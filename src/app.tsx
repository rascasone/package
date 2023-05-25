import React from "react";
import { STEPS } from "./constants";
import { AppContext, useAppContext } from "./context";

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
