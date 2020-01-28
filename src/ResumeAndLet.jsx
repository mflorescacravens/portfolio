import React from 'react';
import Resume from './Resume/MFloresca-Cravens_Resume.pdf';
import LoR1 from './Resume/Letter-of-Rec-MiguelFC.pdf';
import LoR2 from './Resume/Letter-of-Recommendation.pdf';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  projectMain: {
    margin: '0 auto',
  },
  resumeAndLet: {
    marginBottom: theme.spacing(5),
    width: "90%",
    height: "800px"
  },
}));

export default function ResumeAndLet() {
  const classes = useStyles();

  return (
      <div className={classes.projectMain}>
        <Typography id='resume' variant='h4' align='center'>Resume and Letters of Recommendation</Typography>
        <object className={classes.resumeAndLet} data={Resume} type="application/pdf" />
        <object className={classes.resumeAndLet} data={LoR1} type="application/pdf" />
        <object className={classes.resumeAndLet} data={LoR2} type="application/pdf" />
      </div>
  )
}