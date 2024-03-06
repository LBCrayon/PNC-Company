/* eslint-disable jsx-a11y/img-redundant-alt */
import { Grid, Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import Title from "./Title";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const ListNew = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const listnew = [
    {
      title: "GIẢI PHÁP PHỦ SÓNG DI ĐỘNG (IBS)",
      detail:
        "Do đặc tính cản trở và hấp thụ sóng cao tần của các vật liệu dung trong xây dựng tòa nhà, đặc biệt vật liệu nhẹ không nung, bê tông dẫn đến chất lượng sóng di động trong các tòa nhà cao trên 10 tầng rất yếu hoặc thậm chí không có. Các cuộc gọi thoại cơ bản dùng sóng 2G bị chập chờn, rớt hoặc không gọi được. thêm nữa, các nhu cầu dữ liệu của người dùng thông qua sóng 3G/4G phục vụ nhu cầu giải trí, tin tức như: mạng xã hội, video, âm nhạc, web, chia sẽ hình ảnh… không thể đáp ứng được.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2FLOGO%20-%20PNC%20-%20NEW.png?alt=media&token=1f635abc-15cb-4a83-bda0-f7b76c650309",
    },
    {
      title: "HỆ THỐNG AN NINH VÀO RA SỬ DỤNG THẺ (ACCS)",
      detail:
        "Là một trong những thành phần quan trọng nhất của ISS mang lại các lợi ích sau Bảo vệ tài sản: bằng cách quy định việc vào ra của nhân viên và khách.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2FLOGO%20-%20PNC%20-%20NEW.png?alt=media&token=1f635abc-15cb-4a83-bda0-f7b76c650309",
    },
    {
      title: "HỆ THỐNG CAMERA QUAN SÁT (CCTV)",
      detail:
        "Hệ thống Camera quan sát là một hệ thống giám sát từ xa với độ bảo mật cao. Mục đích chính của hệ thống Camera là dùng để giám sát, theo dõi ở những khu vực cần có sự bảo vệ như các cửa vào ra chính, các khu vực cầu thang và thang máy, các phòng máy chủ, một số phòng cần có độ bảo vệ an toàn cao như phòng lưu trữ, phòng đọc, phòng thiết bị... ngay cả khi không có nhân viên bảo vệ trực tiếp theo dõi.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2FLOGO%20-%20PNC%20-%20NEW.png?alt=media&token=1f635abc-15cb-4a83-bda0-f7b76c650309",
    },
    {
      title: "HỆ THỐNG BÁO ĐỘNG",
      detail:
        "Hệ thống báo động bao gồm bộ điều khiển trung tâm, các thiết bị truyền tín hiệu và cảm biến. Hệ thống có thể phát hiện các chuyển động không hợp lệ, các hành động xâm nhập vào khu vực cấm.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2FLOGO%20-%20PNC%20-%20NEW.png?alt=media&token=1f635abc-15cb-4a83-bda0-f7b76c650309",
    },
    {
      title: "GIẢI PHÁP KIỂM SOÁT PHÂN TẦNG THANG MÁY",
      detail:
        "Giải pháp kiểm soát phân tầng thang máy là hệ thống việc có sử dụng thang máy. Tại đây thang máy được kiểm soát với mức độ chặt chẽ và bảo mật cao. Để có thể sử dụng thang máy thì bắt buộc người dùng phải được phân quyền truy cập vào thang máy đó. Cụ thể là tại mỗi tầng nhất định nếu người dùng được phân quyền ra vào. Như vậy mới có thể di chuyển tại các tầng trong thang máy",
      image:
        "https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2FLOGO%20-%20PNC%20-%20NEW.png?alt=media&token=1f635abc-15cb-4a83-bda0-f7b76c650309",
    },

    {
      title: "HỆ THỐNG KIỂM SOÁT RA VÀO",
      detail:
        "Hệ thống kiểm soát ra vào được thiết lập nhằm mục đích kiểm soát sự ra vào ở các cửa theo một nguyên tắc xác lập trước, ngăn cản không cho những người không có quyền truy cập vào các khu vực hạn chế ra vào tòa nhà hoặc các khu vực nhạy cảm về mức độ an ninh. Các thành phần của hệ thống như đầu đọc thẻ, bộ điều khiển, barrier … được điều khiển bởi phần mềm trên máy tính.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2Fkiemsoatravao.png?alt=media&token=67e92f05-8df2-49fb-af0f-7fbacfbf2867",
    },

    {
      title: "HỆ THỐNG AN NINH TÍCH HỢP",
      detail:
        "Integrated Security System (ISS) là hệ thống an ninh tích hợp, được phát triển cho mục đích giám sát từ xa, điều khiển, an ninh nội bộ và vành đai, cũng như việc cung cấp giải pháp tích hợp cao với hệ thống Building Management System (BMS).",
      image:
        "https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2Fanninhtichhop.png?alt=media&token=e8a5a1a8-e4a9-4326-9497-93bcd655016c",
    },
    {
      title:
        "GIẢI PHÁP QUẢN LÝ HỆ THỐNG BÃI GIỮ XE THÔNG MINH BẰNG CÔNG NGHỆ THẺ TỪ",
      detail:
        "Giải pháp quản lý bãi giữ xe thông minh bằng công nghệ thẻ từ là một trong những giải pháp bãi đỗ xe cơ bản. Hệ thống đã được ứng dụng ở hầu hết các bãi đỗ xe khác nhau, mang lại hiệu quả cao cho quản lý ra vào tại bãi đỗ xe.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2Fbaixe.png?alt=media&token=9679dd9f-ebe0-4205-ad3f-932c9686fa8c",
    },
    {
      title: "HỆ THỐNG CÁP QUANG CUNG CẤP DỊCH VỤ INTERNET & TRUYỀN HÌNH CÁP",
      detail:
        "Hiện nay đối với các tòa nhà có cấu trúc hỗn hợp đa chức năng thì thường sử dụng 02 giải pháp mạng truy nhập cơ bản là mạng truy nhập tích cực AON và mạng truy nhập thụ động GPON.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2FGPON.png?alt=media&token=68a418f3-a345-49ed-9e76-b944e505dfb8",
    },
    {
      title: "HỆ THỐNG CHUÔNG CỬA CÓ HÌNH",
      detail:
        "Hệ thống đàm thoại chuông cửa có hình là hệ thống dùng để quản lý cuộc gọi thực hiện ở lối vào tòa nhà (Bên ngoài) đến căn hộ, biệt thự… (Bên trong) thông qua phương tiện giao tiếp là âm thanh và hình ảnh. Tính năng chính của hệ thống đàm thoại chuông cửa có hình là cho phép người bên trong nhà có thể xác định khách, và người trong nhà chỉ nói chuyện hay cho khách vào khi muốn điều đó.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2Fchuongcua.png?alt=media&token=c7f5dd3f-76d6-4f77-a7b8-c2d5b59a7e41",
    },
    {
      title: "HỆ THỐNG CAMERA QUAN SÁT",
      detail:
        "Hệ thống Camera quan sát là một hệ thống giám sát từ xa với độ bảo mật cao. Mục đích chính của hệ thống Camera là dùng để giám sát, theo dõi ở những khu vực cần có sự bảo vệ như trong thang máy, siêu thị, ngân hàng, điện lực, các công trình dân dụng, công nghiệp… ngay cả khi không có nhân viên bảo vệ theo dõi.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2Fcameraquansat.png?alt=media&token=9d86a7b1-1aff-4079-8f79-b2c2edd1ce6a",
    },
  ];
  const DetailTypography = styled(Typography)({
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    // Số dòng tối đa trước khi hiển thị dấu elipsis
    WebkitLineClamp: 3,
  });
  const TitleTypography = styled(Typography)({
    fontSize: "20px",
    fontWeight: 900,
    color: "#00a859",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    textOverflow: "ellipsis",
    // Số dòng tối đa trước khi hiển thị dấu elipsis
    WebkitLineClamp: 1,
  });
  return (
    <>
      <Box
        component="section"
        sx={{
          paddingBottom: 3,
          py: 4,
        }}
      >
        <Title text={"Tin Tức"} textAlign={"center"} />
      </Box>
      <Box
        sx={{
          py: 4,
          px: 32,
          display: { xs: "flex" },
          flexGrow: 1,
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {listnew.map((e) => (
            <Grid item xs={2} sm={4} md={4}>
              <Item>
                <img
                  alt={`Sample Image`}
                  src={e.image}
                  style={{
                    width: "100%",
                    height: "auto%",
                    objectFit: "cover",
                  }}
                />
                <TitleTypography>{e.title}</TitleTypography>
                <Typography color={"red"}>30 Tháng Sáu, 2021</Typography>
                <DetailTypography>{e.detail}</DetailTypography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ListNew;
