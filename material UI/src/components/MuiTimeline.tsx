import {
  Timeline,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
} from "@mui/lab";

const MuiTimeline = () => {
  return (
    <Timeline
      position="alternate"
      //position="left"
    >
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          10:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City B</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          11:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined" />
          {/* <TimelineConnector /> */}
          {/* for the last timeline item don't need timelineConnector */}
        </TimelineSeparator>
        <TimelineContent>City C</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default MuiTimeline;
