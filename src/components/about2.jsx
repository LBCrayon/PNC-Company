import React from "react";
import {
  Box,
  Grid,
  styled,
  Typography,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import Title from "./Title";
// img
import imgDetail from "../assets/pexels-alex-staudinger-1732414.jpg";
import imgDetail2 from "../assets/pexels-pixabay-271816.jpg";
import { Link } from "react-router-dom";
const AboutUs2 = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#1e2a5a",
    height: "95vh",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "white",
    marginTop: "1.5rem",
  });

  return (
    <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}>
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Typography variant="h3" component="h4" color="orange">
            Về Phương Nam
          </Typography>
          <Typography variant="h5" component="h4" color="orange">
            Công ty TNHH Xây Lắp Kỹ Thuật Phương Nam
          </Typography>

          <CustomTypography>
            Công ty Cổ phần Xây dựng Công nghiệp Dịch vụ Việt Nam (IBS), tiền
            thân là Công ty CP giải pháp tòa nhà thông minh, được thành lập năm
            2006. Chúng tôi chuyên thiết kế, cung cấp, xây dựng, lắp đặt cho các
            dự án dân dụng và công nghiệp; sản xuất và lắp đặt các thiết bị cơ
            khí, bể chứa, đường ống cao áp cho các nhà máy công nghiệp; cung cấp
            các giải pháp tự động hóa, giải pháp năng lượng mới, năng lượng tái
            tạo, giải pháp tiết kiệm năng lượng; dịch vụ quản lý và vận hành;
            xây dựng mới và sửa chữa tàu lên tới 10.000 dwt và dịch vụ cảng;
            cung cấp thiết bị điều khiển, thiết bị chiếu sáng, hệ thống bảo vệ,
            camera giám sát, thiết bị phòng cháy chữa cháy, vv (IBS là đối tác
            phân phối cho các sản phẩm của những thương hiệu hàng đầu thế giới
            như Honeywell, ABB, Tyco, Lefa).
            <br />
            <br />
            BS là tổng thầu EPC Việt Nam đầu tiên có khả năng triển khai toàn bộ
            phạm vi EPC từ thiết kế kỹ thuật, mua sắm, lắp đặt, và vận hành nhà
            máy điện gió quy mô lớn nhất Đông Nam Á tại thời điểm trúng thầu.
          </CustomTypography>
          <Stack
            sx={{ pt: "20px" }}
            direction="row"
            spacing={2}
            // divider={
            //   <Divider
            //     orientation="vertical"
            //     flexItem
            //     sx={{
            //       backgroundColor: "white", // Set the background color to red
            //       border: "0.5px solid white", // Set the border to be 2px solid red
            //       pt: "100px",
            //     }}
            //   />
            // }
          >
            <Box
              component="article"
              sx={{
                pr: 6,
                py: 8, // Add padding top and bottom
                textAlign: "center", // Center the content
                fontSize: "0.8rem", // Adjust the font size as needed
              }}
            >
              <Stack spacing={2}>
                <Typography variant="h6" component="h5" color="white">
                  Tầm nhìn
                </Typography>
                <Typography color="white" sx={{ fontSize: "16px" }}>
                  Trở thành đối tác kỹ thuật hàng đầu trong lĩnh vực xây dựng và
                  dịch vụ cho các dự án Công nghiệp và Xây dựng Dân dụng
                </Typography>
              </Stack>
            </Box>
            <Box
              component="article"
              sx={{
                pr: 6,
                py: 8, // Add padding top and bottom
                textAlign: "center", // Center the content
                fontSize: "0.8rem", // Adjust the font size as needed
              }}
            >
              <Stack spacing={2}>
                <Typography variant="h6" component="h5" color="white">
                  Sứ mệnh
                </Typography>
                <Typography color="white" sx={{ fontSize: "16px" }}>
                  Trở thành doanh nghiệp trụ cột, đóng góp lớn vào sự tăng
                  trưởng và phát triển của nền kinh tế đất nước.
                </Typography>
              </Stack>
            </Box>
            <Box
              component="article"
              sx={{
                pr: 6,
                py: 8, // Add padding top and bottom
                textAlign: "center", // Center the content
                fontSize: "0.8rem", // Adjust the font size as needed
              }}
            >
              <Stack spacing={2}>
                <Typography variant="h6" component="h5" color="white">
                  Giá trị cốt lõi
                </Typography>
                <Typography color="white" sx={{ fontSize: "16px" }}>
                  Năng lực chuyên môn của một tổng thầu EPC trong các dự án dân
                  dụng và công nghiệp ở mọi lĩnh vực và quy mô.
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box
          component="article"
          sx={{
            px: 10,
          }}
        >
          <Button
            component={Link}
            to={"/aboutdetail"}
            variant="outlined"
            sx={{
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              color: "#fff",
              backgroundColor: "transparent",
              borderColor: "#fff",
              "&&:hover": {
                color: "orange",
                borderColor: "orange",
              },
              "&&:focus": {
                color: "orange",
                borderColor: "orange",
              },
            }}
          >
            Xem thêm
          </Button>
        </Box>
      </CustomGridItem>

      <Grid item xs={12} sm={4} md={6}>
        <img
          src={imgDetail}
          alt=""
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default AboutUs2;
