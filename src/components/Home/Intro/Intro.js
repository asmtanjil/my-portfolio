import React from 'react';
import './Intro.css'
import Typewriter from 'typewriter-effect';


const Intro = () => {
  return (
    <div className="mx-8 animate__fadeInLeft animate__animated animate__slower	3s" id="intro">
      <section className='my-24 flex gap-4 flex-col-reverse lg:flex-row justify-center items-center'>
        <div className="intro w-3/4">
          <div className='intro'>
            <h3 className='text-gray-400 text-xl lg:text-4xl mb-4'>Hello there?</h3>

            <h1 className='text-2xl lg:text-5xl'>I'M</h1>

            <h1 className='intro-name  text-3xl lg:text-6xl animate__fadeInLeft animate__animated animate__slower	3s'>ABU SALAH MD TANJIL</h1>

            <div className="intro-title text-2xl lg:text-5xl">
              <Typewriter
                options={{
                  strings: ['WEB DEVELOPER', 'FRONT-END DEVELOPER', 'MERN-STACK DEVELOPER'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            {/* <h2 className='intro-title text-2xl lg:text-5xl animate__fadeInRight animate__animated animate__slower	3s'>FRONT-END DEVELOPER</h2> */}
          </div>
          <button className='btn btn-primary my-4'><a href="https://drive.google.com/file/d/1roDcdkd4gdSJrbLr9Wn-_I4PJ3d6Vc8E/view?usp=share_link" target="blank">My Resume</a></button>
        </div>
        <div className='image'>
          <img src="https://i.ibb.co/Hn7x4MB/rsz-rsz-35-01-01-02-removebg-preview.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Intro;