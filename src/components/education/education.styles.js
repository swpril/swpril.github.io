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
  education: {
    border: '1px solid black',
    marginBottom: '2vh',
    textAlign: 'center',
    minHeight: 'auto'
  },
  stepper: {
    textAlign: 'center',
    margin: theme.spacing(5),
    '& .MuiStepConnector-lineVertical': {
      minHeight: 0
    }
  },
  step: {
    textAlign: 'start',
    '& .MuiStepContent-root': {
      borderLeft: '2px solid black',
      marginLeft: theme.spacing(2),
      paddingLeft: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(3)
      }
    }
  },
  stepperLabel: {
    textAlign: 'start',
    '& .MuiStepLabel-active': {
      fontFamily: 'Raleway',
      fontSize: theme.spacing(2.5),
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.spacing(1.75)
      }
    },
    '& .MuiStepIcon-root': {
      color: '#FF9933',
      fontSize: theme.spacing(5),
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.spacing(4)
      }
    }
  },
  institution: {
    fontFamily: 'Raleway',
    lineHeight: '40px',
    fontSize: theme.spacing(2.5),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(1.5)
    }
  }
}));

export default useStyles;
