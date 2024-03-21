/* eslint-disable jsx-a11y/alt-text */
import CameraOutdoorIcon from "@mui/icons-material/CameraOutdoor";
import DoorbellIcon from "@mui/icons-material/Doorbell";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import ScreenLockPortraitIcon from "@mui/icons-material/ScreenLockPortrait";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import {
  AppBar,
  Box,
  Button,
  Grid,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomAppBar = styled(AppBar)({
  backgroundColor: "rgba(0, 0, 0, 0)",
  boxShadow: "none",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});

const CustomBox = styled(Box)(({ theme }) => ({
  minHeight: "10vh",
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
  // {
  //   text: "Đối tác",
  //   to: "/about",
  // },
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
const Business2 = () => {
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
  const outlinedTextStyle = {
    textShadow: "1px 1px 5px #00a859", // Hiệu ứng viền màu cam
  };
  const data = [
    {
      number: "1",
      title: "Đo kiểm chất lượng",
    },
    {
      number: "2",
      title: "Tối ưu hóa mạng lưới",
    },
    {
      number: "3",
      title: "Bảo dưỡng mạng",
    },
    {
      number: "4",
      title: "Tư vấn thiết kế",
    },
    {
      number: "5",
      title:
        "Triển khai mạng ngoại vi (xây lắp, di dời, hạ ngầm tuyến cáp viễn thông, CNTT)",
    },
    {
      number: "6",
      title: "Đào tạo chuyển giao công nghệ",
    },
    // Add more data objects if needed
  ];
  const ProjectBox = ({ icon, title }) => (
    <>
      <Box
        component="article"
        sx={{
          px: 4,
          py: 2,
          textAlign: "center",
        }}
      >
        {React.cloneElement(icon, {
          style: { marginBottom: "18px" }, // Thêm khoảng cách giữa icon và tiêu đề
        })}
        <Typography
          fontWeight={900}
          fontSize={"13px"}
          variant="h6"
          component="h5"
          color="white"
        >
          {title}
        </Typography>
      </Box>
    </>
  );
  return (
    <>
      <Stack
        container
        sx={{
          backgroundImage: `url("https://www.ibs.com.vn/wp-content/uploads/2020/03/Group-7757-4.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "25vh",
          pb: "400px",
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
                                    item.id === 3 ? setAnchorEl1 : setAnchorEl2
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
            <Stack
              spacing={2}
              mt={8}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  fontWeight: 900,
                  color: "#fff",
                  fontSize: "30px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                Lĩnh vực kinh doanh
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  fontWeight: 900,
                  color: "#fff",
                  fontSize: "32px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                KỸ THUẬT MẠNG VIỄN THÔNG
              </Typography>
            </Stack>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <Stack
                justifyContent={"center"}
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 2, md: 1 }}
                mt={6}
              >
                <ProjectBox
                  icon={<PodcastsIcon />}
                  title="ĐO KIỂM CHẤT LƯỢNG"
                />
                <ProjectBox
                  icon={<SettingsInputCompositeIcon />}
                  title="TỐI ƯU HOÁ MẠNG LƯỚI"
                />
                <ProjectBox icon={<SecurityIcon />} title="BẢO DƯỠNG MẠNG" />
                <ProjectBox
                  icon={<ScreenLockPortraitIcon />}
                  title="TƯ VẤN THIẾT KẾ"
                />
              </Stack>
              <Stack
                justifyContent={"center"}
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 2, md: 2 }}
                mt={6}
              >
                {" "}
                <ProjectBox
                  icon={<CameraOutdoorIcon />}
                  title="TRIỂN KHAI MẠNG LƯỚI NGOẠI VI"
                />
                <ProjectBox
                  icon={<DoorbellIcon />}
                  title="ĐÀO TẠO CHUYỂN GIAO CÔNG NGHỆ"
                />
              </Stack>
            </motion.div>
          </CustomAppBar>
        </CustomBox>
      </Stack>
      <Grid
        container
        spacing={2}
        columns={16}
        sx={{ flexGrow: 1 }}
        px={10}
        py={8}
      >
        {data.map((item, index) => (
          <Grid key={index} xs={8}>
            <Grid mt={8} container columns={16} sx={{ flexGrow: 1 }}>
              <Grid xs={4}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  style={{ height: "100%" }}
                >
                  <Typography
                    variant="h1"
                    component="h2"
                    color="white"
                    fontSize="150px"
                    style={outlinedTextStyle}
                  >
                    {item.number}
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12}>
                <Stack>
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography sx={{ textAlign: "justify" }}>
                    Công ty cổ phần xây dựng công nghiệp dịch vụ Việt Nam (IBS)
                    là một tổng thầu cung cấp giải pháp EPC (Engineering,
                    Procurement and Construction) toàn diện cho các ngành năng
                    lượng, công nghiệp nặng cũng như các dự án xây dựng dân
                    dụng. Trong ngành công nghiệp, IBS cung cấp dịch vụ EPC hoàn
                    thiện từ bước lập kế hoạch, thiết kế tích hợp, kỹ thuật, mua
                    sắm, quản lý dự án, sản xuất, lắp đặt cho tới vận hành cho
                    chủ sở hữu và ban điều hành dự án. Với những hồ sơ và danh
                    mục dự án qua hàng thập kỳ hoạt động trong lĩnh vực công
                    nghiệp, IBS đã chứng minh năng lực triển khai và thi công
                    xuất sắc, kỹ thuật tiên tiến và cung cấp dịch vụ đẳng cấp
                    thế giới cho khách hàng.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Box>
        <Stack direction="row">
          <Card
            variant="outlined"
            sx={{
              minHeight: 900,
              width: 720,
              backgroundImage: `url("https://bitexco.com.vn/wp-content/uploads/2019/01/6-1.jpg")`,
            }}
          >
            <Typography level="h2" fontSize="lg" color="#fff">
              THÁP TÀI CHÍNH BITEXCO
            </Typography>
            <CardContent
              sx={{
                alignItems: "self-start",
                justifyContent: "flex-end",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
                border: "1px solid",
                borderColor: "#000",
                backdropFilter: "blur(1px)",
                transform: "translateY(0)", // Initial position
                transition: "transform 0.4s", // Add transition for smoother animation
                opacity: 0,
                "&:hover": {
                  opacity: 1,
                  transform: "translateY(-20px)",
                  // Adjust the value based on your preference
                },
              }}
            >
              <Typography variant="h4" color="#fff">
                {" "}
                Tập đoàn Bitexco Việt Nam
              </Typography>

              <Typography color="#fff">
                NÂNG CẤP TRUNG TÂM THÔNG TIN VÀ HỆ THỐNG CẤP THOÁT NƯỚC SÀI GÒN
                (SAWACO) <br /> Dự án: Nâng cấp trung tâm thông tin và hệ thống
                cấp thoát nước Sài Gòn (Sawaco) <br />
                Địa điểm: Thành phố Hồ Chí Minh, Việt Nam <br />
                Vốn ODA: ADB (Ngân hàng phát triển Châu Á) <br /> Tổng mức đầu
                tư (toàn dự án): 150 triệu USD - Giai đoạn 1: 30 triệu USD{" "}
                <br />
                Phạm vi công việc: Tổng thầu EPC Thời điểm bắt đầu: 2016 <br />
                Thời điểm hoàn thành: 2020
              </Typography>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            sx={{
              minHeight: 900,
              width: 720,
              backgroundImage: `url("https://bitexco.com.vn/wp-content/uploads/2019/01/6-1.jpg")`,
            }}
          >
            <Typography level="h2" fontSize="lg" color="#fff">
              THÁP TÀI CHÍNH BITEXCO
            </Typography>
            <CardContent
              sx={{
                alignItems: "self-start",
                justifyContent: "flex-end",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
                border: "1px solid",
                borderColor: "#000",
                backdropFilter: "blur(1px)",
                transform: "translateY(0)", // Initial position
                transition: "transform 0.4s", // Add transition for smoother animation
                opacity: 0,
                "&:hover": {
                  opacity: 1,
                  transform: "translateY(-20px)",
                  // Adjust the value based on your preference
                },
              }}
            >
              <Typography variant="h4" color="#fff">
                {" "}
                Tập đoàn Bitexco Việt Nam
              </Typography>

              <Typography color="#fff">
                NÂNG CẤP TRUNG TÂM THÔNG TIN VÀ HỆ THỐNG CẤP THOÁT NƯỚC SÀI GÒN
                (SAWACO) <br /> Dự án: Nâng cấp trung tâm thông tin và hệ thống
                cấp thoát nước Sài Gòn (Sawaco) <br />
                Địa điểm: Thành phố Hồ Chí Minh, Việt Nam <br />
                Vốn ODA: ADB (Ngân hàng phát triển Châu Á) <br /> Tổng mức đầu
                tư (toàn dự án): 150 triệu USD - Giai đoạn 1: 30 triệu USD{" "}
                <br />
                Phạm vi công việc: Tổng thầu EPC Thời điểm bắt đầu: 2016 <br />
                Thời điểm hoàn thành: 2020
              </Typography>
            </CardContent>
          </Card>
          <Card
            variant="outlined"
            sx={{
              minHeight: 900,
              width: 720,
              backgroundImage: `url("https://bitexco.com.vn/wp-content/uploads/2019/01/6-1.jpg")`,
            }}
          >
            <Typography level="h2" fontSize="lg" color="#fff">
              THÁP TÀI CHÍNH BITEXCO
            </Typography>
            <CardContent
              sx={{
                alignItems: "self-start",
                justifyContent: "flex-end",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
                border: "1px solid",
                borderColor: "#000",
                backdropFilter: "blur(1px)",
                transform: "translateY(0)", // Initial position
                transition: "transform 0.4s", // Add transition for smoother animation
                opacity: 0,
                "&:hover": {
                  opacity: 1,
                  transform: "translateY(-20px)",
                  // Adjust the value based on your preference
                },
              }}
            >
              <Typography variant="h4" color="#fff">
                {" "}
                Tập đoàn Bitexco Việt Nam
              </Typography>

              <Typography color="#fff">
                NÂNG CẤP TRUNG TÂM THÔNG TIN VÀ HỆ THỐNG CẤP THOÁT NƯỚC SÀI GÒN
                (SAWACO) <br /> Dự án: Nâng cấp trung tâm thông tin và hệ thống
                cấp thoát nước Sài Gòn (Sawaco) <br />
                Địa điểm: Thành phố Hồ Chí Minh, Việt Nam <br />
                Vốn ODA: ADB (Ngân hàng phát triển Châu Á) <br /> Tổng mức đầu
                tư (toàn dự án): 150 triệu USD - Giai đoạn 1: 30 triệu USD{" "}
                <br />
                Phạm vi công việc: Tổng thầu EPC Thời điểm bắt đầu: 2016 <br />
                Thời điểm hoàn thành: 2020
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </>
  );
};

export default Business2;
