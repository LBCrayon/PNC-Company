import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
const Slider = () => {
  return (
    <Stack
      direction="column"
      sx={{
        py: 2,
        px: 28,
      }}

    >
      {" "}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.5 }}
          >
            {" "}
            <Typography
              variant="h6"
              component="h3"
              align="center"
              fontSize={"50px"}
            >
              CÁC ĐỐI TÁC
            </Typography>
          </motion.div>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.5 }}
          >
            <Grid container alignItems={"center"} justifyContent={"center"}>
              <img
                alt="complex"
                src="https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2Fcontact.png?alt=media&token=59d4bd3e-0775-47aa-b872-5c2e8a8bca61" // replace this with your actual image URL
                style={{ width: "50%", height: "50%" }} // adjust the styles as needed
              />
            </Grid>
          </motion.div>
        )}
      </InView>
    </Stack>
  );
};

export default Slider;
