import React, { useEffect, useState } from 'react';

import {
  AboutComponent,
  EducationComponent,
  ProjectComponent,
  ContactComponent,
  FooterComponent,
  Layout,
  SEO
} from '../components';

const IndexPage = () => {
  const [darkMode, setDarkMode] = useState();
  useEffect(() => {}, [darkMode]);
  return (
    <Layout getDarkMode={isDarkMode => setDarkMode(isDarkMode)}>
      <SEO title='Full Stack Engineer' />
      <AboutComponent darkMode={darkMode} />
      <EducationComponent darkMode={darkMode} />
      <ProjectComponent darkMode={darkMode} />
      <ContactComponent darkMode={darkMode} />
      <FooterComponent darkMode={darkMode} />
    </Layout>
  );
};

export default IndexPage;
