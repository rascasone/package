import React, { useCallback, useContext } from "react";
import { Box, Text } from "ink";
import Select from "ink-select-input";
import { templates } from "../../../../templates/index.js";
import { AppContext } from "../context.js";
import { Variant } from "../../../types.js";

type Item = { label: string; value: string };

export function SelectVariant() {
  const { languageName, templateName, setVariantName, setStep } =
    useContext(AppContext);
  const onSelect = useCallback(({ value }: Item) => {
    setVariantName(value as Variant);
    setStep("PackageSummary");
  }, []);

  return (
    <Box>
      <Box marginRight={1}>
        <Text>🥨 Select variant</Text>
      </Box>

      <Select
        items={templates[languageName][templateName].map((v) => ({
          label: v,
          value: v,
        }))}
        onSelect={onSelect}
      />
    </Box>
  );
}
