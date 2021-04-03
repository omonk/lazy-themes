import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { main: string; textColor: string };
    assets?: Record<string, string>;
  }
}
