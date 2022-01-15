import { React, useState } from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import Aside from "./components/SideBar";
import Footer from "./components/Footer";

import { Container, Logo } from "./styles";
import { GlobalStyle } from "./styles";

export default (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Container>
      <GlobalStyle />
      <Header term={searchTerm} setTerm={setSearchTerm} />
      <Content term={searchTerm} />
      <Logo />
      <Aside term={searchTerm} setTerm={setSearchTerm} />
      <Footer />
    </Container>
  );
};
