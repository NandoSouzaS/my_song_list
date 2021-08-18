import React from "react";

import Header from './components/Header'
import Main from './components/Content'
import Aside from './components/Menu'
import Footer from './components/Footer'
import Logo from './components/Logo'

import { Container } from "./styles";
import { GlobalStyle } from "./styles";

export default props => {
  return (
    
    <Container> 
        <GlobalStyle/>
        <Logo/> 
        <Header />
        <Main />
        <Aside />
        <Footer />
    </Container>
  )
}