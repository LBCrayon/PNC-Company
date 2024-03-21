import {
  AppBar,
  Card,
  Grid,
  ListItem,
  ListItemButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

import { Button, Menu, MenuItem } from "@mui/material";

const CustomAppBar = styled(AppBar)({
  backgroundColor: "rgba(0, 0, 0, 0)",
  boxShadow: "none",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});

const CustomBox = styled(Box)(({ theme }) => ({
  minHeight: "50vh",
  display: "flex",
  justifyContent: "center",
  paddingTop: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const ListMenu = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  gap: "8px",
});

const StyledListItemButton = styled(ListItemButton)({
  "&:hover": {
    backgroundColor: "transparent",
    color: "#1e2a5a",
  },
});

const itemList = [
  {
    text: "Tuyển dụng",
    to: "/recruit",
  },
  {
    text: "Liên hệ",
    to: "/contact",
  },
];

const itemList2 = [
  {
    id: 1,
    text: "Trang chủ",
    to: "/",
  },
  {
    id: 2,
    text: "Về chúng tôi",
    to: "/about",
  },
  {
    id: 3,
    text: "Lĩnh vực kinh doanh chính",
    to: "/business",
    subMenu: [
      { text: "XEM TẤT CẢ", to: "/business" },
      { text: "HỢP TÁC ĐẦU TƯ HẠ TẦNG VIỄN THÔNG", to: "/business1" },
      { text: "ĐIỆN NHẸ", to: "/business2" },
      { text: "KỸ THUẬT MẠNG VIỄN THÔNG", to: "/business3" },
      { text: "THƯƠNG MẠI QUỐC TẾ", to: "/business4" },
    ],
  },
  {
    id: 4,
    text: "Dự án",
    to: "/project",
    subMenu: [
      { text: "XEM TẤT CẢ", to: "/project" },
      { text: "SÂN BAY", to: "/project1" },
      { text: "TRUNG TÂM HÀNH CHÍNH", to: "/project2" },
      { text: "KHU PHỨC HỢP", to: "/project3" },
      { text: "BỆNH VIỆN", to: "/project4" },
      { text: "TRƯỜNG ĐẠI HỌC", to: "/project5" },
      { text: "TRUNG TÂM THƯƠNG MẠI", to: "/project6" },
      { text: "CAO ỐC VĂN PHÒNG", to: "/project7" },
      { text: "KHÁCH SẠN/ CONDOTEL", to: "/project8" },
      { text: "CHUNG CƯ/ CĂN HỘ CAO CẤP", to: "/project9" },
      { text: "KÝ TÚC XÁ", to: "/project10" },
    ],
  },
  {
    id: 5,
    text: "Tin tức",
    to: "/news",
  },
];
const linkStyle = {
  textDecoration: "none", // Loại bỏ gạch dưới
  color: "#fff", // Màu chữ
};

// img
const Projects4Details = () => {
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick = (event, anchorElSetter) => {
    if (anchorElSetter !== event.currentTarget) {
      anchorElSetter(event.currentTarget);
    }
  };

  const handleClose = (anchorElSetter) => {
    anchorElSetter(null);
  };
  const projectInfo = [
    { label: "Dự án:", value: "Sân bay Tân Sơn Nhất" },
    {
      label: "Chủ đầu tư:",
      value: "Tổng Công ty Cảng hàng không Việt Nam",
    },
    { label: "Địa điểm:", value: "Quận Tân Bình - TP.HCM" },
    { label: "Tổng mức đầu tư:", value: "" },
    {
      label: "Phạm vi thực hiện:",
      value: "",
    },
    {
      label: "Ngày hoàn thành:",
      value: "",
    },
  ];
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

  return (
    <>
      <Stack
        container
        sx={{
          backgroundImage: `url("https://file1.dangcongsan.vn/data/0/images/2020/09/30/phammai/ung-buou.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "10vh",
        }}
      >
        <CustomBox component="header">
          <CustomAppBar component="nav" position="sticky" elevation={0}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={4}>
                <StyledToolbar>
                  <Link to="/" style={linkStyle}>
                    <motion.div
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <img
                        width={"140"}
                        height={"140px"}
                        src="https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2FLOGO%20-%20PNC%20-%20NEW.png?alt=media&token=1f635abc-15cb-4a83-bda0-f7b76c650309"
                      />
                    </motion.div>
                  </Link>
                </StyledToolbar>
              </Grid>
              <Grid item xs={12} paddingRight={16}>
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <Stack
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    spacing={2}
                  >
                    <ListMenu>
                      {itemList.map((item) => (
                        <ListItem key={item.text}>
                          <StyledListItemButton
                            component={Link}
                            to={item.to}
                            sx={{
                              fontSize: "14px",
                              color: "#fff",
                              whiteSpace: "nowrap", // Prevent text from wrapping
                              "&:hover": {
                                backgroundColor: "transparent",
                                color: "#00a859",
                              },
                            }}
                          >
                            {item.text}
                          </StyledListItemButton>
                        </ListItem>
                      ))}
                    </ListMenu>
                    <Stack direction="row" spacing={2}>
                      {itemList2.map((item) => (
                        <ListItem key={item.id}>
                          {item.subMenu ? (
                            <React.Fragment>
                              <Button
                                aria-owns={
                                  item.id === 3 ? "sub-menu1" : "sub-menu2"
                                }
                                aria-haspopup="true"
                                onClick={(e) =>
                                  handleClick(
                                    e,
                                    item.id === 3 ? setAnchorEl1 : setAnchorEl2
                                  )
                                }
                                onMouseOver={(e) =>
                                  handleClick(
                                    e,
                                    item.id === 3 ? setAnchorEl1 : setAnchorEl2
                                  )
                                }
                                sx={{
                                  fontSize: "18px",
                                  color: "#fff",
                                  fontWeight: "bold",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {item.text}
                              </Button>
                              <Menu
                                id={item.id === 3 ? "sub-menu1" : "sub-menu2"}
                                anchorEl={item.id === 3 ? anchorEl1 : anchorEl2}
                                open={Boolean(
                                  item.id === 3 ? anchorEl1 : anchorEl2
                                )}
                                onClose={() =>
                                  handleClose(
                                    item.id === 3 ? setAnchorEl1 : setAnchorEl2
                                  )
                                }
                                MenuListProps={{
                                  onMouseLeave: () =>
                                    handleClose(
                                      item.id === 3
                                        ? setAnchorEl1
                                        : setAnchorEl2
                                    ),
                                }}
                              >
                                {item.subMenu.map((subMenuItem) => (
                                  <MenuItem
                                    key={subMenuItem.text}
                                    component={Link}
                                    to={subMenuItem.to}
                                    onClick={() =>
                                      handleClose(
                                        item.id === 3
                                          ? setAnchorEl1
                                          : setAnchorEl2
                                      )
                                    }
                                    sx={{
                                      borderColor: "#00a859",
                                      "&:hover": {
                                        backgroundColor: "transparent",
                                        color: "#00a859",
                                      },
                                    }}
                                  >
                                    {subMenuItem.text}
                                  </MenuItem>
                                ))}
                              </Menu>
                            </React.Fragment>
                          ) : (
                            <Button
                              component={Link}
                              to={item.to}
                              sx={{
                                fontSize: "18px",
                                color: "#fff",
                                fontWeight: "bold",
                                whiteSpace: "nowrap",
                                "&:hover": {
                                  backgroundColor: "transparent",
                                  color: "#00a859",
                                },
                              }}
                            >
                              {item.text}
                            </Button>
                          )}
                        </ListItem>
                      ))}
                    </Stack>
                  </Stack>
                </motion.div>
              </Grid>
            </Grid>
            <Stack mx={30} justifyContent={"start"} spacing={2} mt={4}>
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  pt: 10,
                  fontWeight: 900,
                  color: "#fff",
                  fontSize: "70px",
                }}
              >
                BỆNH VIỆN UNG BƯỚU (CƠ SỞ 2)
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                }}
              >
                Bệnh viện
              </Typography>
            </Stack>
          </CustomAppBar>
        </CustomBox>
        <Stack px={32} py={8} justifyContent="start" alignItems="start">
          {" "}
          <Card sx={{ width: "400px", p: 8 }} size="sm">
            {projectInfo.map((info) => (
              <Grid key={info.label} pt={2}>
                <Typography
                  variant="h5"
                  component="h5"
                  sx={{ fontSize: "16px", color: "#00a859", fontWeight: 900 }}
                >
                  {`${info.label} `}
                </Typography>
                <Typography
                  variant="sub1"
                  component="sub1"
                  sx={{ fontSize: "14px" }}
                >
                  {`${info.value} `}
                </Typography>
              </Grid>
            ))}
          </Card>
        </Stack>
      </Stack>

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "50vh",

          px: 2,
          display: { xs: "flex" },
        }}
      >
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

export default Projects4Details;
