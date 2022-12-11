import React from 'react';
import './Pages.css'
import Contact from '../components/Home/Contact/Contact';
import Intro from '../components/Home/Intro/Intro';
import Projects from '../components/Home/Projects/Projects';
import Skills from '../components/Home/Skills/Skills';
import Footer from '../components/Home/Footer/Footer';
import AboutMe from '../components/Home/AboutMe/AboutMe';

const Pages = () => {
  return (
    <div>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Pages;