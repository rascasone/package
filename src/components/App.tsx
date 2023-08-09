import React from "react";
import { AppContext, useAppContext } from "../context.js";
import Flow from "./Flow.js";

export default function App() {
  const value = useAppContext();

  return (
    <AppContext.Provider value={value}>
      <Flow />
    </AppContext.Provider>
  );
}
