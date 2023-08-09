import React from "react";
import { useContext, useMemo } from "react";
import { STEPS } from "../constants.js";
import { AppContext } from "../context.js";

export default function Flow() {
  const { step } = useContext(AppContext);
  const Component = useMemo(() => STEPS[step], [step]);

  return <Component />;
}
