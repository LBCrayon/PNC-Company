import React, { useEffect, useState } from "react";
// mui
import { Box, Grid, Stack, Typography } from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
  const year = 14;
  const staff = 800;
  const project = 300;
  const asset = 1000;
  const partner = 30;
  const company = 6;

  const yearCount = useCounter(year, 3);
  const staffCount = useCounter(staff, 3);
  const projectCount = useCounter(project, 3);
  const assetCount = useCounter(asset, 3);
  const partnerCount = useCounter(partner, 3);
  const companyCount = useCounter(company, 3);
  const counterItems = [
    { label: "YRS", count: yearCount, text: "TỪ 2006" },
    { label: "", count: projectCount, text: "DỰ ÁN" },
    { label: "BIL", count: assetCount, text: "TỔNG TÀI SẢN TRONG NĂM 2019" },
    { label: "", count: staffCount, text: "NHÂN SỰ" },
    { label: "", count: partnerCount, text: "ĐỐI TÁC TOÀN CẦU" },
    { label: "", count: companyCount, text: "CÔNG TY THÀNH VIÊN" },
  ];
  const outlinedTextStyle = {
    textShadow: "1px 1px 5px orange", // Hiệu ứng viền màu cam
  };

  return (
    <Stack
      direction="column"
      sx={{
        backgroundImage: `url("https://www.ibs.com.vn/wp-content/uploads/2020/03/Group-7757-2.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center", // Để giữ nền ảnh ở giữa trang
        height: "60vh", // Set chiều cao bằng 100% của viewport
        py: 6,
        px: 28,
        display: { xs: "flex" },
      }}
      spacing={6}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography
            variant="h5"
            component="h5"
            sx={{
              pb: 2,
              fontWeight: 400,
              color: "#1e2a5a",
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
              fontSize: "16px",
              textAlign: "justify",
            }}
          >
            {" "}
            Công ty Cổ phần Xây dựng Công nghiệp Dịch vụ Việt Nam (IBS) tiền
            thân là Công ty Cổ phần Giải pháp Tòa nhà Thông minh, được thành lập
            năm 2006. Chúng tôi chuyên thiết kế, cung cấp, xây dựng, lắp đặt cho
            các dự án dân dụng và công nghiệp; sản xuất và lắp đặt các thiết bị
            cơ khí, bể chứa, đường ống cao áp cho các nhà máy công nghiệp; cung
            cấp các giải pháp tự động hóa, giải pháp năng lượng mới, năng lượng
            tái tạo, giải pháp tiết kiệm năng lượng; dịch vụ quản lý và vận
            hành; xây dựng mới và sửa chữa tàu lên tới 10.000 dwt và dịch vụ
            cảng; cung cấp thiết bị điều khiển, thiết bị chiếu sáng, hệ thống
            bảo vệ, camera giám sát, thiết bị phòng cháy chữa cháy, vv (IBS là
            đối tác phân phối cho các sản phẩm của những thương hiệu hàng đầu
            thế giới như Honeywell, ABB, Tyco, Lefa).
            <br />
            IBS sở hữu hệ thống 2 văn phòng nội địa (Hà Nội, Hồ Chí Minh) và
            hoạt động tại các thị trường quốc tế bao gồm Singapore và Campuchia.
            <br />
            IBS là tổng thầu EPC Việt Nam đầu tiên có khả năng triển khai toàn
            bộ phạm vi EPC từ thiết kế kỹ thuật, mua sắm, lắp đặt, và vận hành
            nhà máy điện gió quy mô lớn nhất Đông Nam Á tại thời điểm trúng
            thầu. Điều đó đánh dấu sự kỳ vọng cho sự phát triển và cam kết của
            IBS với hàng loạt các dự án trong lĩnh vực năng lượng tái tạo dự
            kiến sẽ được thực hiện trong tương lai gần.
          </Typography>
        </Grid>
        <Grid item xs={6}>
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
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Gallery;
