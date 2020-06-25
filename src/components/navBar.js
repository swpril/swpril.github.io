import React from 'react';
import { AppBar, Toolbar, Grid, Hidden, Menu, MenuItem, Button, Link } from '@material-ui/core';
import scrollTo from 'gatsby-plugin-smoothscroll';
import useStyles from '../styles/nav';

const NavBar = () => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const scrollToSection = (sectionId) => {
        scrollTo(sectionId)
    }

    return (
        <AppBar position='absolute' className={classes.appBar}>
            <Toolbar style={{ padding: 0 }}>
                <Grid container direction='row' justify='flex-start' alignItems='center' className={classes.root}>
                    <Grid item xs={8} sm={5} md={6} lg={6} className={classes.titleGrid}>
                        <Link className={classes.title} to='/'> <span className={classes.firstName}>SWPRIL</span> AHUJA</Link>
                    </Grid>
                    <Hidden xsDown>
                        <Grid item xs={4} sm={7} md={6} lg={6} className={classes.menuGrid}>
                            <Link className={classes.menu} onClick={() => scrollToSection('#aboutId')}>About<span role='img' aria-label='about'>👦</span></Link>
                            <Link className={classes.menu} onClick={() => { scrollToSection('#projectId') }}>Projects<span role='img' aria-label='projects'>💻</span></Link>
                            <Link className={classes.menu} onClick={() => { scrollToSection('#contactId') }}>Contact<span role='img' aria-label='contact'>📞</span></Link>
                        </Grid>
                    </Hidden>
                    <Hidden only={['sm', 'md', 'lg', 'xl']}>
                        <Grid item xs={4} style={{ textAlign: 'end' }}>
                            <Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick} style={{ paddingRight: 0, paddingLeft: 0 }} >
                                <span role='img' aria-label='dropDown'>🧷</span>
                            </Button>
                            <Menu
                                id='simple-menu'
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} className={classes.dropDown} component={Link} onClick={() => { scrollToSection('#aboutId') }}>About<span role='img' aria-label='about'> 👦</span></MenuItem>
                                <MenuItem onClick={handleClose} className={classes.dropDown} component={Link} onClick={() => { scrollToSection('#projectId') }}>Projects<span role='img' aria-label='projects'> 💻</span></MenuItem>
                                <MenuItem onClick={handleClose} className={classes.dropDown} component={Link} onClick={() => { scrollToSection('#contactId') }}>Contact<span role='img' aria-label='contact'> 📞</span></MenuItem>
                            </Menu>

                        </Grid>

                    </Hidden>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;