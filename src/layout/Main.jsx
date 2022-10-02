import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../partials/theme";
import { Header } from "../components/Header/Header";
import { GlobalStyles } from "../partials/Global";
export const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header />
      </div>
    </ThemeProvider>
  );
};
