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
            {/* <div className='w-full'>
              {_.map(educationList.educationJson.education, (edu, index) => {
                return (
                  <div className='text-raleway text-lg md:text-xl font-semibold'>
                    <span
                      className='border border-yellow-500 p-1'
                      style={{ borderRadius: '50%' }}
                    >
                      {index + 1}
                    </span>
                    {edu.institution}
                    <br />
                    <span className='invisible'>-</span>
                    <span>{edu.degree}</span>
                    <br />
                    <span className='invisible'>-</span>
                    <span className='italic'>
                      {edu.startDate}-{edu.endDate}
                    </span>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    </div>

    //   <Grid
    //     container
    //     direction='row'
    //     justify='center'
    //     alignItems='center'
    //     id='educationId'
    //     className={classes.root}
    //   >
    //     <Grid item xs={12} className={classes.titleGrid}>
    //       <Typography className={classes.title}>
    //         Education&nbsp;
    //         <span role='img' aria-label='education'>
    //           📖
    //         </span>
    //       </Typography>
    //     </Grid>
    //     <Grid item xs={12} sm={10} md={11} className={classes.education}>
    //       <Stepper orientation='vertical' className={classes.stepper}>
    //         {data.educationJson.education.map(label => (
    //           <Step
    //             active={true}
    //             key={label.institution}
    //             className={classes.step}
    //           >
    //             <StepLabel className={classes.stepperLabel}>
    //               {label.degree}
    //             </StepLabel>
    //             <StepContent className={classes.stepContent}>
    //               <Typography className={classes.institution}>
    //                 {label.institution}
    //               </Typography>
    //               <Typography className={classes.institution}>
    //                 {label.startDate}-{label.endDate}
    //               </Typography>
    //             </StepContent>
    //           </Step>
    //         ))}
    //       </Stepper>
    //     </Grid>
    //   </Grid>
  );
};

export { EducationComponent };
