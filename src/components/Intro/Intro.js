import React from 'react';
import './Intro.css'

const Intro = () => {
  return (
    <div className="" id="intro">
      <section className='my-24 flex flex-col lg:flex-row justify-center items-center'>
        <div className="intro">
          <div className='intro'>
            <h1 className='intro-name text-5xl'><span className='text-gray-400'>Hello there?</span> <br /> I'M ABU SALAH MD TANJIL</h1>
            <h2 className='intro-title text-4xl'>FRONT-END DEVELOPER</h2>
          </div>
          <div className='text-lg flex flex-col justify-start items-start my-12'>
            <h2>I'm a Front-End Developer focused on</h2>
            <h2>on crafting clean & user-friendly</h2>
            <h2>experiences, I am passionate about</h2>
            <h2>building excellent website that improves</h2>
            <h2>the lives of those around me.</h2>
          </div>
        </div>
        <div className='image'>
          <img src="https://i.ibb.co/Hn7x4MB/rsz-rsz-35-01-01-02-removebg-preview.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Intro;