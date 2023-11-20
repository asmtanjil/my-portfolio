import React from 'react';
import './Intro.css'
import Typewriter from 'typewriter-effect';
// import { BsDownload } from 'react-icons/bs';


const Intro = () => {
  return (
    <div className="py-8 md:py-12">
      <div className='px-8 md:px-72'>

        <p className="text-lg md:text-xl font-bold text-left my-12">Welcome to Abu Salah Md Tanjil's Portfolio</p>

        <h3 className='md:text-lg text-left'>Greetings! I'm <span className='text-accent text-lg md:text-xl font-semibold'>Abu Salah Md Tanjil</span>, a passionate <span className='text-accent text-xl md:text-2xl font-semibold'><Typewriter
          options={{
            strings: ['MERN-STACK DEVELOPER', 'FRONTEND DEVELOPER', 'FULL-STACK DEVELOPER'],
            autoStart: true,
            loop: true,
          }}
        /></span> on a journey of continuous learning and innovation. With one year of immersive experience in mastering the intricacies of MongoDB, Express.js, React.js, and Node.js, I'm excited to present my portfolio—a culmination of my passion for web development and commitment to staying at the forefront of technology.</h3>

      </div>
    </div>
  );
};

export default Intro;