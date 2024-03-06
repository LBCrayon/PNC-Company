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
        height: "50vh",
        width: "100%",
        display: "flex", // Enable flexbox for proper alignment
        flexDirection: "column", // Stack children vertically
        color: "white",
      }}
    >
      <StackColumn textAlign="center">
        <Typography variant="h2" fontWeight={"900"} fontSize={"30px"} pt={20}>
        Rất hy vọng sẽ có cơ hội hợp tác với quý đối tác!
        </Typography>
        {/* Adjusting textAlign to center the text */}
        <Typography>
          Trụ sở: C33 – C34, Tầng 3, Homyland Riverside, 403A Nguyễn Duy Trinh,P.Bình
          Trưng Tây, Q.2, TP HCM
        </Typography>
        <Typography>ĐT: (028) 3620 3737</Typography>
        <Typography>Fax: (028) 3620 3737</Typography>
        <Typography>Email: pnc@kythuatphuongnam.com</Typography>
      </StackColumn>
    </Stack>
  );
};

export default BeforeFooter;
