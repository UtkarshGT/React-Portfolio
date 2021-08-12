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
    <div>
      <Typography variant="h5" align="center">
        Projects
      </Typography>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">March-2020</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Eat</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">April-2020</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Code</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">May-2020</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Sleep</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
