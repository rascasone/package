import React, { useContext, useEffect } from "react";
import { Box, Text } from "ink";
import { AppContext } from "../context.js";
import { templates } from "../../templates/index.js";

export function PackageSummary() {
  const { templateName, packageName, variantName } = useContext(AppContext);

  useEffect(() => {
    // TODO: call createPackage
    templates[templateName as (keyof typeof templates)];
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
