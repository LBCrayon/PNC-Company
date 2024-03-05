import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { InView } from "react-intersection-observer";
import Title from "./Title";
import BoltIcon from "@mui/icons-material/Bolt";
import CellTowerIcon from '@mui/icons-material/CellTower';
import PublicIcon from '@mui/icons-material/Public';
const GetStarted = () => {
  return (
    <>
      <Stack
        container
        sx={{
          py: 20,
          backgroundImage: `url(${"https://www.ibs.com.vn/wp-content/uploads/2020/03/Group-7757-min.png"})`,
          backgroundSize: "cover",
        }}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        Công
        ty
        TNHH
        Xây
        Lắp
        Kỹ
        Thuật
        Phương
        Nam
        justifyContent="center"
        alignItems="center"
      >
        {" "}
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: -100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5 }}
            >
              <Box
                component="article"
                sx={{
                  px: 4,
                  color: "white",
                }}
              >
                <Title text={"Lĩnh vực kinh doanh"} textAlign={"start"} />
              </Box>
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
              <Box
                component="article"
                sx={{
                  px: 4,
                  py: 2, // Add padding top and bottom
                  textAlign: "center", // Center the content
                  fontSize: "0.8rem", // Adjust the font size as needed
                }}
              >
                <CellTowerIcon
                  sx={{
                    fontSize: 50, // Adjust the icon size
                    color: "#00a859",
                    marginBottom: 1, // Add margin at the bottom
                  }}
                />
                <Typography variant="h6" component="h5" color="white">
                  Hợp tác đầu tư hạ tầng viễn thông
                </Typography>
              </Box>
            </motion.div>
          )}
        </InView>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: -100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2 }}
            >
              {" "}
              <Box
                component="article"
                sx={{
                  px: 4,
                  py: 2, // Add padding top and bottom
                  textAlign: "center", // Center the content
                  fontSize: "0.8rem", // Adjust the font size as needed
                }}
              >
                <BoltIcon
                  sx={{
                    fontSize: 50, // Adjust the icon size
                    color: "#00a859",
                    marginBottom: 1, // Add margin at the bottom
                  }}
                />
                <Typography variant="h6" component="h5" color="white">
                  Điện nhẹ
                </Typography>
              </Box>
            </motion.div>
          )}
        </InView>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: -100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 2.5 }}
            >
              {" "}
              <Box
                component="article"
                sx={{
                  px: 4,
                  py: 2, // Add padding top and bottom
                  textAlign: "center", // Center the content
                  fontSize: "0.8rem", // Adjust the font size as needed
                }}
              >
                <MapsHomeWorkOutlinedIcon
                  sx={{
                    fontSize: 50, // Adjust the icon size
                    color: "#00a859",
                    marginBottom: 1, // Add margin at the bottom
                  }}
                />
                <Typography variant="h6" component="h5" color="white">
                  Dịch vụ kỹ thuật mạng viễn thông
                </Typography>
              </Box>
            </motion.div>
          )}
        </InView>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: -100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 3 }}
            >
              <Box
                component="article"
                sx={{
                  px: 4,
                  py: 2, // Add padding top and bottom
                  textAlign: "center", // Center the content
                  fontSize: "0.8rem", // Adjust the font size as needed
                }}
              >
                <PublicIcon
                  sx={{
                    fontSize: 50, // Adjust the icon size
                    color: "#00a859",
                    marginBottom: 1, // Add margin at the bottom
                  }}
                />
                <Typography variant="h6" component="h5" color="white">
                  Thương mại quốc tế
                </Typography>
              </Box>
            </motion.div>
          )}
        </InView>
      </Stack>
    </>
  );
};

export default GetStarted;
