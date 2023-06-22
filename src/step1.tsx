import React, { useCallback, useContext, useEffect, useState } from "react";
import { Box, Text } from "ink";
import Select from "ink-select-input";
import {getTemplateNames} from "./utils.js";
import {AppContext} from "./context.js";

type Item = { label: string, value: string };

export function Step1() {
	const { setTemplateName } = useContext(AppContext);
	const [items, setItems] = useState<Item[]>([]);
	const onSelect = useCallback(({ value }: Item) => setTemplateName(value), []);

	useEffect(() => {
		getTemplateNames()
			.then((names) => setItems(
				names.map((name) => ({ label: name, value: name }))
			));
	}, []);

	return (
		<Box>
			<Box marginRight={1}>
				<Text>⬇️  Select template</Text>
			</Box>

			<Select items={items} onSelect={onSelect} />
		</Box>
	);
}
