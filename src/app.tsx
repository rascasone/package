import React from "react";
import { AppContext, useAppContext } from "./context.js";
import Stepper from "./stepper.js";

export default function App() {
  const value = useAppContext();

  return (
    <AppContext.Provider value={value}>
      <Stepper />
    </AppContext.Provider>
  );
}
