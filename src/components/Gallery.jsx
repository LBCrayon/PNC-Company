import React, { useEffect, useState } from "react";
// mui
import { Box, Grid, Stack, Typography } from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

// components
const useCounter = (target, interval) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, interval);

    if (count >= target) {
      clearInterval(countInterval);
    }

    return () => clearInterval(countInterval);
  }, [count, target, interval]);

  return count;
};

const CounterBox = ({ count, label, text }) => (
  <Box
    component="article"
    sx={{
      pt: 4,
      px: 4,
      textAlign: "center",
      width: "150px", // Set a fixed width for CounterBox
    }}
  >
    <Typography variant="h1" component="h2" color="white" fontSize={"60px"}>
      {count}+{label}
    </Typography>
    <Typography
      sx={{ whiteSpace: "nowrap", pt: "15px" }}
      variant="h4"
      fontSize={"20px"}
      color="#1e2a5a  "
    >
      {text}
    </Typography>
  </Box>
);

const Gallery = () => {
  const year = 15;
  const staff = 200;
  const project = 300;
  const partner = 24;

  const yearCount = useCounter(year, 3);
  const staffCount = useCounter(staff, 3);
  const projectCount = useCounter(project, 3);
  const partnerCount = useCounter(partner, 90);
  const counterItems = [
    { label: "YRS", count: yearCount, text: "TỪ 2009" },
    { label: "", count: projectCount, text: "DỰ ÁN" },
    { label: "", count: staffCount, text: "NHÂN SỰ" },
    { label: "", count: partnerCount, text: "ĐỐI TÁC" },
  ];
  const outlinedTextStyle = {
    textShadow: "1px 1px 5px #00a859", // Hiệu ứng viền màu cam
  };

  return (
    <Stack
      direction="column"
      sx={{
        backgroundImage: `url("https://www.ibs.com.vn/wp-content/uploads/2020/03/Group-7757-2.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center", // Để giữ nền ảnh ở giữa trang
        height: "70vh", // Set chiều cao bằng 100% của viewport
        py: 6,
        px: 28,
        display: { xs: "flex" },
      }}
      spacing={6}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: -100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5 }}
              >
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{
                    pb: 2,
                    fontWeight: 400,
                    color: "#00a859",
                    fontSize: "45px",
                    textAlign: "justify",
                  }}
                >
                  "GIỚI THIỆU PNC”
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#1e2a5a",
                    fontSize: "20px",
                    textAlign: "justify",
                  }}
                >
                  {" "}
                  CÔNG TY HÀNG ĐẦU VỀ HỢP TÁC ĐẦU TƯ HẠ TẦNG VIỄN THÔNG, TƯ VẤN,
                  CUNG CẤP GIẢI PHÁP AN NINH TÍCH HỢP HỆ THỐNG VÀ HỆ THỐNG ĐIỆN
                  NHẸ. <br /> <br /> Công ty Phương Nam là công ty hàng đầu
                  trong lĩnh vực hợp tác đầu tư hạ tầng viễn thông, một trong
                  những công ty tư vấn, cung cấp giải pháp an ninh tích hợp hệ
                  thống cho các công trình thương mại, công nghiệp, dân dụng và
                  cơ sở hạ tầng. <br /> <br /> Thành lập vào năm 2009, cho đến
                  nay Công ty đã thực hiện rất nhiều công trình trên khắp khu
                  vực Miền Nam, trong đó có nhiều công trình nổi tiếng và mang
                  tầm vóc lớn nhất Việt Nam. <br /> <br />
                  Công ty Phương Nam luôn đảm bảo tính hiệu quả trong các dự án
                  hợp tác đầu tư hạ tầng viễn thông, luôn đảm bảo tiến độ công
                  trình, chất lượng và giá cả hợp lý trong các dự án cung cấp
                  giải pháp an ninh tích hợp hệ thống.
                  <br />
                </Typography>
              </motion.div>
            )}
          </InView>
        </Grid>
        <Grid item xs={6}>
          <InView triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: -100 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.5 }}
              >
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  {counterItems.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6}>
                      <Typography variant="h6" style={outlinedTextStyle}>
                        <CounterBox
                          count={item.count}
                          label={item.label}
                          text={item.text}
                        />
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            )}
          </InView>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Gallery;
