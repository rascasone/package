import React, { useCallback, useContext, useMemo } from "react";
import { Box, Text } from "ink";
import Select from "ink-select-input";
import { templateNames, templates } from "../templates/index.js";
import {AppContext} from "./context.js";

type Item = { label: string, value: string };

export function Step2() {
  const { setVariantName, templateName, setStep } = useContext(AppContext);
  const onSelect = useCallback(({ value }: Item) => {
    setVariantName(value);
    setStep(3);
  }, []);
  const items = useMemo(() =>
    templates[templateName as (typeof templateNames)[number]]
      .variants()
      .map((v) => ({ label: v, value: v })),
    [templateName]
  );

	return (
		<Box>
			<Box marginRight={1}>
				<Text>🥨 Select variant</Text>
			</Box>

			<Select items={items} onSelect={onSelect} />
		</Box>
	);
}
