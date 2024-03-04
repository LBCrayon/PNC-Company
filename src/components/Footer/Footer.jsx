/* eslint-disable jsx-a11y/alt-text */
import { Grid, Stack, Typography, Divider, Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Stack
        sx={{
          pb: 12,
          px: 32,
          backgroundColor: "#00235a",
          color: "white",
        }}
      >
        <Stack spacing={2} mb={4}>
          <Box>
            <img
              height={"160px"}
              width={"160px"}
              src="https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2FLOGO%20-%20PNC%20-%20NEW.png?alt=media&token=1f635abc-15cb-4a83-bda0-f7b76c650309"
            />
          </Box>
          <Divider
            sx={{ height: "0.5px", width: "250px", backgroundColor: "#fff" }}
          />
          <Typography variant="h2" fontSize={"24px"} fontWeight={900}>
            CÔNG TY TNHH XÂY LẮP KỸ THUẬT PHƯƠNG NAM{" "}
          </Typography>{" "}
        </Stack>
        <Grid container spacing={12} columns={16}>
          <Grid item xs={8} spacing={2}>
            <Typography variant="h4" fontSize={"20px"} my={2}>
              Văn phòng Hồ Chí Minh
            </Typography>{" "}
            <Divider
              sx={{ height: "0.5px", width: "550px", backgroundColor: "#fff" }}
            />
            <Typography fontSize={"14px"} mt={1}>
              Địa chỉ: C33 – C34, Tầng 3, Homyland Riverside, 403A Nguyễn Duy
              Trinh, P.Bình Trưng Tây, Q.2, TP HCM
            </Typography>{" "}
            <Typography fontSize={"14px"} mt={1}>
              Điện thoại: (028) 3620 3737
            </Typography>{" "}
            <Typography fontSize={"14px"} mt={1}>
              Fax: (028) 3620 3737
            </Typography>{" "}
            <Typography fontSize={"14px"} mt={1}>
              Hotline: 0941 674 678
            </Typography>{" "}
            <Typography fontSize={"14px"} mt={1}>
              Email: pnc@kythuatphuongnam.com
            </Typography>{" "}
          </Grid>
          <Grid item xs={8} spacing={2}>
            <Typography variant="h4" fontSize={"20px"} my={2}>
              Văn phòng Hà Nội
            </Typography>{" "}
            <Divider
              sx={{ height: "0.5px", width: "550px", backgroundColor: "#fff" }}
            />
            <Typography fontSize={"14px"} mt={1}>
              Địa chỉ: C33 – C34, Tầng 3, Homyland Riverside, 403A Nguyễn Duy
              Trinh, P.Bình Trưng Tây, Q.2, TP HCM
            </Typography>{" "}
            <Typography fontSize={"14px"} mt={1}>
              Điện thoại: (028) 3620 3737
            </Typography>{" "}
            <Typography fontSize={"14px"} mt={1}>
              Fax: (028) 3620 3737
            </Typography>{" "}
            <Typography fontSize={"14px"} mt={1}>
              Hotline: 0941 674 678
            </Typography>{" "}
            <Typography fontSize={"14px"} mt={1}>
              Email: pnc@kythuatphuongnam.com
            </Typography>{" "}
          </Grid>
        </Grid>
      </Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "#00235a",
          color: "white",
        }}
      >
        <Divider
          sx={{ height: "0.5px", width: "100%", backgroundColor: "#fff" }}
        />
        <Typography fontSize={"14px"}>
          Copyright © 2024 PNC. All Rights Reserved
        </Typography>{" "}
      </Stack>
    </>
  );
};

export default Footer;
