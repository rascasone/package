import React, { FunctionComponent } from "react";
import { Text, Box } from "ink";

export const Error: FunctionComponent<{ error: null | string }> = ({
  error,
}) => {
  return (
    error && (
      <Box marginBottom={1} padding={1} borderStyle="single">
        <Text color="red" bold>
          {error}
        </Text>
      </Box>
    )
  );
};
