import { Grid, Stack, TextField, Typography, styled } from "@mui/material";
import React from "react";
// img
const BeforeFooter = () => {
  const StackColumn = styled(Stack)(() => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    gap: 8,
    textAlign: "flex-start",
    width: "50%",
  }));
  return (
    <Grid container spacing={2} columns={16} pl={32} alignItems={"center"}>
      <Grid item xs={8}>
        <Stack>
          {" "}
          <TextField
            required
            id="standard-multiline-static"
            label="Họ và tên"
            multiline
            rows={4}
            variant="standard"
          />
          <TextField
            required
            id="standard-multiline-static"
            label="Email"
            multiline
            rows={4}
            variant="standard"
          />
          <TextField
            id="standard-multiline-static"
            label="Nội dung"
            multiline
            rows={4}
            variant="standard"
            sx={{ paddingTop: "100px" }}
          />
        </Stack>
      </Grid>
      <Grid item xs={8}>
        <Stack
          component="section"
          direction="column"
          justifyContent="center"
          alignItems="center" // Center the content horizontally
          spacing={4}
          container
          sx={{
            backgroundImage: `url("https://www.ibs.com.vn/wp-content/uploads/2020/03/Group-7757-4.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "70vh",
            width: "100%",
            display: "flex", // Enable flexbox for proper alignment
            flexDirection: "column", // Stack children vertically
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            fontWeight={"900"}
            fontSize={"30px"}
            pt={30}
            pl={4}
          >
            Hãy liên lạc với chúng tôi ngay trong hôm nay
          </Typography>
          <StackColumn textAlign="center">
            {/* Adjusting textAlign to center the text */}
            <Typography>P. Phú Thuận, Quận 2, Thành phố Hồ Chí Minh</Typography>
            <Typography>ĐT: (+842) 439 723 435</Typography>
            <Typography>Fax: (+842) 439 723 433</Typography>
            <Typography>Email: info@ibs.com.vn</Typography>
          </StackColumn>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default BeforeFooter;
