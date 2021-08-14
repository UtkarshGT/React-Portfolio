import "./Intro.css";
import CertsData from "../content/CertsData";

import { List, ListItem, ListItemText } from "@material-ui/core";

export default function Certs() {
  return (
    <div className="m-b-s">
      <div className="subheader use-font center-text m-b-xs">
        Certifications
      </div>
      <List>
        {CertsData.map((value, index) => {
          return (
            <ListItem key={index}>
              <ListItemText
                className="center-text"
                primary={value.name}
                secondary={value.description}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
