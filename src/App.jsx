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
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid black',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 4),
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
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
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
    <div className={classes.root}>
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
        <Grid item xs={6}>
          <img style={{height: 250}} xs={12} src={Miguel} alt="Miguel Floresca-Cravens"/>
          <Typography>Hello, my name is Miguel! I am an ambitious and fun full stack developer with a background in finance. I have a passion for music and enjoy solving problems. I look forward to using my skills in future projects!</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button href="mailto:mflorescacravens@gmail.com" variant="contained" color='primary'>
              Contact Miguel via Email <SendIcon className={classes.rightIcon}/>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={openModal} xs={5} variant="contained" color='primary'>
            Contact Miguel via Phone
            <CallIcon className={classes.rightIcon}/>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button 
            item 
            href="https://www.linkedin.com/in/miguelfloresca-cravens/" 
            target="_blank"
            variant="contained" 
            color='primary'>
              Contact Miguel via LinkedIn
            <LinkedInIcon className={classes.rightIcon} />
          </Button>
        </Grid>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
              <GridListTile key={Django}>
                <img src={Django} alt={'Django'} />
                <GridListTileBar
                  title={'Django'}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
              <GridListTile key={React}>
                <img src={ReactImg} alt={'React'} />
                <GridListTileBar
                  title={'React'}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
              <GridListTile key={MongoDB}>
                <img src={MongoDB} alt={'MongoDB'} />
                <GridListTileBar
                  title={'MongoDB'}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
              <GridListTile key={CSS}>
                <img src={CSS} alt={'CSS'} />
                <GridListTileBar
                  title={'CSS'}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
              <GridListTile key={JS}>
                <img src={JS} alt={'JS'} />
                <GridListTileBar
                  title={'JS'}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
              <GridListTile key={Postgres}>
                <img src={Postgres} alt={'Postgres'} />
                <GridListTileBar
                  title={'Postgres'}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
              <GridListTile key={NodeJS}>
                <img src={NodeJS} alt={'NodeJS'} />
                <GridListTileBar
                  title={'NodeJS'}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
              <GridListTile key={Sequelize}>
                <img src={Sequelize} alt={'Sequelize'} />
                <GridListTileBar
                  title={'Sequelize'}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
              <GridListTile key={HTML}>
                <img src={HTML} alt={'HTML'} />
                <GridListTileBar
                  title={'HTML'}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
              <GridListTile key={TS}>
                <img src={TS} alt={'TS'} />
                <GridListTileBar
                  title={'TS'}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
          </GridList>
        </div>

        {/* ADD THIS BACK FOR PROJECTS<GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Miguel's Skills</ListSubheader>
          </GridListTile>
            <GridListTile key={Django}>
              <img src={Django} alt={Django} />
              <GridListTileBar
                title={'Django'}
                actionIcon={
                  <IconButton aria-label={`info about Django`} className={classes.icon}>
                  </IconButton>
                }
              />
            </GridListTile>
        </GridList> */}












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
      </Grid>
    </div>
  );
}