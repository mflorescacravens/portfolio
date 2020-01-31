import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Miguel from './Logos/Miguel_self.jpg';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(10),
    justify: 'center',    
  },
  bio: {
    width: 'auto',
    margin: theme.spacing(10,35,10),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(5,15,10),
    },
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(4,4,4),
      width: 'auto',
    },
  },
}));

export default function Bio() {
  const classes = useStyles();
  
  
  return (
    <div className={classes.root}>
      <img className="self" xs={12} src={Miguel} alt="Miguel Floresca-Cravens"/>
      <div id="bioFade">
        <Typography align='center' paragraph={true} variant='body1' className={classes.bio}>Welcome to my portfolio! My name is Miguel Floresca-Cravens and I am an ambitious developer with skills in full stack web development. I have a background in management, finance, sales, and customer service. I look forward to using my skills in future projects for your team! Feel free to view my <Link href='/skills'>skills</Link> and <Link href='/projects'>projects</Link>.</Typography>
      </div>
    </div>
  );
}

