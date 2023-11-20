import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const AboutMe = () => {
  return (
    <div className='p-8 md:p-12' id="about">
      <h1 className='text-center text-3xl md:text-5xl font-bold my-12'>About Me</h1>

      <section className='flex flex-col-reverse md:flex-row items-center gap-6 md:gap-20'>

        <div className='md:text-lg flex-1'>
          {/* hover:animate-pulse */}
          <h2 className=''>Hello, I am Abu Salah Md Tanjil from Barishal, Bangladesh. I have completed Bachelor of Science in Mathematics from national University. I'm a Front-End Developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent website that improves the lives of those around me. I have been learning web development for one year. I am expert in React.js. In the future I want to explore React Native, Redux, Wordpress. I am pretty interested in Material UI.</h2>
          <h2 className='mt-10 text-xl md:text-2xl text-center'>Find Me</h2>
          <div className='text-xl md:text-2xl flex gap-6 items-center justify-center mt-8 bg-accent p-3 rounded-full'>
            <a target="blank" href="https://www.facebook.com/t2njil"><BsFacebook /></a>
            <a target="blank" href="https://github.com/asmtanjil"><BsGithub /></a>
            <a target="blank" href="https://www.linkedin.com/in/asmtanjil/"><BsLinkedin /></a>
          </div>
        </div>

        <div className='flex-1 image md:p-8 mt-8 animate__fadeInRight animate__animated animate__slower	3s'>
          <img src="https://i.ibb.co/4pNVS6w/profile-Photo.jpg" className='hover:animate-pulse' alt="" />
        </div>

      </section>

    </div>
  );
};

export default AboutMe;