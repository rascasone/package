import React, { useCallback, useContext } from "react";
import { Box, Text } from "ink";
import Select from "ink-select-input";
import { AppContext } from "../context.js";
import { Language, TemplateItem } from "../../../types.js";
import { templates } from "../../../../templates/index.js";

export function SelectLanguage() {
  const { setLanguageName, setStep } = useContext(AppContext);
  const onSelect = useCallback(({ value }: TemplateItem) => {
    setLanguageName(value as Language);
    setStep("SelectTemplate");
  }, []);

  return (
    <Box>
      <Box marginRight={1}>
        <Text>👄 Select language</Text>
      </Box>

      <Select
        items={Object.keys(templates).map((v) => ({ label: v, value: v }))}
        onSelect={onSelect}
      />
    </Box>
  );
}
