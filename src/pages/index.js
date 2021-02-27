import React, { useEffect, useState } from 'react';

import { Zoom } from 'react-reveal';

import {
  AboutComponent,
  EducationComponent,
  ProjectComponent,
  ContactComponent,
  FooterComponent,
  ExperienceComponent,
  Layout,
  SEO
} from '../components';

const IndexPage = () => {
  const [darkMode, setDarkMode] = useState();
  useEffect(() => {}, [darkMode]);
  return (
    <Layout getDarkMode={isDarkMode => setDarkMode(isDarkMode)}>
      <SEO title='Full Stack Engineer' />
      <Zoom>
        <AboutComponent darkMode={darkMode} />
        <ExperienceComponent darkMode={darkMode} />
        <EducationComponent darkMode={darkMode} />
        <ProjectComponent darkMode={darkMode} />
        <ContactComponent darkMode={darkMode} />
        <FooterComponent darkMode={darkMode} />
      </Zoom>
    </Layout>
  );
};

export default IndexPage;
