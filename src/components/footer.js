import React from 'react';
import useStyles from '../styles/footer';

const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.footerDiv}>
            <p>-x- Yep! This is Footer! -x-</p>
            <p>It was nice to have you here, see you around! <span role='img' aria-label='bye'>👋</span></p>
            <small>Copyright &copy; {new Date().getFullYear()} Swpril Ahuja.</small>
            <small>All Rights Reserved.</small>
            <small>Built with <span role='img' aria-label='heart' className={classes.heart}> ❤ </span> <a href='https://www.gatsbyjs.org' className={classes.link}>Gatsby</a></small>
        </div>
    )
}

export default Footer;