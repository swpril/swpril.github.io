import React from 'react';

import {
  About,
  Education,
  Projects,
  Contact,
  Footer,
  Layout,
  SEO
} from '../components';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='swpril' />
      <About />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
