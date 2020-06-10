import React from "react";

import Container from "./components/container/container.component";
import Header from "./components/header/header.component";
import MainCardsSection from "./components/mainCardsSection/mainCardsSection.component";
import OverviewCardsSection from "./components/overviewCardsSection/overviewCardsSection.component";

import GlobalStyles from "./style-utils/global.styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <MainCardsSection />
        <h2 className="overview-header">Overview - Today</h2>
        <OverviewCardsSection />
      </Container>
    </>
  );
}

export default App;
