import React from 'react';
import './Pages.css'
import Contact from '../components/Contact/Contact';
import Intro from '../components/Intro/Intro';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

const Pages = () => {
  return (
    <div>
      <Intro></Intro>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Pages;