/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Stack, Box, Grid, Typography } from "@mui/material";

const ListProject = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const renderGridItem = (index, src, xsSize, title, additionalText) => (
    <Grid
      item
      xs={xsSize}
      onMouseOver={() => handleMouseOver(index)}
      onMouseOut={handleMouseOut}
      style={{
        transition: "transform 0.3s ease-in-out",
        transform: hoveredIndex === index ? "scale(1.2)" : "scale(1)",
        zIndex: hoveredIndex === index ? 1 : 0,
      }}
    >
      <img
        alt={`Sample Image ${index + 1}`}
        src={src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Typography
        variant="caption"
        component="div"
        style={{
          position: "absolute",
          top: 20,
          left: 50,
          color: "white", // text color
          fontSize: "18px    ",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="caption"
        component="div"
        style={{
          position: "absolute",
          top: 50,
          left: 50,
          color: "#fff", // text color
          fontSize: "16px    ",
        }}
      >
        {additionalText}
      </Typography>
    </Grid>
  );

  return (
    <Stack
      spacing={2}
      px={36}
      justifyContent="center"
      alignItems="center"
      pt={2}
      pb={12}
    >
      <Box>
        <Grid container spacing={2}>
          {renderGridItem(
            0,
            "https://www.ibs.com.vn/wp-content/uploads/2020/03/Summit-Building.jpg",
            4,
            "SUMMIT BULDING",
            "P. Phú Thuận, Quận 2, Thành Phố Hồ Chí Minh"
          )}
          {renderGridItem(
            1,
            "https://www.ibs.com.vn/wp-content/uploads/2020/03/image-023.jpg",
            8,
            "CHUNG CƯ DLC",
            "P. Phú Thuận, Quận 2, Thành Phố Hồ Chí Minh"
          )}
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {renderGridItem(
            2,
            "https://www.ibs.com.vn/wp-content/uploads/2020/04/%C4%90i%E1%BB%87n-gi%C3%B3.5-2.jpg",
            12,
            "SUMMIT BULDING",
            "P. Phú Thuận, Quận 2, Thành Phố Hồ Chí Minh"
          )}
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {renderGridItem(
            3,
            "https://www.ibs.com.vn/wp-content/uploads/2020/03/Vietnam-National-Assembly-House-1.jpg",
            6,
            "SUMMIT BULDING",
            "P. Phú Thuận, Quận 2, Thành Phố Hồ Chí Minh"
          )}
          {renderGridItem(
            4,
            "https://www.ibs.com.vn/wp-content/uploads/2020/03/20170505171741_Nh%C3%A0-m%C3%A1y-%C4%90i%E1%BB%87n-C%C3%A0-Mau-1-scaled.jpg",
            6,
            "SUMMIT BULDING",
            "P. Phú Thuận, Quận 2, Thành Phố Hồ Chí Minh"
          )}
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {renderGridItem(
            5,
            "https://www.ibs.com.vn/wp-content/uploads/2020/03/Sawaco.jpg",
            2,
            "SUMMIT BULDING"
          )}
          {renderGridItem(
            6,
            "https://www.ibs.com.vn/wp-content/uploads/2020/03/Toa-nha-bo-tai-nguyen-moi-truong-1-1-1536x1152.jpg",
            10,
            "SUMMIT BULDING",
            "P. Phú Thuận, Quận 2, Thành Phố Hồ Chí Minh"
          )}
        </Grid>
      </Box>
    </Stack>
  );
};

export default ListProject;
