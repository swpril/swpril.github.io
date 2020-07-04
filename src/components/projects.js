import React from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import profile from '../images/profile.svg';
import TCS from '../images/TCS.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import useStyles from '../styles/projects';

const image = [profile, TCS];

const Projects = () => {

    const data = useStaticQuery(
        graphql`
            query{
                projectsJson{
                    projects{
                        name
                        url
                        description
                    }
                }
            }
        `
    )
    const classes = useStyles();

    return (
        <Grid container direction='row' justify='center' alignItems='center' className={classes.root} id='projectId'>
            <Grid item xs={12} className={classes.titleGrid}>
                <Typography className={classes.title}>Projects <span role='img' aria-label='projects'> 💻</span></Typography>
            </Grid>
            {
                data.projectsJson.projects.map((project, index) => {
                    return (
                        <Grid item xs={12} sm={10} md={11} container justify='center' className={classes.projectGrid} key={index}>
                            <Grid item xs={12} className={classes.paddingGrid}>
                                <img src={image[index]} height='125' width='125' alt='project-img' />
                            </Grid>
                            <Grid item xs={12} className={classes.paddingGrid}>
                                <Typography className={classes.projectTitle}>{project.name}</Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.paddingGrid}>
                                <Typography className={classes.projectDescription}>{project.description}</Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.paddingGrid}>
                                <IconButton className={classes.button} href={project.url} target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={faGithub} /><Typography className={classes.gitHub}>GitHub</Typography>
                                </IconButton>
                            </Grid>
                        </Grid>
                    )
                })
            }
            <Grid item xs={12} sm={10} md={11} container justify='center' className={classes.gitHubGrid}>
                <IconButton className={classes.profileButton} href='https://github.com/oyeshubhu' target='_blank' rel='noopener noreferrer'>
                    <Typography className={classes.gitHub}>View my other creations on <FontAwesomeIcon icon={faGithub} /> Github Profile</Typography>
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Projects;