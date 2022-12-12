import React from 'react';
import Typewriter from 'typewriter-effect';

const Blogs = () => {
  return (
    <div>
      <div className='min-h-screen flex justify-center items-center text-3xl md:text-3xl text-amber-400 font-semibold '>
        <Typewriter
          options={{
            strings: ['Blogs Are Coming SooN!!'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Blogs;