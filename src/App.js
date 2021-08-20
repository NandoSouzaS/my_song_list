import React from "react";


import Header from "./components/Header";
import Main from "./components/Content";
import Aside from "./components/Menu";
import Footer from "./components/Footer";

import { Container } from "./styles";
import { GlobalStyle } from "./styles";

export default (props) => {
  return (
      <Container>
        <GlobalStyle />
        <Header />
        <Main />
        <Aside />
        <Footer />
      </Container>
  );
};
