/* eslint-disable jsx-a11y/img-redundant-alt */
import { Grid, Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
const ListBusiness = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const renderGridItem = (index, src, xsSize, title, detail) => (
    <Grid
      height={"40vh"}
      item
      xs={xsSize}
      onMouseOver={() => handleMouseOver(index)}
      onMouseOut={handleMouseOut}
      style={{
        position: "relative",
        overflow: "hidden", // Ensures the text doesn't overflow the container
      }}
    >
      <img
        alt={`Sample Image ${index + 1}`}
        src={src}
        style={{
          width: "100%",
          height: "100%",
          transition: "opacity 0.2s ease-in-out",
          opacity: hoveredIndex === index ? 0.5 : 1,
          zIndex: hoveredIndex === index ? 1 : 0,
        }}
      />
      <Typography
        variant="caption"
        component="div"
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          color: "#fff", // text color
          fontSize: "24px    ",
        }}
      >
        {title}
      </Typography>

      {hoveredIndex === index && (
        <Paper
          elevation={3}
          style={{
            width: "90%",
            height: "auto",
            transition: "opacity 0.2s ease-in-out",
            zIndex: hoveredIndex === index ? 1 : 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            textAlign: "center",
          }}
        >
          <Typography>{detail}</Typography>
        </Paper>
      )}
    </Grid>
  );

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      justifyContent="center"
      alignItems="center"
      px={20}
      py={8}
    >
      <Grid item xs={12} sm={6} md={6}>
        <Link href="/business1">
          {renderGridItem(
            0,
            "https://static.vinwonders.com/production/san-bay-quoc-te-tan-son-nhat.jpg",
            12,
            "Hợp tác đầu tư hạ tầng viễn thông",
            "PHƯƠNG NAM luôn nỗ lực trở thành công ty hàng đầu trong lĩnh vực hợp tác đầu tư hạ tầng viễn thông, nhà cung cấp và phân phối các giải pháp camera, an ninh tích hợp và các giải pháp điện nhẹ (hệ thống mạng, tổng đài, nhà thông minh) tại Việt Nam, đặc biệt các giải pháp của chúng tôi đều hướng tới người dùng cuối cùng và được xây dựng trên nền CNTT và sản phẩm của các nhà sản xuất hàng đầu trên thế giới."
          )}
        </Link>
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        <Link href="/business2">
          {renderGridItem(
            1,
            "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/9/30/1248346/382894547_6239972332.jpg",
            12,
            "Điện nhẹ",

            "Hệ thống điện nhẹ (Hệ thống mạng, tổng đài, nhà thông minh) &Hệ thống An Ninh tích hợp trong các công trình là một nhu cầu hết sức cấp thiết."
          )}
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Link href="/business3">
          {renderGridItem(
            2,
            "https://bdsvinhomes.com.vn/wp-content/uploads/2020/03/vinhomes-central-park-slide.jpg",
            12,
            "Kỹ thuật mạng viễn thông",
            "Kỹ thuật mạng viễn thông là những dịch vụ cung cấp sự hỗ trợ và quản lý kỹ thuật cho các hệ thống mạng viễn thông. Đây là một lĩnh vực quan trọng trong ngành viễn thông để đảm bảo rằng các mạng di động, internet, và các hệ thống truyền thông khác hoạt động hiệu quả và ổn định. Dịch vụ này thường được cung cấp bởi các công ty viễn thông, nhà cung cấp dịch vụ internet, và các doanh nghiệp có hệ thống mạng phức tạp."
          )}
        </Link>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Link href="/business4">
          {renderGridItem(
            3,
            "https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2022/07/chuyen-khoa-benh-vien-quan-y-175.jpg",
            12,
            "Thương mại quốc tế",
            "Thương mại quốc tế là quá trình mua bán hàng hóa và dịch vụ giữa các quốc gia khác nhau. Nó bao gồm các hoạt động kinh doanh giữa các doanh nghiệp và chính phủ từ các quốc gia khác nhau, nhằm mục đích trao đổi hàng hóa, dịch vụ và nguồn lực."
          )}
        </Link>
      </Grid>
    </Grid>
  );
};

export default ListBusiness;
