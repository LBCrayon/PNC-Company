import { Box, Button, Grid, Stack, Typography, styled } from "@mui/material";
import React from "react";
// img
import { Link } from "react-router-dom";
import imgDetail from "../assets/pexels-alex-staudinger-1732414.jpg";
import imgDetail2 from "../assets/pexels-pixabay-271816.jpg";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
const AboutUs = () => {
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
                  Thành lập vào năm 2009, cho đến nay Công ty đã thực hiện rất
                  nhiều công trình trên khắp khu vực Miền Nam, trong đó có nhiều
                  công trình nổi tiếng và mang tầm vóc lớn nhất Việt Nam. <br />
                  Công ty Phương Nam luôn đảm bảo tính hiệu quả trong các dự án
                  hợp tác đầu tư hạ tầng viễn thông, luôn đảm bảo tiến độ công
                  trình, chất lượng và giá cả hợp lý trong các dự án cung cấp
                  giải pháp an ninh tích hợp hệ thống.
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
                      <Typography variant="h5" component="h4" color="#00a859">
                        Phương châm
                      </Typography>
                      <Typography
                        color="white"
                        sx={{ fontSize: "16px", textAlign: "justify" }}
                      >
                        Hợp tác đầu tư với tiêu chí các bên cùng có lợi. Là cầu
                        nối quan trọng giữa các nhà cung cấp dịch vụ & sản phẩm
                        với người sử dụng. Sự hài lòng của khách hàngHợp tác &
                        Cung cấp giải pháp với chất lượng cao...
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
                      <Typography variant="h5" component="h4" color="#00a859">
                        Sứ mệnh
                      </Typography>
                      <Typography
                        color="white"
                        sx={{ fontSize: "16px", textAlign: "justify" }}
                      >
                        Mang lại lợi ích tối đa cho khách hàng, cổ đông, người
                        lao động và cộng đồng. Hướng tới một PHƯƠNG NAM phát
                        triển, ổn định, thịnh vượng và nhân văn, đề cao tính
                        chuyên nghiệp, sáng tạo và không ngừng đổi...
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
                      <Typography variant="h5" component="h4" color="#00a859">
                        Mục tiêu
                      </Typography>
                      <Typography
                        color="white"
                        sx={{ fontSize: "16px", textAlign: "justify" }}
                      >
                        Hướng đến một PHƯƠNG NAM phát triển ổn định, thịnh vượng
                        và nhân văn, đề cao tính chuyên nghiệp, sáng tạo và
                        không ngừng đổi mới, đi đầu trong các lĩnh vực hoạt động
                        kinh doanh...
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
          src={"https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2FPNC%20Office.png?alt=media&token=f6505cd5-497d-4aad-8efc-7ca0a7213844"}
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
          src={"https://thenaynhe.com/wp-content/uploads/2019/12/yeu-to-de-hop-tac-thanh-cong-240.jpg"}
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
                <Typography variant="h3" component="h4" color="#00a859">
                  Yếu tố tạo nên thành công
                </Typography>
                <CustomTypography>
                  <span style={{ color: "#00a859", fontSize: "30px" }}>
                    Con người tạo nên sức mạnh
                  </span>
                  <br />
                  Đối với PHƯƠNG NAM, thu hút và giữ chân nhân sự giỏi là việc
                  hết sức quan trọng và ưu tiên hàng đầu của chúng tôi. Ngoài
                  các chính sách lương, thưởng rõ ràng, công ty còn trao cho cơ
                  hội đào tạo và thăng tiến, những lợi ích dành cho nhân sự cấp
                  cao. Và quan trọng là xây dựng được văn hóa, bản sắc riêng của
                  công ty nhằm xây dựng đội ngũ nhân sự gắn bó và cam kết lâu
                  dài với PHƯƠNG NAM
                </CustomTypography>
                <CustomTypography>
                  <span style={{ color: "#00a859", fontSize: "30px" }}>
                    Quy trình hoạt động chặt chẽ
                  </span>
                  <br />
                  Hệ thống quy trình hoạt động theo mô hình quốc tế để đảm bảo
                  cho sự vận hành của PHƯƠNG NAM được thống nhất xuyên suốt,
                  giúp nâng cao hiệu quả trong công việc cũng như chất lượng
                  dịch vụ cho khách hàng
                </CustomTypography>
                <CustomTypography>
                  <span style={{ color: "#00a859", fontSize: "30px" }}>
                    Tài chính – Nội lực ổn định
                  </span>
                  <br />
                  Các kết quả hoạt động kinh doanh& đầu tư của PHƯƠNG NAM trong
                  nhiều năm qua là một minh chứng để đạt được sự tín nhiệm của
                  các cổ đông, cũng như các tổ chức tài chính, ngân hàng trong
                  và ngoài nước. Có sự hỗ trợ dồi dào về tài chính PHƯƠNG NAM
                  hoàn toàn tự tin xây dựng & phát triển công ty lên tầm cao
                </CustomTypography>
              </motion.div>
            )}
          </InView>
        </Box>
      </CustomGridItem>
    </Grid>
  );
};

export default AboutUs;
