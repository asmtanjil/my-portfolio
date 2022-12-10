import React from 'react';
import Contact from '../components/Contact/Contact';
import Intro from '../components/Intro/Intro';
import Navbar from '../components/Navbar/Navbar';
import Projects from '../components/Projects/Projects';

const Pages = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Pages;