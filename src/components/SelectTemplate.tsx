import React, { useCallback, useContext } from "react";
import { Box, Text } from "ink";
import Select from "ink-select-input";
import { AppContext } from "../context.js";
import { TemplateItem } from "../types.js";
import { TEMPLATE_ITEMS } from "../constants.js";

export function SelectTemplate() {
  const { setTemplateName, setStep } = useContext(AppContext);
  const onSelect = useCallback(({ value }: TemplateItem) => {
    setTemplateName(value);
    setStep("SelectVariant");
  }, []);

  return (
    <Box>
      <Box marginRight={1}>
        <Text>⬇️ Select template</Text>
      </Box>

      <Select items={TEMPLATE_ITEMS} onSelect={onSelect} />
    </Box>
  );
}
