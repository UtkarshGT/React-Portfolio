import "./Intro.css";
import FooterLinksData from "../content/FooterLinksData";

import { Grid, Link } from "@material-ui/core";

export default function FooterLinks() {
  return (
    <div className="m-b">
      <Grid container justifyContent="center" spacing={1}>
        {FooterLinksData.map((value, index) => {
          return (
            <Grid item key={index}>
              <Link
                target="_blank"
                rel="noopener"
                className="link-text use-font"
                color="inherit"
                href={value.link}
              >
                <strong>{value.name}</strong>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
