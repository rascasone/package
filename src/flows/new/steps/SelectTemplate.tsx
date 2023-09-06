import React, { useCallback, useContext } from "react";
import { Box, Text } from "ink";
import Select from "ink-select-input";
import { AppContext } from "../context.js";
import { Template, TemplateItem } from "../../../types.js";
import { templates } from "../../../../templates/index.js";

export function SelectTemplate() {
  const { languageName, setTemplateName, setStep } = useContext(AppContext);
  const onSelect = useCallback(({ value }: TemplateItem) => {
    setTemplateName(value as Template);
    setStep("SelectVariant");
  }, []);

  return (
    <Box>
      <Box marginRight={1}>
        <Text>⬇️ Select template</Text>
      </Box>

      <Select
        items={Object.keys(templates[languageName]).map((v) => ({
          label: v,
          value: v,
        }))}
        onSelect={onSelect}
      />
    </Box>
  );
}
