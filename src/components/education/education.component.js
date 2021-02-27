import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import * as _ from 'lodash';

const EducationComponent = ({ darkMode }) => {
  const educationList = useStaticQuery(
    graphql`
      query {
        educationJson {
          education {
            institution
            degree
            startDate
            endDate
            location
          }
        }
      }
    `
  );

  return (
    <div
      id='education'
      className={`h-auto grid-flow-row p-3 font-raleway ${
        darkMode ? 'text-white' : ''
      }`}
    >
      <div className='text-center text-xl md:text-2xl p-2'>
        <span className='tracking-wider'>Education</span>
        <span role='img' aria-label='projects'>
          &nbsp; 📖
        </span>
      </div>
      <div>
        <div className='p-2'>
          <div
            className={`p-2 border h-1/5 flex md:flex-row p-4 border-${
              darkMode ? 'white' : 'black'
            }`}
          >
            <div className='w-full'>
              {_.map(educationList.educationJson.education, (edu, index) => {
                return (
                  <div className='flex w-full'>
                    <div className='w-3/4'>
                      <span className='font-semibold text-base md:text-2xl'>
                        {edu.institution}
                      </span>
                      <br />
                      <span className='font-medium'>{edu.degree}</span>
                      <br />
                      <span className='italic'>
                        {edu.startDate}-{edu.endDate}
                      </span>
                    </div>
                    <div class='w-1/4 text-right '>{edu.location}</div>
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EducationComponent };
