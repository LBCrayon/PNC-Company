/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Stack, Box, Grid, Typography, Link } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ListProject = () => {
  const [currentIndex, setCurrentIndex] = useState();

  const imageData = [
    {
      alt: "image1",
      url: "https://vcdn-kinhdoanh.vnecdn.net/2020/10/10/198-1602227911-1372-1602305404.png",
    },
    {
      alt: "image2",
      url: "https://korn-architects.com/uploads/projects/1.jpg",
    },
    {
      alt: "image3",
      url: "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/04/08232645/image-big-c-da-lat-trung-tam-mua-sam-giai-tri-hap-dan-164941000543450.jpg",
    },
    {
      alt: "image4",
      url: "https://scontent.iocvnpt.com/resources/portal//Images/BTN/admin.btn/lotte/l3.jpg_636658791877379842.jpg",
    },
    {
      alt: "image5",
      url: "https://images2.thanhnien.vn/Uploaded/dieutrangqc/2023_01_18/1-the-grand-ho-tram-strip-3045.jpg",
    },
    {
      alt: "image2",
      url: "https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/174/2017/08/14074754/rex-hotel-vietnam-home-slideshow-image-01.jpg",
    },
    {
      alt: "image3",
      url: "https://kienvietcorp.vn/wp-content/uploads/2023/08/Perspective-Day-scaled-1.jpg",
    },
    {
      alt: "image4",
      url: "https://maisonoffice.vn/wp-content/uploads/2021/09/toa-nha-saigon-tower.jpg",
    },
    {
      alt: "image2",
      url: "https://viethong.vn/wp-content/uploads/2021/04/EDEN-PLAZA.jpg",
    },
    {
      alt: "image3",
      url: "https://masterisehomes.com/storage/media/nb5z6EkeiVBSDnJkoeOH4Bp3pc7K3LpuP9yrXt0a.jpeg",
    },
    {
      alt: "image4",
      url: "https://maisonoffice.vn/wp-content/uploads/2021/09/toa-nha-the-flemington-tower-le-dai-hanh.jpg",
    },
    {
      alt: "image4",
      url: "https://vlook.vn/wp-content/uploads/2015/06/vlook.vn-TS2.jpg",
    },
    // ... (add more images as needed)
  ];

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  const chunkedSlides = chunkArray(imageData, 3);

  const renderSlides = chunkedSlides.map((slide, index) => (
    <div key={index} style={{ display: "flex" }}>
      {slide.map((image) => (
        <img
          key={image.alt}
          src={image.url}
          alt={image.alt}
          style={{ width: "33%", marginRight: "1%" }}
        />
      ))}
    </div>
  ));

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const renderGridItem = (index, src, xsSize, title, additionalText) => (
    <Grid
      item
      xs={xsSize}
      onMouseOver={() => handleMouseOver(index)}
      onMouseOut={handleMouseOut}
      style={{
        transition: "transform 0.3s ease-in-out",
        transform: hoveredIndex === index ? "scale(1.2)" : "scale(1)",
        zIndex: hoveredIndex === index ? 1 : 0,
      }}
    >
      <img
        alt={`Sample Image ${index + 1}`}
        src={src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Typography
        variant="caption"
        component="div"
        style={{
          position: "absolute",
          top: 20,
          left: 50,
          color: "white", // text color
          fontSize: "18px    ",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="caption"
        component="div"
        style={{
          position: "absolute",
          top: 50,
          left: 50,
          color: "#fff", // text color
          fontSize: "16px    ",
        }}
      >
        {additionalText}
      </Typography>
    </Grid>
  );

  return (
    <>
      <Stack
        spacing={2}
        px={36}
        justifyContent="center"
        alignItems="center"
        pt={2}
        pb={12}
      >
        <Box>
          <Grid container spacing={2}>
            {renderGridItem(
              0,
              "https://bitexco.com.vn/wp-content/uploads/2019/01/6-1.jpg",
              4,
              "THÁP TÀI CHÍNH BITEXCO",
              "Tập đoàn Bitexco Việt Nam"
            )}

            {renderGridItem(
              1,
              "https://static.vinwonders.com/production/san-bay-quoc-te-tan-son-nhat.jpg",
              8,
              "TÂN SƠN NHẤT",
              "Tổng Công ty Cảng hàng không Việt Nam"
            )}
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            {renderGridItem(
              2,
              "https://bdsvinhomes.com.vn/wp-content/uploads/2020/03/vinhomes-central-park-slide.jpg",
              12,
              "VINHOMES CENTRAL PARK (VINHOMES TÂN CẢNG)",
              "Công ty CP Đầu tư Xây dựng Tên Liên Phát"
            )}
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            {renderGridItem(
              3,
              "https://diaocthuthiem.info/wp-content/uploads/2018/11/Scene-3.jpg",
              6,
              "Thaco - Khu đô thị Sala",
              "Tập đoàn Vingroup"
            )}
            {renderGridItem(
              4,
              "https://thongtinbds24h.com/wp-content/uploads/2017/04/Phoi-canh-nha-o-cho-can-bo-chien-sy-bo-cong-an-co-nhue-2.jpg",
              6,
              "NHÀ Ở BỘ CÔNG AN",
              "Công ty CP Đầu tư Phú Cường"
            )}
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            {renderGridItem(
              5,
              "https://beto.mediacdn.vn/rb_up_es/original/project/4038/2018/01/15/15/53/1171515984809.949.jpg",
              2,
              "HODECO PLAZA - VŨNG TÀU"
            )}
            {renderGridItem(
              6,
              "https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2022/07/chuyen-khoa-benh-vien-quan-y-175.jpg",
              10,
              "BỆNH VIỆN QUẬN Y 175 ",
              "Bộ Quốc Phòng"
            )}
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            {renderGridItem(
              7,
              "https://phumyhungsale.com/data/upload/image_manual/mua-can-ho-phu-my-hung-midtown-ty-le-choi-1-3-50%20(1).jpg?1507888033422",
              6,
              "SAKURA",
              "Công ty TNHH Liên doanh Phú Mỹ Hưng"
            )}
            {renderGridItem(
              8,
              "https://www.vinhomeland.com.vn/wp-content/uploads/2020/12/banner-vinhomes-golden-river-2.jpg",
              6,
              "VINHOMES GOLDEN RIVER (VINHOMES BA SON)",
              "Tập đoàn Vingroup"
            )}
          </Grid>
        </Box>
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundImage: `url("https://www.ibs.com.vn/wp-content/uploads/2020/03/Group-7757-5.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          py: 8,
          px: 2,
          display: { xs: "flex" },
        }}
      >
        <Box
          component="section"
          sx={{
            paddingBottom: 3,
          }}
        >
          <Typography
            variant="h6"
            component="h5"
            color="white"
            textAlign={"center"}
            fontSize={"40px"}
          >
            Các Dự Án Khác
          </Typography>
        </Box>

        <Box
          sx={{
            maxWidth: 1400,
            width: "100%",
          }}
        >
          <Carousel
            showThumbs={false}
            centerSlidePercentage={40}
            thumbWidth={180}
            dynamicHeight={false}
            centerMode={false}
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            selectedItem={chunkedSlides[currentIndex]}
            onChange={handleChange}
            className="carousel-container"
          >
            {renderSlides}
          </Carousel>
        </Box>
      </Stack>
    </>
  );
};

export default ListProject;
