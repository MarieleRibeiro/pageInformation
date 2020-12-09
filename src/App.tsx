import React from "react";
import { Dashboard } from "./pages/Dashboard";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
