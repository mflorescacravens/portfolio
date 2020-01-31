import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import Bio from './Bio';
import ContactButtons from './ContactButtons';
import Skills from './Skills';
import Projects from './Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    justify: 'center',    
  },
  // bio: {
  //   width: 'auto',
  //   margin: theme.spacing(10,35,10),
  //     [theme.breakpoints.down('sm')]: {
  //       margin: theme.spacing(5,15,10),
  //   },
  //   [theme.breakpoints.down('xs')]: {
  //     margin: theme.spacing(4,4,4),
  //     width: 'auto',
  //   },
  // },
}));

export default function App() {
  const classes = useStyles();
  
  
  return (
    <Router>
      <div className={classes.root}>
        <AppBar />
        <Switch>
          <Route path="/" exact component={Bio} />
          <Route path="/contact" exact component={ContactButtons} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/projects" exact component={Projects} />
          {/* <Route path="/resume" exact component={ResumeAndLet} /> */}
        </Switch>
      </div>
    </Router>
  );
}
