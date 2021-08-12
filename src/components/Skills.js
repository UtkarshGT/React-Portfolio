import "./Skills.css";

import { LinearProgress, Grid, Typography, Paper } from "@material-ui/core";

export default function Skills() {
  return (
    <div className="m-b">
      <Typography variant="h5" align="center" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4}>
          <Paper variant="outlined" className="skill-card">
            <Typography variant="body1" gutterBottom>
              Paper Outlined
            </Typography>
            <LinearProgress variant="determinate" value={33} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper variant="outlined" className="skill-card">
            <Typography variant="body1" gutterBottom>
              Paper Outlined
            </Typography>
            <LinearProgress variant="determinate" value={66} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper variant="outlined" className="skill-card">
            <Typography variant="body1" gutterBottom>
              Paper Outlined
            </Typography>
            <LinearProgress variant="determinate" value={99} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper variant="outlined" className="skill-card">
            <Typography variant="body1" gutterBottom>
              Paper Outlined
            </Typography>
            <LinearProgress variant="determinate" value={50} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
