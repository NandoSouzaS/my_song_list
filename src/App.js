import React from "react";

import Header from './components/Header'
import Main from './components/Main'
import Aside from './components/Aside'
import Footer from './components/Footer'

export default props => {
  return (
    <div className='App'>    
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
  )
}