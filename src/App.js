import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Header } from "./components/header/header";
import Hero from "./components/hero/hero";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Hero />
    </BrowserRouter>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Spline Sans Mono', monospace;

    a, a:visited, a:active{
      color: currentColor;
      text-decoration: none;
      
    }
}
`

export default App;
