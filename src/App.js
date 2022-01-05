import { React, useState } from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import Aside from "./components/Menu";
import Footer from "./components/Footer";

import { Container } from "./styles";
import { GlobalStyle } from "./styles";

export default (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container>
      <GlobalStyle />
      <Header term={searchTerm} setTerm={setSearchTerm} />
      <Content term={searchTerm} />
      <Aside />
      <Footer />
    </Container>
  );
};
