import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      margin: theme.spacing(6),
      justify: 'center',
      marginBottom: theme.spacing(18),
    },
    title: {
      color: theme.palette.primary,
    },
    nav: {
      flexGrow: 1,
      justify: 'center',
      marginLeft: theme.spacing(3)
    }
}));

export default function AppBars() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar xs={12} position="fixed">
        <Toolbar>
          <IconButton 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Miguel Floresca-Cravens
          </Typography>
          <Link to='/'>
            <Typography className={classes.nav}>Home</Typography>
          </Link>
          <Link to='/contact'>
            <Typography className={classes.nav}>Contact</Typography>
          </Link>
          <Link to='/skills'>
            <Typography className={classes.nav}>Skills</Typography>
          </Link>
          <Link to='/projects'>
            <Typography className={classes.nav}>Projects</Typography>
          </Link>
          <Link to='/resume'>
            <Typography className={classes.nav}>Resume</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}