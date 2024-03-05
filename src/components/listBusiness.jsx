/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
const ListBusiness = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const renderGridItem = (index, src, xsSize, title) => (
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
          color: "#00a859", // text color
          fontSize: "18px    ",
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
          <Typography>
            IBS hiện nay sở hữu một năng lực toàn diện để cung cấp giải pháp
            trọn gói “Chìa khóa trao tay” trên cương vị một tổng thầu EPC, ở tất
            cả các lĩnh vực công nghiệp, năng lượng và đặc biệt là xây dựng dân
            dụng và các siêu dự án - đòi hỏi sự phức tạp và tinh vi từ quá trình
            khởi tạo và lập kế hoạch, thiết kế kỹ thuật, xây dựng, tới vận hành
            và bảo dưỡng.
          </Typography>
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
        {renderGridItem(
          0,
          "https://static.vinwonders.com/production/san-bay-quoc-te-tan-son-nhat.jpg",
          12,
          "SÂN BAY"
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        {renderGridItem(
          1,
          "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/9/30/1248346/382894547_6239972332.jpg",
          12,
          "TRUNG TÂM HÀNH CHÍNH"
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        {renderGridItem(
          2,
          "https://bdsvinhomes.com.vn/wp-content/uploads/2020/03/vinhomes-central-park-slide.jpg",
          12,
          "KHU PHỨC HỢP"
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        {renderGridItem(
          3,
          "https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2022/07/chuyen-khoa-benh-vien-quan-y-175.jpg",
          12,
          "BỆNH VIỆN"
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        {renderGridItem(
          4,
          "https://afamilycdn.com/150157425591193600/2020/2/20/1-1582158100730799166516.jpg",
          12,
          "TRƯỜNG ĐẠI HỌC"
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        {renderGridItem(
          5,
          "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/04/08232645/image-big-c-da-lat-trung-tam-mua-sam-giai-tri-hap-dan-164941000543450.jpg",
          12,
          "TRUNG TÂM THƯƠNG MẠI"
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        {renderGridItem(
          6,
          "https://maisonoffice.vn/wp-content/uploads/2021/09/toa-nha-the-flemington-tower-le-dai-hanh.jpg",
          12,
          "CAO ỐC VĂN PHÒNG"
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        {renderGridItem(
          7,
          "https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/174/2017/08/14074754/rex-hotel-vietnam-home-slideshow-image-01.jpg",
          12,
          "KHÁCH SẠN/ CONDOTEL"
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        {renderGridItem(
          8,
          "https://phumyhungsale.com/data/upload/image_manual/mua-can-ho-phu-my-hung-midtown-ty-le-choi-1-3-50%20(1).jpg?1507888033422",
          12,
          "CHUNG CƯ/ CĂN HỘ CAO CẤP"
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        {renderGridItem(
          9,
          "https://toquoc.mediacdn.vn/280518851207290880/2023/12/3/202312011226img1804-1701571901408840303217.jpg",
          12,
          "KÝ TÚC XÁ"
        )}
      </Grid>
    </Grid>
  );
};

export default ListBusiness;
