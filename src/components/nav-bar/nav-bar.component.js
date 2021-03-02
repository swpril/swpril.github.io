import React, { useState, useEffect } from 'react';

import scrollTo from 'gatsby-plugin-smoothscroll';

const NavBarComponent = ({ isDarkMode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState(false);

  const resumeUrl =
    'https://drive.google.com/file/d/1P4SrvLULuL0gT_s1e9sxJCIxRQf07b8h/view?usp=sharing';

  const scrollToSection = sectionId => scrollTo(sectionId);
  const handleClick = () => setActive(!active);

  useEffect(() => {
    isDarkMode(darkMode);
  }, [darkMode]);

  return (
    <div>
      <nav
        className={`flex items-center flex-wrap p-3 ${
          darkMode ? 'bg-gray-800' : 'bg-light-bg'
        }`}
      >
        <div className='inline-flex font-raleway font-semibold items-center p-2 mr-4 text-lg cursor-pointer md:text-2xl'>
          <span className='text-orange'>SWPRIL &nbsp;</span>
          <span className={darkMode ? 'text-white' : 'text-black'}> AHUJA</span>
        </div>

        <button
          role='img'
          aria-label='dropDown'
          onClick={handleClick}
          className=' inline-flex p-3 outline-none rounded focus:outline-none lg:hidden text-white ml-auto hover:text-white'
        >
          🧷
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <a
              className={`cursor-pointer font-raleway lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-semibold items-center justify-center ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              onClick={() => scrollToSection('#experience')}
            >
              Experience
              <span role='img' aria-labelledby='emoji' aria-label='about'>
                🏆
              </span>
            </a>

            <a
              className={`cursor-pointer font-raleway lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-semibold items-center justify-center ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              onClick={() => scrollToSection('#education')}
            >
              Education
              <span role='img' aria-labelledby='emoji' aria-label='about'>
                📖
              </span>
            </a>

            <a
              className={`cursor-pointer font-raleway lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-semibold items-center justify-center ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              onClick={() => scrollToSection('#projects')}
            >
              Projects
              <span role='img' aria-labelledby='emoji' aria-label='about'>
                💻
              </span>
            </a>

            <a
              className={`cursor-pointer font-raleway lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-semibold items-center justify-center ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              onClick={() => scrollToSection('#contact')}
            >
              Contact
              <span role='img' aria-labelledby='emoji' aria-label='about'>
                📞
              </span>
            </a>
            <button
              className={`border border-yellow-500 focus:outline-none px-3 py-2 rounded font-semibold items-center justify-center hover:bg-orange-bg hover:text-${
                darkMode ? 'black' : 'white'
              } ${darkMode ? 'text-white' : 'text-gray-800'} ${
                active ? 'mb-2' : ''
              }`}
              onClick={() => window.open(resumeUrl)}
              type='button'
            >
              Resume
            </button>
            <div className='flex items-center justify-center px-3'>
              <label
                htmlFor='toggle'
                className='flex items-center cursor-pointer'
              >
                <div className='relative'>
                  <input
                    id='toggle'
                    type='checkbox'
                    className='hidden'
                    value={darkMode}
                    onClick={async () => setDarkMode(!darkMode)}
                  />
                  <div className='toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner'></div>
                  <div className='toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0'></div>
                </div>
              </label>

              <span className='ml-2' role='img' aria-label='light'>
                {darkMode ? '🌜' : '🌞'}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { NavBarComponent };
