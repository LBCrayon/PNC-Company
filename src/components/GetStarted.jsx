
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Title from "./Title";

const GetStarted = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  // Set visibility to true when in view
  if (inView && !isVisible) {
    setIsVisible(true);
  }

  return (
    <Stack
    container
    ref={ref}
    sx={{
      opacity: isVisible ? 1 : 0, // Set opacity based on visibility
      transition: "opacity 1s", // Add a smooth transition effect
      py: 20,
      backgroundImage: `url(${"https://www.ibs.com.vn/wp-content/uploads/2020/03/Group-7757-min.png"})`,
      backgroundSize: "cover",
    }}
    direction="row"
    divider={<Divider orientation="vertical" flexItem />}
    spacing={2}
    justifyContent="center"
    alignItems="center"
  >
      <Box
        component="article"
        sx={{
          px: 4,
          color:"white",
        }}
      >
        <Title text={"Lĩnh vực kinh doanh"} textAlign={"start"} />
      </Box>
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
            color: "orange",
            marginBottom: 1, // Add margin at the bottom
          }}
        />
        <Typography variant="h6" component="h5" color="white">
          Lĩnh vực 1
        </Typography>
      </Box>
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
            color: "orange",
            marginBottom: 1, // Add margin at the bottom
          }}
        />
        <Typography variant="h6" component="h5" color="white">
          Lĩnh vực 1
        </Typography>
      </Box>
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
            color: "orange",
            marginBottom: 1, // Add margin at the bottom
          }}
        />
        <Typography variant="h6" component="h5" color="white">
          Lĩnh vực 1
        </Typography>
      </Box>
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
            color: "orange",
            marginBottom: 1, // Add margin at the bottom
          }}
        />
        <Typography variant="h6" component="h5" color="white">
          Lĩnh vực 1
        </Typography>
      </Box>
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
            color: "orange",
            marginBottom: 1, // Add margin at the bottom
          }}
        />
        <Typography variant="h6" component="h5" color="white">
          Lĩnh vực 1
        </Typography>
      </Box>
    </Stack>
    
  );
};

export default GetStarted;
