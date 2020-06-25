import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faStackOverflow, faLinkedin, faQuora } from '@fortawesome/free-brands-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';
import useStyles from '../styles/contacts';

const icon = [
    faLinkedin, faGithub, faInstagram, faStackOverflow, faQuora, faEnvelopeSquare
]

const Contact = () => {

    const classes = useStyles();

    const data = useStaticQuery(
        graphql`
            query{
                contactJson{
                    contacts{
                        name
                        url
                    }
                }
            }
        `
    )

    return (
        <Grid container direction='row' justify='center' alignItems='center' id='contactId' className={classes.root}>
            <Grid item xs={12} className={classes.titleGrid}>
                <Typography className={classes.title}>Love the work?Let&apos;s connect <span role='img' aria-label='contact'>🔗</span></Typography>
            </Grid>
            <Grid item xs={12} container justify='space-evenly' alignItems='center' className={classes.contactGrid}>
                {
                    data.contactJson.contacts.map((contact1, index) => {
                        return (
                            <a target="_blank" rel="noopener noreferrer" href={contact1.url} className={classes.icons} key={index}>
                                <FontAwesomeIcon icon={icon[index]} />
                            </a>
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

export default Contact;