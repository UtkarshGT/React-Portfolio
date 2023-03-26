import "./Skills.css";
import "./Intro.css";
import SkillsData from "../content/SkillsData";

import { Grid, Typography, Paper } from "@material-ui/core";

export default function Skills() {
  return (
    <div className="m-b">
      <div className="subheader use-font center-text m-b-xs">Skills</div>
      <Grid container spacing={1}>
        {SkillsData.map((value, index) => {
          return (
            <Grid item xs={6} sm={3} key={index}>
              <Paper variant="outlined" className="skill-card">
                <Typography className="ubuntu-font" gutterBottom>
                  {value.name}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
