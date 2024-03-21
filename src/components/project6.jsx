/* eslint-disable jsx-a11y/img-redundant-alt */
import { Grid, Link, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import HeaderCustomer from "./HeaderCustomer";

const Projects6 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const renderGridItem = (
    index,
    src,
    xsSize,
    title,
    detail,
    address,
    investor,
    total,
    date
  ) => (
    <Grid
      height={"40vh"}
      item
      xs={xsSize}
      onMouseOver={() => handleMouseOver(index)}
      onMouseOut={handleMouseOut}
      style={{
        position: "relative",
        overflow: "hidden", // Ensures the text doesn't overflow the container
      }}
    >
      <img
        alt={`Sample Image ${index + 1}`}
        src={src}
        style={{
          width: "100%",
          height: "100%",
          transition: "opacity 0.2s ease-in-out",
          opacity: hoveredIndex === index ? 0.5 : 1,
          zIndex: hoveredIndex === index ? 1 : 0,
        }}
      />
      <Typography
        variant="caption"
        component="div"
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          color: "#fff", // text color
          fontSize: "24px    ",
        }}
      >
        {title}
      </Typography>

      {hoveredIndex === index && (
        <Paper
          elevation={3}
          style={{
            width: "90%",
            height: "auto",
            transition: "opacity 0.2s ease-in-out",
            zIndex: hoveredIndex === index ? 1 : 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            textAlign: "start",
          }}
        >
          <Typography>Dự án: {detail}</Typography>
          <Typography>Địa điểm: {address}</Typography>
          <Typography>Chủ đầu tư: {investor}</Typography>
          <Typography>Tổng mức đầu tư: {total}</Typography>
          <Typography>Thời điểm hoàn thành: {date}</Typography>
        </Paper>
      )}
    </Grid>
  );
  return (
    <>
      <HeaderCustomer />
      <Stack mx={30} justifyContent={"start"} spacing={2} mt={4}>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontWeight: 900,
            color: "#00a859",
            fontSize: "25px",
          }}
        >
          TRUNG TÂM THƯƠNG MẠI
        </Typography>
      </Stack>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="start"
        alignItems="center"
        px={30}
        py={6}
      >
        <Grid item xs={12} sm={6} md={6}>
          <Link href="/project6detail">
            {renderGridItem(
              0,
              "https://resviet.vn/wp-content/uploads/2021/01/phoi-canh-tttm-Gigamall-pham-van-dong-thu-duc-scaled.jpg",
              12,
              "Dự án Vincom Giga Mall",
              "Dự án Vincom Giga Mall",
              "Quận Bình Thạnh - Hồ Chí Minh",
              "Công ty CP Đầu tư Thương mại Dịch vụ Khang Gia Land",
              "",
              "2020"
            )}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Projects6;
