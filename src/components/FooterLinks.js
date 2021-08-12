import "./Intro.css";

import { Grid, Link, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function FooterLinks() {
  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid item>
        <Link color="inherit" href="https://www.google.com">
          <GitHubIcon />
        </Link>
      </Grid>
      <Grid item>
        <Link color="inherit" href="https://www.google.com">
          <LinkedInIcon />
        </Link>
      </Grid>
      <Grid item>
        <Link color="inherit" href="https://www.google.com">
          <strong>jovian.ai</strong>
        </Link>
      </Grid>
    </Grid>
  );
}
