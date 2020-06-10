import React from "react";

import Container from "./components/container/container.component";
import Header from "./components/header/header.component";
import MainCardsSection from "./components/mainCardsSection/mainCardsSection.component";

import GlobalStyles from "./style-utils/global.styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <MainCardsSection />
      </Container>
    </>
  );
}

export default App;
