import React, { useCallback, useContext, useState } from "react";
import { Text, Box } from "ink";
import TextInput from "ink-text-input";
import { AppContext } from "../context.js";
import { exists, toKebabCase } from "../../../utils/index.js";
import { join } from "path";
import { HERE } from "../../../constants.js";
import { Error } from "../../../components/Error.js";

export function PackageName() {
  const { packageName, setPackageName, setStep } = useContext(AppContext);
  const [error, setError] = useState<null | string>(null);

  const onSubmit = useCallback(async (value: string) => {
    const name = toKebabCase(value);

    if (await exists(join(HERE, name))) {
      setError(`Package [${name}] already exists.`);
    }

    if (value.length) {
      setPackageName(name);
      setStep("SelectLanguage");
    }
  }, []);

  const onChange = useCallback((v: string) => {
    setError(null);
    setPackageName(v);
  }, []);

  return (
    <Box display="flex" flexDirection="column">
      <Error error={error} />

      <Box display="flex" flexDirection="row">
        <Box marginRight={1}>
          <Text>🤔 Package name:</Text>
        </Box>

        <TextInput
          value={packageName}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </Box>
    </Box>
  );
}
