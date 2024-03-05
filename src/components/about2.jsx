import { Box, Button, Grid, Stack, Typography, styled } from "@mui/material";
import React from "react";
// img
import { Link } from "react-router-dom";
import imgDetail from "../assets/pexels-alex-staudinger-1732414.jpg";
import imgDetail2 from "../assets/pexels-pixabay-271816.jpg";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
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
    lineHeight: "1.5",
    color: "white",
    marginTop: "1.5rem",
    textAlign: "justify",
  });

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        pt: 5,
      }}
    >
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: -100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5 }}
              >
                {" "}
                <Typography variant="h3" component="h4" color="#00a859">
                  Về PNC
                </Typography>
                <Typography variant="h5" component="h4" color="#00a859">
                  Công ty TNHH Xây Lắp Kỹ Thuật Phương Nam
                </Typography>
              </motion.div>
            )}
          </InView>

          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5 }}
              >
                <CustomTypography>
                  Công ty Phương Nam là công ty hàng đầu trong lĩnh vực hợp tác
                  đầu tư hạ tầng viễn thông, một trong những công ty tư vấn,
                  cung cấp giải pháp an ninh tích hợp hệ thống cho các công
                  trình thương mại, công nghiệp, dân dụng và cơ sở hạ tầng.{" "}
                  <br />
                  <br />
                  Thành lập vào năm 2009, cho đến nay Công ty đã thực hiện rất
                  nhiều công trình trên khắp khu vực Miền Nam, trong đó có nhiều
                  công trình nổi tiếng và mang tầm vóc lớn nhất Việt Nam. <br />
                  <br /> <br />
                  <br /> Công ty Phương Nam luôn đảm bảo tính hiệu quả trong các
                  dự án hợp tác đầu tư hạ tầng viễn thông, luôn đảm bảo tiến độ
                  công trình, chất lượng và giá cả hợp lý trong các dự án cung
                  cấp giải pháp an ninh tích hợp hệ thống.
                </CustomTypography>
              </motion.div>
            )}
          </InView>

          <Stack sx={{ pt: "20px" }} direction="row" spacing={2}>
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
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      initial={{ opacity: 0, x: -100 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 1.5 }}
                    >
                      {" "}
                      <Typography variant="h6" component="h5" color="#00a859">
                        Tầm nhìn
                      </Typography>
                      <Typography
                        color="white"
                        sx={{ fontSize: "16px", textAlign: "justify" }}
                      >
                        Trở thành đối tác kỹ thuật hàng đầu trong lĩnh vực xây
                        dựng và dịch vụ cho các dự án Công nghiệp và Xây dựng
                        Dân dụng.
                      </Typography>
                    </motion.div>
                  )}
                </InView>
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
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      initial={{ opacity: 0, y: 100 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 1.5 }}
                    >
                      <Typography variant="h6" component="h5" color="#00a859">
                        Sứ mệnh
                      </Typography>
                      <Typography
                        color="white"
                        sx={{ fontSize: "16px", textAlign: "justify" }}
                      >
                        Trở thành doanh nghiệp trụ cột, đóng góp lớn vào sự tăng
                        trưởng và phát triển của nền kinh tế đất nước.
                      </Typography>
                    </motion.div>
                  )}
                </InView>
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
                <InView triggerOnce>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      initial={{ opacity: 0, x: 100 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 1.5 }}
                    >
                      <Typography variant="h6" component="h5" color="#00a859">
                        Giá trị cốt lõi
                      </Typography>
                      <Typography
                        color="white"
                        sx={{ fontSize: "16px", textAlign: "justify" }}
                      >
                        Năng lực chuyên môn của một tổng thầu EPC trong các dự
                        án dân dụng và công nghiệp ở mọi lĩnh vực và quy mô.
                      </Typography>
                    </motion.div>
                  )}
                </InView>
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
            to={"/about"}
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
                color: "#00a859",
                borderColor: "#00a859",
              },
              "&&:focus": {
                color: "#00a859",
                borderColor: "#00a859",
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
      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}
      >
        <img
          src={"https://vietnam.atalink.com/blog/wp-content/uploads/2022/11/Tieu_Chi_Danh_Gia_Nha_Cung_Cap.png"}
          alt=""
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Grid>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            px: 6,
          }}
        >
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: -100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5 }}
              >
                <Typography variant="h5" component="h5" color="#00a859">
                  {" "}
                  Chúng tôi làm việc với phương châm <br/>
                  <span style={{ color: "white", fontWeight: "700" }}>
                    UY TÍN, CHẤT LƯỢNG, TIN CẬY, ĐÚNG HẠN
                  </span>
                </Typography>
              </motion.div>
            )}
          </InView>
        </Box>
      </CustomGridItem>
    </Grid>
  );
};

export default AboutUs2;
