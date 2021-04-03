import React from "react";

import { DefaultTheme, ThemeProvider } from "styled-components";
import { ThemeName } from "../App";

import themes from "./themes";
import identity from "./themes/chameleon.jpeg";

const defaultTheme: DefaultTheme = {
  colors: {
    main: "#2d6aef",
    textColor: "white",
  },
  assets: {
    identity,
  },
};

const Theme: React.FC<{ theme: ThemeName }> = ({ theme, children }) => {
  if (theme in themes) {
    // @ts-ignore
    const LoadedTheme = themes[theme];
    return <LoadedTheme>{children}</LoadedTheme>;
  }

  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default Theme;
