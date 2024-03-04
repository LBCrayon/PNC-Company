import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Stack } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
const useCounter = (target, interval) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, interval);

    if (count >= target) {
      clearInterval(countInterval);
    }

    return () => clearInterval(countInterval);
  }, [count, target, interval]);

  return count;
};

const CounterBox = ({ count }) => (
  <Box
    component="article"
    sx={{
      px: 4,
      textAlign: "center",
      width: "150px", // Set a fixed width for CounterBox
    }}
  >
    <Typography
      variant="h1"
      component="h2"
      color="black"
      sx={{ fontSize: "60px", fontWeight: "bold" }}
    >
      {count}+
    </Typography>
  </Box>
);

const GetStarted2 = () => {
  const customer = 500;
  const project = 300;
  const staff = 800;
  const device = 140;

  // Chọn một thời gian cập nhật chung cho tất cả các bộ đếm để chúng kết thúc đồng thời
  const commonUpdateInterval = 1000; // 1 giây

  // Tính toán bước nhảy dựa trên thời gian cập nhật cho mỗi bộ đếm
  const customerCount = useCounter(
    customer,
    commonUpdateInterval / (customer / 3.5)
  );
  const projectCount = useCounter(
    project,
    commonUpdateInterval / (project / 5)
  );
  const staffCount = useCounter(staff, commonUpdateInterval / (staff / 0.0001));
  const deviceCount = useCounter(device, commonUpdateInterval / (device / 5.5));

  return (
    <>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5 }}
          >
            <Grid
              container
              sx={{
                py: 6,
                flexWrap: "nowrap",
              }}
              justifyContent="center"
              alignItems="center"
            >
              <Stack
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ marginX: 10 }}
              >
                <CounterBox count={customerCount} />
                <Grid container columns={16}>
                  <Grid item xs={6}>
                    <SupportAgentIcon
                      sx={{
                        fontSize: 50,
                        color: "orange",
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h5" component="h5">
                      Khách hàng
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
              <Stack
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ marginX: 10 }}
              >
                <CounterBox count={projectCount} />
                <Grid container columns={16}>
                  <Grid item xs={6}>
                    <SupportAgentIcon
                      sx={{
                        fontSize: 50,
                        color: "orange",
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h5" component="h5">
                      Dự án
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>

              <Stack
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ marginX: 10 }}
              >
                <CounterBox count={staffCount} />
                <Grid container columns={16}>
                  <Grid item xs={6}>
                    <SupportAgentIcon
                      sx={{
                        fontSize: 50,
                        color: "orange",
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h5" component="h5">
                      Nhân viên
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>

              <Stack spacing={2} justifyContent="center" alignItems="center">
                <CounterBox count={deviceCount} />
                <Grid container columns={16}>
                  <Grid item xs={6}>
                    <SupportAgentIcon
                      sx={{
                        fontSize: 50,
                        color: "orange",
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h5" component="h5">
                      Thiết bị
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </motion.div>
        )}
      </InView>
    </>
  );
};

export default GetStarted2;
