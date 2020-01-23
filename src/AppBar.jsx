import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      margin: theme.spacing(6),
      justify: 'center',    
    },
    title: {
      color: theme.palette.primary,
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
          </Toolbar>
        </AppBar>
      </div>
    );
  }