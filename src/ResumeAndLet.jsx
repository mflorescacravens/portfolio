import React from 'react';
import Resume from './Resume/MFloresca-Cravens_Resume.pdf';
import LoR1 from './Resume/Letter-of-Rec-MiguelFC.pdf';
import LoR2 from './Resume/Letter-of-Recommendation.pdf';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      margin: theme.spacing(6),
      justify: 'center',    
    },
    projectMain: {
        margin: theme.spacing(8,0,4,0),
      },
    resumeAndLet: {
    marginBottom: theme.spacing(5)
    }
  }));

export default function ResumeAndLet() {
    const classes = useStyles();

    return (
        <div className={classes.projectMain}>
          <Typography id='resume' variant='h4' align='center'>Resume and Letters of Recommendation</Typography>
          <object className={classes.resumeAndLet} width="100%" height="500"  data={Resume} type="application/pdf"></object>
          <object className={classes.resumeAndLet} width="100%" height="500"  data={LoR1} type="application/pdf"></object>
          <object className={classes.resumeAndLet} width="100%" height="500"  data={LoR2} type="application/pdf"></object>
        </div>
    )
}