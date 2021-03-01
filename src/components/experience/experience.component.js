import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import * as _ from 'lodash';

const ExperienceComponent = ({ darkMode }) => {
  const experienceList = useStaticQuery(
    graphql`
      query {
        experienceJson {
          experience {
            company
            role
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
      id='experience'
      className={`h-auto grid-flow-row p-3 font-raleway ${
        darkMode ? 'text-white' : ''
      }`}
    >
      <div className='text-center text-xl md:text-2xl p-2'>
        <span className='tracking-wider'>Experience</span>
        <span role='img' aria-labelledby='emoji' aria-label='projects'>
          &nbsp; 🏆
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
              {_.map(experienceList.experienceJson.experience, (exp, index) => {
                return (
                  <div className='flex w-full' key={index}>
                    <div className='w-3/5'>
                      <span className='font-semibold text-base md:text-2xl'>
                        {exp.company}
                      </span>
                      <br />
                      <span className='font-medium'>{exp.role}</span>
                      <br />
                      <span className='italic'>
                        {exp.startDate}-{exp.endDate}
                      </span>
                    </div>
                    <div className='w-2/5 text-right '>{exp.location}</div>
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

export { ExperienceComponent };
