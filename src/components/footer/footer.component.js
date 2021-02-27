import React from 'react';

const FooterComponent = ({ darkMode }) => {
  return (
    <div
      className={`h-full flex w-100 flex-col justify-center font-raleway text-center p-4  ${
        darkMode ? 'text-white' : 'text-black'
      }`}
    >
      <p>-x- Yep! This is Footer! -x-</p>
      <p>
        It was nice to have you here, see you around!&nbsp;
        <span role='img' aria-label='bye'>
          👋
        </span>
      </p>
      <small>Copyright &copy; {new Date().getFullYear()} Swpril Ahuja.</small>
      <small>All Rights Reserved.</small>
      <small>
        Built with&nbsp;
        <span role='img' aria-label='heart' className='text-heart'>
          ❤&nbsp;
        </span>
        &nbsp;
        <a href='https://www.gatsbyjs.org' target='__blank'>
          Gatsby
        </a>
      </small>
    </div>
  );
};

export { FooterComponent };
