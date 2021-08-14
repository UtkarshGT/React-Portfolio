import "./Intro.css";
import ProjectsData from "../content/ProjectsData";

import { Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from "@material-ui/lab";

export default function Projects() {
  return (
    <div className="m-b-s">
      <div className="subheader use-font center-text m-b-xs">Projects</div>
      <Timeline>
        {ProjectsData.map((value, index) => {
          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <Typography className="ubuntu-font" color="textSecondary">
                  {value.date}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography className="ubuntu-font">{value.name}</Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
}
