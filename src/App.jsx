import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import ContactButtons from './ContactButtons';
import ResumeAndLet from './ResumeAndLet';
import Skills from './Skills';
import Typography from '@material-ui/core/Typography';
import Miguel from './Logos/Miguel_self.jpg';
import Projects from './Projects';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(6),
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

export default function App() {
  const classes = useStyles();
  
  
  return (
    <div className={classes.root}>
      <AppBar />
      <img className="self" xs={12} src={Miguel} alt="Miguel Floresca-Cravens"/>
      <Typography align='center' paragraph={true} variant='body1' className={classes.bio}>Welcome to my portfolio! My name is <b>Miguel</b>! I am an ambitious and fun developer with skills in <b>full stack web development</b>. I have a background in finance and I have a passion for music. I look forward to using my skills in future projects for <b>your team!</b> Feel free to view my <Link href='#skills'>skills</Link>, <Link href='#projects'>projects</Link>, and <Link href='#resume'>more</Link> below.</Typography>
      <ContactButtons />
      <Skills />
      <Projects/>
      <ResumeAndLet />
    </div>
  );
}













{/* <AppBar xs={12} position="fixed">
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
      </AppBar> */}





{/* <Grid 
        container
        justify='center'>
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
          </Grid> */}







{/* <div className={classes.projectMain}>
          <Typography id='resume' variant='h4' align='center'>Resume and Letters of Recommendation</Typography>
          <object className={classes.resumeAndLet} width="100%" height="500"  data={Resume} type="application/pdf"></object>
          <object className={classes.resumeAndLet} width="100%" height="500"  data={LoR1} type="application/pdf"></object>
          <object className={classes.resumeAndLet} width="100%" height="500"  data={LoR2} type="application/pdf"></object>
        </div> */}


        {/* <Modal
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
        </Modal> */}






        {/* <Typography className={classes.projectMain} align='center' variant='h3' component="div" id='projects'>Miguel's Projects</Typography>
        <div className={classes.listRoot}>
          <Grid justify={'center'} container={true}>
            <GridList cellHeight={'auto'} className={classes.gridListB}>
              <GridListTile key="Subheader" cols={2}>
              </GridListTile>
              <GridListTile>
                <img className={classes.gridListBImg} src={PokeDex} alt={'pokeDex'} />
                <GridListTileBar
                  title={'PokeDex'}
                  subtitle={<span>by: Miguel</span>}
                  actionIcon={
                    <Button className={classes.projectLinks} size='large' variant='contained' href='https://github.com/Guelito1/myPokedex'>GitHub Repo</Button>
                  }
                />
              </GridListTile>
              <GridListTile>
                <img className={classes.gridListBImg} src={TheHacks} alt={'The Hacks'} />
                <GridListTileBar
                  title={'The Hacks'}
                  subtitle={<span>by: Miguel</span>}
                  actionIcon={
                    <Button className={classes.projectLinks} size='large' variant='contained' href='https://github.com/Guelito1/project2'>GitHub Repo</Button>
                  }
                />
              </GridListTile>
              <GridListTile>
                <img className={classes.gridListBImg} src={War} alt={'War'} />
                <GridListTileBar
                  title={'War'}
                  subtitle={<span>by: Miguel</span>}
                  actionIcon={
                    <Button className={classes.projectLinks} size='large' variant='contained' href='https://github.com/Guelito1/project1'>GitHub Repo</Button>
                  }
                />
              </GridListTile>
              <GridListTile>
                <img className={classes.gridListBImg} src={Mars} alt={'Mars'} />
                <GridListTileBar
                  title={'Mars'}
                  subtitle={<span>by: Miguel</span>}
                  actionIcon={
                    <Button className={classes.projectLinks} size='large' variant='contained' href='https://github.com/Guelito1/mars'>GitHub Repo</Button>
                  }
                />
              </GridListTile>
              <GridListTile>
                <img className={classes.gridListBImg} src={Runtime} alt={'Runtime: Cocktail Aid'} />
                <GridListTileBar
                  title={'Runtime: Cocktail Aid'}
                  subtitle={<span>by: Miguel and team</span>}
                  actionIcon={
                    <Button className={classes.projectLinks} size='large' variant='contained' href='https://github.com/ngolodets/runtime-terror'>GitHub Repo</Button>
                  }
                />
              </GridListTile>
            </GridList>
          </Grid>
        </div>
        <div>
          <Typography variant='h6' align='center' color='secondary'>Note: These projects are continually being worked on for improvement.</Typography>
        </div> */}







        {/* <div className={classes.projectMain}>
            <Typography align='center' variant='h3' id="skills">Skills</Typography>
            <Grid 
              container 
              alignItems='center' 
              alignContent='center' 
              justify='center'>
              <Grid
                container
                justify="center"
                alignItems="center">
                <GridList className={classes.gridList} cols={2}>
                  <GridListTile key={'React'}>
                    <img id='react' className='imgFix' src={ReactImg} alt={'ReactImg'} />
                    <GridListTileBar
                      title={'React'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={Angular}>
                    <img id='angular' src={Angular} alt={'Angular'} className='imgFix' />
                    <GridListTileBar
                      title={'Angular'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={JS}>
                    <img id='javascript' className='imgFix' src={JS} alt={'JS'} />
                    <GridListTileBar
                      title={'JS'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={CSharp}>
                    <img id='C#' className='imgFix' src={CSharp} alt={'C#'} />
                    <GridListTileBar
                      title={'C#'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={JQuery}>
                    <img id='JQuery' className='imgFix' src={JQuery} alt={'JQuery'} />
                    <GridListTileBar
                      title={'JQuery'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={noSQL}>
                    <img id='noSQL' className='imgFix' src={noSQL} alt={'noSQL'} />
                    <GridListTileBar
                      title={'noSQL'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={Redux}>
                    <img src={Redux} alt={'Redux'} className='imgFix' />
                    <GridListTileBar
                      title={'Redux'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={SASS}>
                    <img src={SASS} alt={'SASS'} className='imgFix' />
                    <GridListTileBar
                      title={'SASS'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={SQL}>
                    <img src={SQL} alt={'SQL'} className='imgFix' />
                    <GridListTileBar
                      title={'SQL'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={Vue}>
                    <img src={Vue} alt={'Vue'} className='imgFix' />
                    <GridListTileBar
                      title={'Vue'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={MongoDB}>
                    <img src={MongoDB} alt={'MongoDB'} className='imgFix' />
                    <GridListTileBar
                      title={'MongoDB'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={Django}>
                    <img src={Django} alt={'Django'} className='imgFix' />
                    <GridListTileBar
                      title={'Django'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={TS}>
                    <img id='ts' src={TS} alt={'TS'} className='imgFix' />
                    <GridListTileBar
                      title={'TS'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={CSS}>
                    <img id='css' className='imgFix' src={CSS} alt={'CSS'} />
                    <GridListTileBar
                      title={'CSS'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={Postgres}>
                    <img className='imgFix' src={Postgres} alt={'Postgres'} />
                    <GridListTileBar
                      title={'Postgres'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={NodeJS}>
                    <img id='node' src={NodeJS} alt={'NodeJS'} className='imgFix' />
                    <GridListTileBar
                      title={'NodeJS'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                  <GridListTile key={HTML}>
                    <img className='imgFix' src={HTML} alt={'HTML'} />
                    <GridListTileBar
                      title={'HTML'}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                </GridList>
              </Grid>
            </Grid>
          </div> */}
        {/* </Grid> */}