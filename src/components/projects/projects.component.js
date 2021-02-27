import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectComponent = ({ darkMode }) => {
  const projectList = useStaticQuery(
    graphql`
      query {
        projectsJson {
          projects {
            name
            url
            description
            tech
          }
        }
      }
    `
  );

  return (
    <div
      id='projects'
      className={`h-auto grid-flow-row p-3 font-raleway ${
        darkMode ? 'text-white' : ''
      }`}
    >
      <div className='text-center text-xl md:text-2xl p-2'>
        <span className='tracking-wider'>Projects</span>
        <span role='img' aria-label='projects'>
          &nbsp;💻
        </span>
      </div>
      {_.map(projectList.projectsJson.projects, (project, index) => {
        return (
          <div className='p-2' key={index}>
            <div
              className={`border h-1/5 flex md:flex-row p-4 border-${
                darkMode ? 'white' : 'black'
              }`}
            >
              <div className='w-full'>
                <div className='text-raleway text-lg md:text-xl font-semibold'>
                  {project.name}
                </div>
                <ul>
                  {_.map(project.description, (description, i) => {
                    return (
                      <li
                        key={i}
                        className='font-medium text-base md:text-base'
                      >
                        - &nbsp;{description}
                      </li>
                    );
                  })}
                </ul>
                <span className='font-semibold'>Tech:</span>
                <span className='italic'>&nbsp;{project.tech}</span>
                <br />
                <button
                  className={`bg-transparent border border-solid border-${
                    darkMode ? 'white' : 'black'
                  } hover:bg-${
                    darkMode ? 'orange' : 'black'
                  } hover:text-white p-1 rounded mt-2`}
                  type='button'
                  onClick={() => window.open(project.url)}
                >
                  <FontAwesomeIcon icon={faGithub} /> Github
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { ProjectComponent };
