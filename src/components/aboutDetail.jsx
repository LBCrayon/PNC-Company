import { Grid, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";

// img
const AboutDetails = () => {
  return (
    <Stack
      container
      justifyContent="center"
      alignItems="center"
      sx={{ py: 6, px: 32 }}
    >
      <Box>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 900,
                color: "#1e2a5a",
                fontSize: "40px",
                py: 2,
              }}
            >
              GIỚI THIỆU VỀ PNC
            </Typography>
            <Typography
              textAlign={"justify"}
              sx={{
                fontSize: "18px",
                color:"grey"
              }}
            >
              Công ty Cổ phần Xây dựng Công nghiệp Dịch vụ Việt Nam (IBS) được
              thành lập năm 2006. Chúng tôi chuyên thiết kế, cung cấp, xây dựng,
              lắp đặt cho các dự án dân dụng và công nghiệp; sản xuất và lắp đặt
              các thiết bị cơ khí, bể chứa, đường ống cao áp cho các nhà máy
              công nghiệp; cung cấp các giải pháp tự động hóa, giải pháp năng
              lượng mới, năng lượng tái tạo, giải pháp tiết kiệm năng lượng;
              dịch vụ quản lý và vận hành; xây dựng mới và sửa chữa tàu lên tới
              10.000 dwt và dịch vụ cảng; cung cấp thiết bị điều khiển, thiết bị
              chiếu sáng, hệ thống bảo vệ, camera giám sát, thiết bị phòng cháy
              chữa cháy, vv (IBS là đối tác phân phối cho các sản phẩm của những
              thương hiệu hàng đầu thế giới như Honeywell, ABB, Tyco, Lefa). IBS
              sở hữu hệ thống 2 văn phòng nội địa (Hà Nội, Hồ Chí Minh) và hoạt
              động tại các thị trường quốc tế bao gồm Singapore và Campuchia. Là
              người tiên phong trong tự động hóa, IBS không ngừng nỗ lực để mang
              lại những công nghệ tiên tiến nhất cũng như nghiên cứu, phát triển
              và áp dụng những công nghệ này cho phù hợp với điều kiện hiện tại
              ở Việt Nam. Để đạt được điều này, nhiệm vụ chính của IBS là trở
              thành nhà tích hợp hệ thống tổng thể với các sản phẩm và dịch vụ
              giúp kéo dài tuổi thọ của dự án, tiết kiệm chi phí và cải thiện sự
              an toàn của tất cả các dự án – cho dù đó là nhà máy điện, bệnh
              viện, tòa nhà văn phòng, trung tâm mua sắm, căn hộ cao cấp hoặc
              thậm chí là nhà riêng của bạn. Từ năm 2015, IBS đã tham gia các dự
              án xây dựng dân dụng và công nghiệp. Chỉ sau một thời gian ngắn,
              IBS đã khẳng định vị thế và thương hiệu của mình bằng cách tham
              gia với tư cách là nhà thầu EPC của một loạt các dự án thuộc nhiều
              lĩnh vực khác nhau như xây dựng các tòa nhà cao tầng, nhà thầu EPC
              cho các dự án thép, khai thác khoáng sản và điện gió, v.v. IBS với
              năng lực toàn diện, đã thực hiện hơn 200 dự án lớn tại Việt Nam và
              trên thế giới.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 900,
                color: "#1e2a5a",
                fontSize: "40px",
                py: 2,
              }}
            >
              “CHÚNG TÔI LÀM VIỆC TRÊN QUY MÔ LỚN”
            </Typography>
            <Typography
              textAlign={"justify"}
              sx={{
                fontSize: "18px",
                color:"grey"
              }}
            >
              Năm 2016 chứng kiến những cột mốc lịch sử khi IBS trúng thầu cùng
              lúc 3 dự án có quy mô lớn và đầy thách thức: IBS trở thành Tổng
              Thầu EPC của công trình “Tòa nhà Summit” – được đánh giá là một
              trong những tòa nhà thông minh nhất Việt Nam khi hoàn thiện, với
              quy mô vốn đầu tư lên tới hơn 50 triệu USD. IBS cũng đồng thời
              được trao hợp đồng tổng thầu EPC cho dự án “Trang trại phong điện
              Tây Nguyên” – dự án thứ 4 và là dự án điện gió lớn nhất từng được
              xây dựng tại Việt Nam, sử dụng công nghệ và hệ thống tuabin tiên
              tiến nhất thế giới được cung cấp bởi GE, với tổng mức đầu tư cho
              toàn quy mô dự án lên tới 560 triệu USD. Bên cạnh đó, IBS cũng
              được tin tưởng trao vai trò Tổng thầu EPC cho dự án vốn ODA trọng
              điểm “Nâng cấp hệ thống cấp thoát nước thành phố HCM” (Sawaco),
              được tài trợ vốn bởi ngân hàng phát triển Châu Á (ADB) với tổng
              vốn đầu tư toàn dự án lên tới 150 triệu USD.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 900,
                color: "#1e2a5a",
                fontSize: "40px",
                py: 2,
              }}
            >
              {" "}
              “NĂNG LỰC CẠNH TRANH TOÀN DIỆN”
            </Typography>
            <Typography
              textAlign={"justify"}
              sx={{
                fontSize: "18px",
                color:"grey"
              }}
            >
              Cho tới thời điểm hiện tại, IBS vẫn là tổng thầu EPC Việt Nam đầu
              tiên có khả năng triển khai toàn bộ phạm vi EPC từ thiết kế kỹ
              thuật, mua sắm, lắp đặt, và vận hành nhà máy điện gió quy mô lớn
              nhất Đông Nam Á tại thời điểm trúng thầu. Điều đó đánh dấu sự kỳ
              vọng cho sự phát triển và cam kết của IBS với hàng loạt các dự án
              trong lĩnh vục năng lượng tái tạo dự kiến ​​sẽ được thực hiện
              trong tương lai gần. Bên cạnh đó, IBS là một công ty hàng đầu tại
              Việt Nam trong lĩnh vực cơ khí, đóng tàu và thiết bị siêu trường
              siêu trọng cho các dự án công nghiệp và xuất khẩu. IBS Lisemco đã
              xây dựng mối quan hệ hợp tác và hợp tác với hầu hết các công ty
              công nghiệp lớn của thế giới như GE, Siemens, Hyundai, Nippon,
              Thyssenkrupp, và các sản phẩm của IBS Lisemco đã được xuất khẩu
              sang hầu hết các thị trường quốc tế như Nhật Bản, Châu Âu, Châu
              Mỹ, Trung Việt Nam, Úc, vv và được đánh giá cao bởi các tổ chức
              chất lượng và khách hàng quốc tế.
            </Typography>
          </Grid>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AboutDetails;
