import React, { useContext, useEffect, useState } from "react";
import { Box, Text } from "ink";
import { AppContext } from "../context.js";
import { createPackage } from "../../../utils/index.js";
import { Error } from "src/components/Error.js";

export function PackageSummary() {
  const { languageName, templateName, variantName, packageName } =
    useContext(AppContext);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    createPackage({
      language: languageName,
      template: templateName,
      variant: variantName,
      name: packageName,
    })
      .catch((e) => setError(`${e}`))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box flexDirection="column">
      <Error error={error} />

      {loading ? (
        <Text>Creating package ..</Text>
      ) : (
        <>
          <Text bold>✅ Package has been created</Text>
          <Text>Name: {packageName}</Text>
          <Text>Language: {languageName}</Text>
          <Text>Template: {templateName}</Text>
          <Text>Variant: {variantName}</Text>
        </>
      )}
    </Box>
  );
}
