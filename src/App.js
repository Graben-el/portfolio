import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Header } from "./components/header/header";
import Hero from "./components/hero/hero";
import './App.css'
import { AboutMe } from "./components/aboutMe/aboutMe";
import { Skills } from "./components/skills/skill";
import { Projects } from "./components/projects/projects";
import Contact from "./components/contact/contact";
import React, { useEffect } from 'react';
import { Element} from 'react-scroll'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ScrollToTop from "react-scroll-to-top";

function App() {
  useEffect(() => {
    Aos.init({duration: 2500})
  }, [])

  return (
    <BrowserRouter>
    
      <GlobalStyle />
      <Header />
      <Element name='hero' className="hero">
        <Hero />
      </Element>
      <Element name='aboutme' className="aboutme">
        <AboutMe />
      </Element>
      <Element name='skills' className="skills">
        <Skills />
      </Element>
      <Element name='projects' className="projects">
        <Projects />
      </Element>
      <Element name='contact' className="contact">
        <Contact />
      </Element>
      <ScrollToTop smooth color="#f60" style={{backgroundColor: '#2b2b53', border: '1px solid #c5c5c5'}}/>
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

  html {
    overflow-x: hidden;
  }
`


export default App;
