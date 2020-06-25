import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        // paddingLeft: theme.spacing(4),
        // paddingRight: theme.spacing(4),
        // [theme.breakpoints.down('xs')]: {
        //     paddingLeft: theme.spacing(1),
        //     paddingRight: theme.spacing(1),
        // }
    },
    appBar: {
        backgroundColor: '#FBFBFB',
    },
    titleGrid: {
        paddingLeft: theme.spacing(4),
        textAlign: 'start',
        '& .MuiLink-underlineHover:hover': {
            textDecoration: 'none'
        },
    },
    title: {
        cursor: 'pointer',
        fontFamily: 'Raleway',
        color: 'black',
        letterSpacing: '0.25em',
        fontWeight: 'bold',
        fontSize: '24px',
        textDecoration: 'none',
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px'
        }
    },
    firstName: {
        color: '#FF9933'
    },
    menuGrid: {
        textAlign: 'end',
        paddingRight: theme.spacing(4),
        '& .MuiLink-underlineHover:hover': {
            textDecoration: 'none'
        }
    },
    menu: {
        marginRight: theme.spacing(1),
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: theme.spacing(2),
        lineHeight: '28px',
        letterSpacing: '0.15em',
        textDecoration: 'none',
        color: 'black',
        cursor: 'pointer'
    },
    dropDown: {
        fontFamily: 'Raleway',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: theme.spacing(1.5),
        marginBottom: 0,
        letterSpacing: '0.10em',
        textDecoration: 'none',
        color: 'black',
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '2px',
        paddingBottom: '2px',
    }
}));

export default useStyles;