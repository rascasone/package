import React, { useCallback, useContext } from "react";
import { Box, Text } from "ink";
import Select from "ink-select-input";
import { templateNames } from "../templates/index.js";
import {AppContext} from "./context.js";

type Item = { label: string, value: string };

const ITEMS = templateNames.map((name) => ({
  label: name,
  value: name
})) satisfies Item[];

export function Step1() {
	const { setTemplateName, setStep } = useContext(AppContext);
	const onSelect = useCallback(({ value }: Item) => {
    setTemplateName(value);
    setStep(2);
  }, []);

	return (
		<Box>
			<Box marginRight={1}>
				<Text>⬇️  Select template</Text>
			</Box>

			<Select items={ITEMS} onSelect={onSelect} />
		</Box>
	);
}
