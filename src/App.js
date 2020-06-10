import React, { useContext } from "react";

import Container from "./components/container/container.component";
import Header from "./components/header/header.component";
import MainCardsSection from "./components/mainCardsSection/mainCardsSection.component";
import OverviewCardsSection from "./components/overviewCardsSection/overviewCardsSection.component";

import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./providers/theme.provider";
import { lightTheme, darkTheme } from "./style-utils/theme.js";

import GlobalStyles from "./style-utils/global.styles";

function App() {
  const { light } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={light ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <MainCardsSection />
        <h2 className="overview-header">Overview - Today</h2>
        <OverviewCardsSection />
      </Container>
    </ThemeProvider>
  );
}

export default App;
