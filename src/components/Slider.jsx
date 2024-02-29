import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Slider = () => {
  return (
    <Stack
      direction="column"
      sx={{
        py: 6,
        px: 28,
      }}
      spacing={6}
    >
      {" "}
      <Typography variant="h6" component="h3" align="center" fontSize={"50px"}>
        CÁC ĐỐI TÁC
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <img
            alt="complex"
            src="https://www.ibs.com.vn/wp-content/uploads/2020/04/partners1.png" // replace this with your actual image URL
            style={{ width: "100%", height: "auto" }} // adjust the styles as needed
          />
        </Grid>
        <Grid item xs={6}>
          <img
            alt="complex"
            src="https://www.ibs.com.vn/wp-content/uploads/2020/04/partners1.png" // replace this with your actual image URL
            style={{ width: "100%", height: "auto" }} // adjust the styles as needed
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Slider;
