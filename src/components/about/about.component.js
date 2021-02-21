import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import profile from '../../images/profile.svg';

import useStyles from './about.styles';

const About = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='row'
      justify='center'
      alignItems='center'
      className={classes.root}
    >
      <Grid
        item
        md={4}
        xs={12}
        lg={6}
        sm={6}
        container
        justify='center'
        alignItems='center'
        className={classes.profileImg}
      >
        <img src={profile} height='400' width='250' alt='profile pic' />
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
        lg={6}
        sm={6}
        container
        justify='center'
        alignItems='center'
        className={classes.bio}
      >
        <Typography className={classes.intro}>
          Hello Hola, नमस्ते{' '}
          <span role='img' aria-label='hello'>
            👋
          </span>{' '}
          I’m &nbsp;
          <span className={classes.name}>Swpril Ahuja</span> - A Full Stack
          Developer and Computer Programmer.Who is in love with &nbsp;
          <span className={classes.name}>&lt;/&gt;</span>. I Like to Solve
          Problems with Tech 🖥.
        </Typography>
      </Grid>
    </Grid>
  );
};

export { About };
