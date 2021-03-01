import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import * as _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faInstagram,
  faStackOverflow,
  faLinkedin,
  faQuora
} from '@fortawesome/free-brands-svg-icons';

const icon = [
  faLinkedin,
  faGithub,
  faInstagram,
  faStackOverflow,
  faQuora,
  faEnvelopeSquare
];

const ContactComponent = ({ darkMode }) => {
  const contactList = useStaticQuery(
    graphql`
      query {
        contactJson {
          contacts {
            name
            url
          }
        }
      }
    `
  );

  return (
    <div
      id='contact'
      className={`h-auto p-3 font-raleway ${darkMode ? 'text-white ' : ''}`}
    >
      <div className='text-center text-lg md:text-2xl p-2'>
        <span className='tracking-widest'>
          Love the work?Let&apos;s connect&nbsp;
        </span>
        <span role='img' aria-labelledby='emoji' aria-label='contact' aria-labelledby='img'>
          🔗
        </span>
      </div>
      <div className='flex flex-no-wrap justify-evenly align-items-center p-2'>
        {_.map(contactList.contactJson.contacts, (contact, index) => {
          return (
            <button
              className={`bg-transparent border border-solid border-${
                darkMode ? 'white' : 'black'
              } hover:bg-${
                darkMode ? 'orange' : 'black'
              } hover:text-white px-4 py-2 rounded mt-2 mx-1 text-base md:text-2xl focus:outline-none`}
              type='button'
              key={index}
              onClick={() => window.open(contact.url)}
            >
              <FontAwesomeIcon icon={icon[index]} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export { ContactComponent };
