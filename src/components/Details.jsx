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
    color: "#00a859", // Change this to your desired color
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
        <Typography
          variant="h2"
          fontWeight={"900"}
          fontSize={"50px"}
          color={"#00a859"}
        >
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
              <Typography color={"#00a859"} variant="h5" fontWeight={"900"}>
                Trụ sở chính
              </Typography>
              <Typography>
                <span style={dotStyle}>•</span>
                Địa chỉ: C33 – C34, Tầng 3, Homyland Riverside, 403A Nguyễn Duy
                Trinh,P.Bình Trưng Tây, Q.2, TP HCM
              </Typography>
              <Typography>
                <span style={dotStyle}>•</span>Điện thoại: (028) 3620 3737
              </Typography>
              <Typography>
                <span style={dotStyle}>•</span>Fax: (028) 3620 3737
              </Typography>
              <Typography>
                <span style={dotStyle}>•</span>Hotline: 0941 674 678
              </Typography>
              <Typography>
                <span style={dotStyle}>•</span>Email:pnc@kythuatphuongnam.com
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2FPNC%20Office.png?alt=media&token=f6505cd5-497d-4aad-8efc-7ca0a7213844" // Replace with the actual path to your image
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
            <span style={dotStyle}>•</span>
            Địa chỉ: C33 – C34, Tầng 3, Homyland Riverside, 403A Nguyễn Duy
            Trinh,P.Bình Trưng Tây, Q.2, TP HCM
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Điện thoại: (028) 3620 3737
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Fax: (028) 3620 3737
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Hotline: 0941 674 678
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Email:pnc@kythuatphuongnam.com
          </Typography>
        </StackColumn>
        <StackColumn>
          <Typography variant="h5" fontWeight={"900"}>
            HÀ NỘI
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>
            Địa chỉ: C33 – C34, Tầng 3, Homyland Riverside, 403A Nguyễn Duy
            Trinh,P.Bình Trưng Tây, Q.2, TP HCM
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Điện thoại: (028) 3620 3737
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Fax: (028) 3620 3737
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Hotline: 0941 674 678
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Email:pnc@kythuatphuongnam.com
          </Typography>
        </StackColumn>
        <StackColumn>
          <Typography variant="h5" fontWeight={"900"}>
            VĂN PHÒNG ĐẠI DIỆN
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>
            Địa chỉ: C33 – C34, Tầng 3, Homyland Riverside, 403A Nguyễn Duy
            Trinh,P.Bình Trưng Tây, Q.2, TP HCM
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Điện thoại: (028) 3620 3737
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Fax: (028) 3620 3737
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Hotline: 0941 674 678
          </Typography>
          <Typography>
            <span style={dotStyle}>•</span>Email:pnc@kythuatphuongnam.com
          </Typography>
        </StackColumn>
      </Stack>
    </>
  );
};

export default Details;
