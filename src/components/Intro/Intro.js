import React from 'react';
import './Intro.css'


const Intro = () => {
  return (
    <div className="mx-8" id="intro">
      <section className='my-24 flex gap-4 flex-col-reverse lg:flex-row justify-center items-center'>
        <div className="intro w-3/4">
          <div className='intro'>
            <h3 className='text-gray-400 text-xl lg:text-4xl mb-4'>Hello there?</h3>

            <h1 className='text-2xl lg:text-5xl'>I'M</h1>

            <h1 className='intro-name  text-3xl lg:text-6xl animate__fadeInLeft animate__animated animate__slower	3s'>ABU SALAH MD TANJIL</h1>

            <h2 className='intro-title text-2xl lg:text-5xl animate__fadeInRight animate__animated animate__slower	3s'>FRONT-END DEVELOPER</h2>
          </div>
          <div className='text-lg flex flex-col justify-start items-start my-12'>
            <h2>I'm a Front-End Developer focused on on crafting clean & user-friendly
              experiences, I am passionate about building excellent website that improves the lives of those around me.</h2>
          </div>
          <button className='btn'><a href="https://drive.google.com/file/d/1roDcdkd4gdSJrbLr9Wn-_I4PJ3d6Vc8E/view?usp=share_link">My Resume</a></button>
        </div>
        <div className='image'>
          <img src="https://i.ibb.co/Hn7x4MB/rsz-rsz-35-01-01-02-removebg-preview.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Intro;