import React from 'react';
import Typewriter from 'typewriter-effect';

const Blogs = () => {
  return (
    <div>
      <div className='min-h-screen flex justify-center items-center text-3xl font-semibold '>
        <Typewriter
          options={{
            strings: ['Coming Soon....!!'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Blogs;