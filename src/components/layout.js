import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { NavBarComponent } from '../components';

const Layout = ({ children, getDarkMode }) => {
  const [darkMode, setDarkMode] = useState();
  return (
    <div className={`m-0 font-raleway ${darkMode ? 'bg-gray-900' : ''}`}>
      <NavBarComponent
        isDarkMode={isDarkModeEnabled => {
          getDarkMode(isDarkModeEnabled);
          setDarkMode(isDarkModeEnabled);
        }}
      />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export { Layout };
