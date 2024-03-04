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
          color: "white", // text color
          fontSize: "18px    ",
        }}
      >
        {title}
      </Typography>
      {hoveredIndex === index && (
        <Paper
          elevation={3}
          style={{
            transition: "opacity 0.2s ease-in-out",
            zIndex: hoveredIndex === index ? 1 : 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
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
      <Grid item xs={12} sm={6} md={4}>
        {renderGridItem(
          0,
          "https://www.ibs.com.vn/wp-content/uploads/2020/03/image-023.jpg",
          12,
          "SUMMIT BULDING"
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {renderGridItem(
          1,
          "https://www.ibs.com.vn/wp-content/uploads/2020/03/image-023.jpg",
          12,
          "SUMMIT BULDING"
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {renderGridItem(
          2,
          "https://www.ibs.com.vn/wp-content/uploads/2020/03/image-023.jpg",
          12,
          "SUMMIT BULDING"
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {renderGridItem(
          3,
          "https://www.ibs.com.vn/wp-content/uploads/2020/03/image-023.jpg",
          12,
          "SUMMIT BULDING"
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {renderGridItem(
          4,
          "https://www.ibs.com.vn/wp-content/uploads/2020/03/image-023.jpg",
          12,
          "SUMMIT BULDING"
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        {renderGridItem(
          5,
          "https://www.ibs.com.vn/wp-content/uploads/2020/03/image-023.jpg",
          12,
          "SUMMIT BULDING"
        )}
      </Grid>
    </Grid>
  );
};

export default ListBusiness;
