import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '10vh',
    minHeight: 'auto',
    [theme.breakpoints.down('xs')]: {
      marginTop: '2vh'
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
  projectGrid: {
    border: '1px solid black',
    textAlign: 'start',
    minHeight: 'auto',
    marginBottom: '2vh'
  },
  paddingGrid: {
    padding: theme.spacing(1)
  },
  projectTitle: {
    fontFamily: 'Raleway',
    letterSpacing: '.15em',
    fontWeight: 'bold',
    fontStyle: 'normal'
  },
  projectDescription: {
    fontFamily: 'Raleway',
    letterSpacing: '.10em',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: theme.spacing(1.75),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(2)
    }
  },
  button: {
    border: '.5px solid black',
    fontSize: theme.spacing(2),
    borderRadius: '.2em',
    padding: 3,
    color: 'black',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white'
    }
  },
  gitHub: {
    fontSize: theme.spacing(1.5),
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFamily: 'Raleway',
    paddingLeft: 2
  },
  gitHubGrid: {
    marginTop: '2vh'
  },
  profileButton: {
    width: '100%',
    fontSize: theme.spacing(3),
    border: '1px solid black',
    borderRadius: '.2em',
    padding: 3,
    color: 'black',
    '&:hover': {
      backgroundColor: 'black',
      color: 'white'
    }
  }
}));

export default useStyles;
