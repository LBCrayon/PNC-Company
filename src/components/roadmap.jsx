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
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
const CompanyHistory = () => {
  const historyData = [
    {
      year: "2009",
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
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.5 }}
            >
              {" "}
              <Typography
                variant="h6"
                component="h3"
                align="center"
                fontSize={"30px"}
              >
                Lịch sử thành lập công ty
              </Typography>
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: -100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5 }}
            >
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
            </motion.div>
          )}
        </InView>
      </Paper>
    </Container>
  );
};

export default CompanyHistory;
