import React, { useCallback, useContext, useMemo } from "react";
import { Box, Text } from "ink";
import Select from "ink-select-input";
import { templates } from "../../templates/index.js";
import { AppContext } from "../context.js";

type Item = { label: string; value: string };

export function SelectVariant() {
  const { setVariantName, templateName, setStep } = useContext(AppContext);
  const onSelect = useCallback(({ value }: Item) => {
    setVariantName(value);
    setStep("PackageSummary");
  }, []);
  const items = useMemo(
    () =>
      templates[templateName as (keyof typeof templates)]
        .map((v) => ({ label: v, value: v })),
    [templateName],
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
