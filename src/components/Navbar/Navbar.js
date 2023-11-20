import React from 'react';
import { Link } from 'react-router-dom';
import { BsDownload } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className=''>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href='#intro'>Introduction</a></li>
              <li><a href='#skill'>Skills</a></li>
              <li><Link to='/blog'></Link></li>
              <li><a href='#about'>About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href='#contact'>Contact Me</a></li>
            </ul>
          </div>
          <a href='#home' className="btn btn-ghost normal-case text-lg md:text-xl">Tanjil's Portfolio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href='#intro'>Introduction</a></li>
            <li><a href='#skill'>Skills</a></li>
            <li><a href='/blog'>Blogs</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href='#contact'>Contact Me</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="p-1 md:p-2 rounded-lg btn-accent capitalize flex gap-2">
            <BsDownload className='md:text-lg' />
            <a target='blank' href='https://drive.google.com/file/d/1R0BJKYXv69puG2zTA6cOcPU9fnLSGTk2/view?usp=drive_link' download>My Resume</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;