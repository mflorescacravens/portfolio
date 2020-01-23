import React, { Component } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      margin: theme.spacing(6),
      justify: 'center',    
    },
    button: {
        margin: theme.spacing(1),
    },
    rightIcon: {
    marginLeft: theme.spacing(1),
    },
  }));


export default function App() {
    const classes = useStyles();
    const openModal = () => {
        setModal(true);
      }
      const closeModal = () => {
        setModal(false);
      }

    return(
        <div>
            <Grid container justify='center'>
                <Button className={classes.button} href="mailto:mflorescacravens@gmail.com" variant="contained" color='primary'>
                    Contact Miguel via Email <SendIcon className={classes.rightIcon}/>
                </Button>
            </Grid>
            <Grid container justify='center' >
                <Button className={classes.button} onClick={openModal} variant="contained" color='primary'>
                Contact Miguel via Phone
                <CallIcon className={classes.rightIcon}/>
                </Button>
            </Grid>
            <Grid container justify='center'>
                <Button 
                className={classes.button}
                href="https://www.linkedin.com/in/miguelfloresca-cravens/"
                target="_blank"
                variant="contained" 
                color='primary'>
                    Contact Miguel via LinkedIn
                <LinkedInIcon className={classes.rightIcon} />
                </Button>
            </Grid>
            <Grid container justify='center'>
                <Button
                className={classes.button}
                variant='contained' 
                color='primary' 
                href="https://github.com/Guelito1">
                    Contact Miguel via Github
                <GitHubIcon className={classes.rightIcon} />
                </Button>
            </Grid>
        </div>
    )
}
