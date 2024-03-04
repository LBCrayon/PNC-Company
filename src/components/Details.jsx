/* eslint-disable jsx-a11y/img-redundant-alt */
import { Stack, Typography, styled, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import Title from "./Title";
const Details = () => {
  const StackColumn = styled(Stack)(() => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    gap: 8,
    textAlign: "flex-start",
    width: "50%",
  }));
  const dotStyle = {
    color: "orange", // Change this to your desired color
    marginRight: "8px", // Adjust the margin as needed
  };
  return (
    <>
      <Stack
        component="section"
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          py: 6,
          px: 40,
        }}
        spacing={4}
      >
        <Typography variant="h2" fontWeight={"900"} fontSize={"50px"}>
          THÔNG TIN CÔNG TY VÀ LIÊN HỆ
        </Typography>
        <Divider sx={{ my: 2, width: "100%", backgroundColor: "black" }} />{" "}
        <StackColumn>
          <Grid
            justifyContent="center"
            alignItems="center"
            container
            spacing={2}
            columns={16}
          >
            <Grid item xs={8}>
              <Title text={"Trụ sở chính"} />
              <Typography>
                <span style={dotStyle}>•</span>
                Địa chỉ: P. Phú Thuận, Quận 2, Thành phố Hồ Chí Minh
              </Typography>
              <Typography>
                <span style={dotStyle}>•</span>Điện thoại: 0909090909
              </Typography>
              <Typography>
                <span style={dotStyle}>•</span>Fax: 0909090909
              </Typography>
              <Typography>
                <span style={dotStyle}>•</span>Email: lebao.dev@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <img
                src="https://cdn.luatvietnam.vn/uploaded/Images/Original/2023/04/27/tru-so-chinh-la-gi_2704092955.jpg" // Replace with the actual path to your image
                alt="Company Image"
                style={{ maxWidth: "305%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </StackColumn>
        <Divider sx={{ my: 2, width: "100%", backgroundColor: "black" }} />{" "}
      </Stack>
      <Stack
        component="section"
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          pb: 12,
          px: 40,
        }}
        spacing={1}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <StackColumn>
          <Typography variant="h5" fontWeight={"900"}>
            HỒ CHÍ MINH
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span> Địa chỉ: P. Phú Thuận, Quận 2, Thành
            phố Hồ Chí Minh
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Điện thoại: 0909090909
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Fax: 0909090909
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Email: lebao.dev@gmail.com
          </Typography>
        </StackColumn>
        <StackColumn>
          <Typography variant="h5" fontWeight={"900"}>
            HÀ NỘI
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span> Địa chỉ: P. Phú Thuận, Quận 2, Thành
            phố Hồ Chí Minh
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Điện thoại: 0909090909
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Fax: 0909090909
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Email: lebao.dev@gmail.com
          </Typography>
        </StackColumn>
        <StackColumn>
          <Typography variant="h5" fontWeight={"900"}>
            VĂN PHÒNG ĐẠI DIỆN
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span> Địa chỉ: P. Phú Thuận, Quận 2, Thành
            phố Hồ Chí Minh
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Điện thoại: 0909090909
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Fax: 0909090909
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Email: lebao.dev@gmail.com
          </Typography>
        </StackColumn>
      </Stack>
    </>
  );
};

export default Details;
