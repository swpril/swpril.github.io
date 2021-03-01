import React from 'react';

import profile from '../../images/profile.svg';

const AboutComponent = ({ darkMode }) => {
  return (
    <div className={`h-screen flex flex-wrap p-4 `}>
      <div className='w-full lg:w-1/2 px-2'>
        <div className='h-4/5 flex items-center justify-center'>
          <span className='p-8'>
            <img src={profile} height='400' width='250' alt='profile pic' />
          </span>
        </div>
      </div>
      <div className='w-full lg:w-1/2'>
        <div className='h-4/5 text-center flex items-center justify-center'>
          <p className='font-raleway text-xl p-8 font-medium lg:text-2xl'>
            <span className={`${darkMode ? 'text-white' : 'text-black'}`}>
              &nbsp; Hello Hola, नमस्ते&nbsp;
            </span>
            <span role='img' aria-label='hello' aria-labelledby='emoji'>
              👋
            </span>
            &nbsp;
            <span className={`${darkMode ? 'text-white' : 'text-black'}`}>
              &nbsp;I’m &nbsp;
            </span>
            <span className='text-orange'>Swpril Ahuja</span>
            <span className={`${darkMode ? 'text-white' : 'text-black'}`}>
              &nbsp; - A Full Stack Developer and Computer Programmer. Who is in
              love with &nbsp;
              <span className='text-orange'>&lt;/&gt;</span>. I Like to Solve
              Problems with Tech 🖥.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export { AboutComponent };
