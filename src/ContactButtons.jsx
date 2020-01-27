import React, { Component } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Miguel from './Logos/Miguel_self.jpg'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        margin: theme.spacing(10),
        justify: 'center',    
    },
    button: {
        margin: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid black',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 4, 4),
    },
  }));


export default function App() {
    const classes = useStyles();
    const [modal, setModal] = React.useState(false);
    const openModal = () => {
        setModal(true);
      }
      const closeModal = () => {
        setModal(false);
      }

    return(
        <div className={classes.root}>
            <img className="self" xs={12} src={Miguel} alt="Miguel Floresca-Cravens"/>
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

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={modal}
                onClose={closeModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                >
                <Fade in={modal}>
                    <div className={classes.paper}>
                    <h2 id="transition-modal-title">Miguel's Phone Number</h2>
                    <Typography id="transition-modal-description">(206) 941-1312</Typography>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
