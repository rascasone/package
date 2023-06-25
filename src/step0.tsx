import React from "react";
import { Text, Box } from "ink";
import TextInput from "ink-text-input";
import { useCallback, useContext } from "react";
import { AppContext } from "./context.js";
import { assertKebabCase } from "./utils.js";

export function Step0() {
  const { packageName, setPackageName, setStep } = useContext(AppContext);
  const onSubmit = useCallback((value: string) => {
    if (value.length) {
      assertKebabCase(value);
      setStep(1);
    }
  }, []);

  return (
    <Box>
      <Box marginRight={1}>
        <Text>🤔 Package name:</Text>
      </Box>

      <TextInput
        value={packageName}
        onChange={setPackageName}
        onSubmit={onSubmit}
      />
    </Box>
  );
}
