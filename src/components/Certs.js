import "./Intro.css";

import { Typography } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";

export default function Certs() {
  return (
    <div className="m-b-s">
      <Typography align="center" variant="h5">
        Certs
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            style={{ textAlign: "center" }}
            primary="ListItem"
            secondary="Jfidfj"
          />
        </ListItem>
        <ListItem>
          <ListItemText style={{ textAlign: "center" }} primary="ListItem" />
        </ListItem>
        <ListItem
          button
          component="a"
          href="https://www.google.com/"
          target="_blank"
          rel="noopener"
        >
          <ListItemText
            style={{ textAlign: "center" }}
            primary="ListItem"
            secondary="Jfidfj"
          />
        </ListItem>
      </List>
    </div>
  );
}
