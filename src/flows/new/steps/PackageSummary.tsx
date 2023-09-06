import React, { useContext, useEffect } from "react";
import { Box, Text } from "ink";
import { AppContext } from "../context.js";
import { createPackage } from "../../../utils/index.js";

export function PackageSummary() {
  const { languageName, templateName, variantName, packageName } =
    useContext(AppContext);

  useEffect(() => {
    createPackage({
      language: languageName,
      template: templateName,
      variant: variantName,
      name: packageName,
    });
  }, []);

  return (
    <Box flexDirection="column">
      <Text bold>✅ Package has been created</Text>
      <Text>Name: {packageName}</Text>
      <Text>Language: {languageName}</Text>
      <Text>Template: {templateName}</Text>
      <Text>Variant: {variantName}</Text>
    </Box>
  );
}
