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
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

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
            Miguel's Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container position={'relative'} spacing={3}>
        <img item xs={12} style={{height: 250}} src={Miguel} alt="Miguel Floresca-Cravens"/>
        <Grid item xs={12}>
          <Button variant="contained" color='primary'>stuff</Button>
        </Grid>
      </Grid>
    </div>
  );
}