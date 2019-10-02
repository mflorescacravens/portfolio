import React from 'react';
import './App.css';
import Django from './LogosPNG/Django-logo2.png';
import MongoDB from './LogosPNG/MongoDB3.png';
import CSS from './LogosPNG/css3.png';
import HTML from './LogosPNG/html5.png';
import JS from './LogosPNG/javascript.png';
import NodeJS from './LogosPNG/nodejs.png';
import Postgres from './LogosPNG/postgres.png';
import ReactImg from './LogosPNG/react.png';
import Sequelize from './LogosPNG/sequelize.png';
import TS from './LogosPNG/ts.png';
import Miguel from './LogosPNG/Miguel_self.jpg';
import Runtime from './Runtime.png';
import TheHacks from './TheHacks.png';
import Mars from './Mars.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Miguel Floresca-Cravens
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container style={{padding: 10}} spacing={-10}>
        <img item style={{height: 250}} xs={12} src={Miguel} alt="Miguel Floresca-Cravens"/>
        <Typography xs={6}>Hello, my name is Miguel! I am a full stack developer with background in finance. I have a passion for music and enjoy solving problems. I look forward to using my skills in future projects!</Typography>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Button href="mailto:mflorescacravens@gmail.com" className={classes.rightIcon} variant="contained" color='primary'>
              Contact Miguel via Email
          </Button>
        </Grid>
        <Button item onClick={openModal} xs={5} className={classes.rightIcon} variant="contained" color='primary'>
          Contact Miguel via Phone
          <CallIcon/>
        </Button>
        <Button item href="https://www.linkedin.com/in/miguelfloresca-cravens/" xs={5} className={classes.rightIcon} variant="contained" color='primary'>
          Contact Miguel via LinkedIn
          <LinkedInIcon />
        </Button>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modal}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        >
          <Fade in={modal}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Miguel's Phone Number</h2>
              <Typography id="transition-modal-description">(206) 941-1312</Typography>
            </div>
          </Fade>
        </Modal>
      </Grid>
    </div>
  );
}