import React, { useCallback, useContext } from "react";
import { Text, Box } from "ink";
import TextInput from "ink-text-input";
import { AppContext } from "../context.js";
import { toKebabCase } from "../../../utils/index.js";

export function PackageName() {
  const { packageName, setPackageName, setStep } = useContext(AppContext);
  const onChange = useCallback(
    (value: string) => setPackageName(toKebabCase(value)),
    [],
  );
  const onSubmit = useCallback(
    (value: string) => value.length && setStep("SelectLanguage"),
    [],
  );

  return (
    <Box>
      <Box marginRight={1}>
        <Text>🤔 Package name:</Text>
      </Box>

      <TextInput value={packageName} onChange={onChange} onSubmit={onSubmit} />
    </Box>
  );
}
