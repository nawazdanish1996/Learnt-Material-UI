import React from 'react';
import {
  Stack,
  Typography,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/material";

function MuiTimeline() {
  return (
    <Stack>
      <Typography variant='h4'>Timeline</Typography>

      <Timeline>
        <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              City A
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              City B
            </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Stack>
  )
}

export default MuiTimeline