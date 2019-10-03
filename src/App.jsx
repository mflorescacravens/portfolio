import React from 'react';
import './App.css';
import Miguel from './Logos/Miguel_self.jpg';
import Django from './Logos/django-logo-positive.svg';
import MongoDB from './Logos/mongodb.svg';
import CSS from './Logos/css3-brands.svg';
import HTML from './Logos/code-solid1.svg';
import JS from './Logos/js-square-brands1.svg';
import NodeJS from './Logos/node-brands1.svg';
import Postgres from './Logos/postgresql.png';
import ReactImg from './Logos/react-brands1.svg';
import TS from './Logos/TypeScript.svg';
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
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    justifyContent: 'center',
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
    flexWrap: 'wrap',
    transform: 'translateZ(0)',
    width: 400,
    height: 450,
  },
  title: {
    color: theme.palette.primary,
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
      <Grid container>
        <AppBar item xs={12} position="fixed">
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
        <Container>
          <img className="self" item style={{height: 250}} xs={12} src={Miguel} alt="Miguel Floresca-Cravens"/>
          <Typography>Welcome to my portfolio! My name is Miguel! I am an ambitious and fun full stack developer with a background in finance. I have a passion for music and solving problems. I look forward to using my skills in future projects!</Typography>
        </Container>
        <Grid container className={classes.root} spacing={1}>
          <Grid item xs={12} s={6} m={4} l={4} xl={4}>
            <Button href="mailto:mflorescacravens@gmail.com" variant="contained" color='primary'>
                Contact Miguel via Email <SendIcon className={classes.rightIcon}/>
            </Button>
          </Grid>
          <Grid item xs={12} s={6} m={4} l={4} xl={4}>
            <Button onClick={openModal} xs={5} variant="contained" color='primary'>
              Contact Miguel via Phone
              <CallIcon className={classes.rightIcon}/>
            </Button>
          </Grid>
          <Grid item xs={12} s={6} m={4} l={4} xl={4}>
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
              <GridListTile key={'React'}>
                <img src={ReactImg} alt={'ReactImg'} />
                <GridListTileBar
                  title={'React'}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
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

          {/* <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Miguel's Projects</ListSubheader>
              </GridListTile>
                <GridListTile>
                  <img src={} alt={'Runtime'} />
                  <GridListTileBar
                    title={'Runtime'}
                    subtitle={<span>by: Miguel</span>}
                    actionIcon={
                      <IconButton className={classes.icon}>
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div> */}












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
      </Grid>
    </div>
  );
}