import React from 'react';
import { Link } from 'gatsby';

import { SEO } from '../components';
const NotFoundPage = () => {
  return (
    <div className='fourOFourDiv'>
      <SEO title='404: Not found' />
      <h1>
        NOT FOUND&nbsp;
        <span role='img' aria-labelledby='emoji' aria-label='yawn'>
          🥱
        </span>
      </h1>
      <p>
        You just hit a route that doesn&#39;t exist... the sadness.&nbsp;
        <span role='img' aria-labelledby='emoji' aria-label='sadness'>
          🤪
        </span>
      </p>
      <p>
        Go back to <Link to='/'>home</Link>&nbsp;
        <span role='img' aria-labelledby='emoji' aria-label='home'>
          🛁
        </span>
        &nbsp; and take a bath?
      </p>
    </div>
  );
};

export default NotFoundPage;
