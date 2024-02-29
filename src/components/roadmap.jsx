import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

const CompanyHistory = () => {
  const historyData = [
    {
      year: "2014",
      event: "Current achievements",
      details:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      year: "2015",
      event: "Current achievements",
      details:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      year: "2016",
      event: "Current achievements",
      details:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      year: "2017",
      event: "Current achievements",
      details:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      year: "2018",
      event: "Current achievements",
      details:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      year: "2019",
      event: "",
      details:
        "",
    },
    {
      year: "2020",
      event: "Current achievements",
      details:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      year: "2022",
      event: "Current achievements",
      details:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      year: "2023",
      event: "Current achievements",
      details:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      year: "2024",
      event: "Current achievements",
      details:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <Container>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h6" component="h3" align="center" fontSize={"30px"}>
          Lịch sử thành lập công ty
        </Typography>
        <Timeline position="alternate">
          {historyData.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                {index < historyData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Box>
                  <Typography variant="h6">{event.year}</Typography>
                  <Typography>{event.event}</Typography>
                  <Typography>{event.details}</Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Paper>
    </Container>
  );
};

export default CompanyHistory;
