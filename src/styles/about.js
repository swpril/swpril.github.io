import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        marginTop: '75px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '60px',
            flexDirection: 'column',
            minHeight: 'auto',
        },
    },
    profileImg: {
        minHeight: 'auto',
        textAlign: 'center',
    },
    bio: {
        minHeight: 'auto',
        textAlign: 'center',
        padding: theme.spacing(4),
    },
    intro: {
        fontFamily: 'Raleway',
        fontSize: theme.spacing(3.5),
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: '55px',
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.spacing(2),
            lineHeight: '40px'
        }
    },
    name: {
        color: '#FF9933',
        fontStyle: 'normal',
    }
}));

export default useStyles;