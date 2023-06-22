import React, {useContext} from "react";
import { Box, Text } from "ink";
import {AppContext} from "./context.js";

export function Step2() {
	const { templateName, packageName } = useContext(AppContext);

	return (
		<Box>
			<Text>
				✅ <Text bold>{packageName}</Text> - <Text>{templateName}</Text>
			</Text>
		</Box>
	);
}
