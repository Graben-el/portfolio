import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Header } from "./components/header/header";
import Hero from "./components/hero/hero";
import './App.css'
import { AboutMe } from "./components/aboutMe/aboutMe";
import { Skills } from "./components/skills/skill";
import { Projects } from "./components/projects/projects";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
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

    :root {
      --primary-color: #2b2b53;
      --secondary-color: #c5c5c5;
      --terciary-color: #ff6600;
    }
}
`


export default App;
