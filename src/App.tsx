import styled, { ThemeProvider } from "styled-components";
import { RouterProvider } from "@tanstack/react-router";
import { useAppContext } from "./contexts/app";
import router from "./router";
import GlobalStyle from "./GlobalStyle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const { theme, activeTheme, changeTheme } = useAppContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
