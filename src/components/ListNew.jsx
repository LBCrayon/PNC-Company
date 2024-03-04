/* eslint-disable jsx-a11y/img-redundant-alt */
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
const ListNew = () => {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      justifyContent="center"
      alignItems="center"
      px={20}
      py={10}
      pb={20}
    >
      <Grid item xs={12} sm={6} md={4} sx={{ width: "100px", height: "300px" }}>
        <img
          alt={`Sample Image`}
          src={
            "https://www.ibs.com.vn/wp-content/uploads/2020/03/image-023.jpg"
          }
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Typography>
          IBS lắp đặt 12 tuabin 4.0MW dự án điện gió Liên Lập
        </Typography>
        <Typography>30 Tháng Sáu, 2021</Typography>
        <Typography>
          Năm 2020, Công ty IBS đã ký Hợp đồng thực hiện lắp đặt 12 tuabin 4.0MW
          dự án Điện gió Liên Lập với Tập đoàn
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{ width: "100px", height: "300px" }}>
        <img
          alt={`Sample Image`}
          src={
            "https://www.ibs.com.vn/wp-content/uploads/2020/03/image-023.jpg"
          }
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Typography>
          IBS lắp đặt 12 tuabin 4.0MW dự án điện gió Liên Lập
        </Typography>
        <Typography>30 Tháng Sáu, 2021</Typography>
        <Typography>
          Năm 2020, Công ty IBS đã ký Hợp đồng thực hiện lắp đặt 12 tuabin 4.0MW
          dự án Điện gió Liên Lập với Tập đoàn
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{ width: "100px", height: "300px" }}>
        <img
          alt={`Sample Image`}
          src={
            "https://www.ibs.com.vn/wp-content/uploads/2020/03/image-023.jpg"
          }
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Typography>
          IBS lắp đặt 12 tuabin 4.0MW dự án điện gió Liên Lập
        </Typography>
        <Typography>30 Tháng Sáu, 2021</Typography>
        <Typography>
          Năm 2020, Công ty IBS đã ký Hợp đồng thực hiện lắp đặt 12 tuabin 4.0MW
          dự án Điện gió Liên Lập với Tập đoàn
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ListNew;
