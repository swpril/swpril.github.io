import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: 'auto',
        marginTop: '10vh',
        [theme.breakpoints.down('xs')]: {
            marginTop: '2vh',
        }
    },
    titleGrid: {
        textAlign: 'center',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    title: {
        letterSpacing: '0.3em',
        color: 'black',
        fontSize: theme.spacing(4),
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.spacing(2)
        }
    },
    contactGrid: {
        marginTop: '5vh',
        width: '50vw',
        paddingTop: theme.spacing(2),
        paddingBotton: theme.spacing(2),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            marginTop: '1vh',
        }
    },
    icons: {
        color: 'black',
        fontSize: theme.spacing(5),
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.spacing(4)
        }
    }
}));

export default useStyles;