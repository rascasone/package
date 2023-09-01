import React, {useCallback, useContext} from "react";
import { Box, Text } from "ink";
import Select from "ink-select-input";
import {AppContext} from "../context.js";
import {TemplateItem} from "../types.js";

export function SelectLanguage() {
  const { setTemplateName, setStep } = useContext(AppContext);
  const onSelect = useCallback(({ value }: TemplateItem) => {
    setTemplateName(value);
    setStep("SelectTemplate");
  }, []);

  return (
    <Box>
      <Box marginRight={1}>
        <Text>⬇️ Select template</Text>
      </Box>

      <Select items={[]} onSelect={onSelect} />
    </Box>
  );
}
