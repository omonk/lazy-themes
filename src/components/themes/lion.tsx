import { DefaultTheme, ThemeProvider } from "styled-components";

import identity from "./lion.jpeg";

const theme: DefaultTheme = {
  colors: {
    main: "#5a189a",
    textColor: "#ff7900",
  },
  assets: {
    identity,
  },
};

const Theme: React.FC<{}> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
