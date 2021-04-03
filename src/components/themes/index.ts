import React from "react";

const Lion = React.lazy(() => import("./lion"));
const Panda = React.lazy(() => import("./panda"));

const themes = {
  lion: Lion,
  panda: Panda,
};

export default themes;
