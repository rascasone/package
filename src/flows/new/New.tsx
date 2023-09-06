import React, { useMemo } from "react";
import { AppContext, useAppContext } from "./context.js";
import { STEPS } from "./constants.js";

export default function New() {
  const value = useAppContext();
  const Component = useMemo(() => STEPS[value.step], [value.step]);

  return (
    <AppContext.Provider value={value}>
      <Component />
    </AppContext.Provider>
  );
}
