import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footerDiv: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'Raleway',
    marginTop: '10vh',
    marginBottom: '5vh',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: '2vh'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'blue'
  },
  heart: {
    color: '#A83F39 '
  }
}));

export default useStyles;
