import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import {
  Typography,
  Grid,
  Stepper,
  Step,
  StepLabel,
  StepContent
} from '@material-ui/core';

import useStyles from './education.styles';

const Education = () => {
  const data = useStaticQuery(
    graphql`
      query {
        educationJson {
          education {
            institution
            degree
            startDate
            endDate
          }
        }
      }
    `
  );

  const classes = useStyles();

  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      id='aboutId'
      className={classes.root}
    >
      <Grid item xs={12} className={classes.titleGrid}>
        <Typography className={classes.title}>
          Education{' '}
          <span role='img' aria-label='education'>
            📖
          </span>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={10} md={11} className={classes.education}>
        <Stepper orientation='vertical' className={classes.stepper}>
          {data.educationJson.education.map(label => (
            <Step
              active={true}
              key={label.institution}
              className={classes.step}
            >
              <StepLabel className={classes.stepperLabel}>
                {label.degree}
              </StepLabel>
              <StepContent className={classes.stepContent}>
                <Typography className={classes.institution}>
                  {label.institution}
                </Typography>
                <Typography className={classes.institution}>
                  {label.startDate}-{label.endDate}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Grid>
    </Grid>
  );
};

export { Education };
