import React, { useContext, useEffect } from "react";
import { Box, Text } from "ink";
import { AppContext } from "../context.js";
import { templateNames, templates } from "../../templates/index.js";

export function PackageSummary() {
  const { templateName, packageName, variantName } = useContext(AppContext);

  useEffect(() => {
    templates[templateName as (typeof templateNames)[number]]
      .create({
        variant: variantName as never,
        packageName,
        templateName,
      })
      .then();
  }, []);

  return (
    <Box>
      <Text>
        ✅ <Text bold>{packageName}</Text> -{" "}
        <Text>
          {templateName} ({variantName})
        </Text>
      </Text>
    </Box>
  );
}
