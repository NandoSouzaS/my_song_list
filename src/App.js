import React from "react";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Main from "./components/Content";
import Aside from "./components/Menu";
import Footer from "./components/Footer";

import { Container } from "./styles";
import { GlobalStyle } from "./styles";
import store from "./store";

export default (props) => {
  return (
    <Provider store={store}>
      <Container>
        <GlobalStyle />
        <Header />
        <Main />
        <Aside />
        <Footer />
      </Container>
    </Provider>
  );
};
