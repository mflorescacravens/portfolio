import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import Menu from './Menu'


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      margin: theme.spacing(6),
      // justify: 'center',
      marginBottom: theme.spacing(18),
    },
    title: {
      color: theme.palette.primary,
      [theme.breakpoints.down('sm')]: {
        fontSize: '15px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '12px'
      }
    },
    menu: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      }
    },
    hamburgerMenu: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        // float: 'right',
        justifyContent: 'flex-end',
        width: '100%',
        // backgroundColor: 'green',
      }
    },
    nav: {
      flexGrow: 1,
      justify: 'center',
      marginLeft: theme.spacing(3),
      color: 'white',
      float: 'left',
      "&:hover": {
        backgroundColor: "green",
        transform: 'scale(1.2)',
      }
    },
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
          <div className={classes.menu}>
            <Link to='/'>
              <Button variant='outlined' size='large' className={classes.nav}>Home</Button>
            </Link>
            <Link to='/contact'>
              <Button variant='outlined' size='large' className={classes.nav}>Contact</Button>
            </Link>
            <Link to='/skills'>
              <Button variant='outlined' size='large' className={classes.nav}>Skills</Button>
            </Link>
            <Link to='/projects'>
              <Button variant='outlined' size='large' className={classes.nav}>Projects</Button>
            </Link>
          </div>
          <div className={classes.hamburgerMenu}>
            <Menu />
          </div>
          {/* <Link to='/resume'>
            <Button variant='outlined' size='large' className={classes.nav}>Resume</Button>
          </Link> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}