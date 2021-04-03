import { Suspense, useState } from "react";
import Theme from "./components/theme";

import "./App.css";
import styled, { useTheme, createGlobalStyle } from "styled-components";

export type ThemeName = "lion" | "panda" | "chameleon";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, #root {
    height: 100vh
  }
`;

const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.main};

  > div {
    display: flex;
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  select {
    margin-bottom: 2rem;
  }

  img {
    max-width: 500px;
    width: 100%;
  }
`;

const Content: React.FC<{
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}> = ({ theme, setTheme }) => {
  const { assets, colors } = useTheme();

  return (
    <Container>
      <div>
        <label htmlFor="theme" style={{ color: colors.textColor }}>
          Pick your theme
        </label>
        <select
          name="theme"
          id="theme"
          value={theme}
          onChange={e => {
            setTheme(e.currentTarget.value as ThemeName);
          }}
        >
          <option value="chameleon">Chameleon</option>
          <option value="lion">Lion</option>
          <option value="panda">Panda</option>
        </select>
        <img src={assets?.identity} alt="" />
      </div>
    </Container>
  );
};

function App() {
  // Theme is preselected but can come from API response...
  const [theme, setTheme] = useState<ThemeName>("chameleon");

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <GlobalStyle />
      <Theme theme={theme}>
        <Content setTheme={setTheme} theme={theme} />
      </Theme>
    </Suspense>
  );
}

export default App;
