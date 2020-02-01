import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Runtime from './Runtime.png';
import TheHacks from './TheHacks.png';
import Mars from './Mars.png';
import War from './War.png';
import PokeDex from './PokeDex.png';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';


const useStyles = makeStyles(theme => ({
      root: {
        marginBottom: theme.spacing(8),
      },
      listRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridListB: {
        width: 'cover',
        height: 900,
      },
      gridListBImg: {
        width: 480,
        height: 410,
        objectFit: 'cover',
        margin: 'auto',
        display: 'flex'
      },
      projectLinks: {
        marginRight: theme.spacing(2),
        "&:hover": {
          transform: 'scale(1.1)',  
        }
      },
}));

export default function Projects() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <div className="compFadeIn">
        <Typography className={classes.projectMain} align='center' variant='h3' component="div" id='projects'>Miguel's Projects</Typography>
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
      </div>
    </div>
  )
}