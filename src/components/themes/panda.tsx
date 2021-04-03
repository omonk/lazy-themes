import identity from "./panda.jpeg";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    main: "#90be6d",
    textColor: "#22223b",
  },
  assets: { identity },
};

const Theme: React.FC<{}> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
