import CameraOutdoorIcon from "@mui/icons-material/CameraOutdoor";
import DoorbellIcon from "@mui/icons-material/Doorbell";
import ElevatorIcon from "@mui/icons-material/Elevator";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import ScreenLockPortraitIcon from "@mui/icons-material/ScreenLockPortrait";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
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

const commonListItemButtonStyles = {
  color: "#fff",
  fontWeight: "bold",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#00a859",
  },
};

const CustomAppBar = styled(AppBar)({
  backgroundColor: "rgba(0, 0, 0, 0)",
  boxShadow: "none",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});

const CustomBox = styled(Box)(({ theme }) => ({
  minHeight: "90vh",
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

const Projects = () => {
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
  return (
    <Stack
      container
      sx={{
        backgroundImage: `url("https://www.ibs.com.vn/wp-content/uploads/2020/03/Group-7757-4.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "15vh",
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
                                "&&:hover": {
                                  color: "#00a859",
                                  borderColor: "#00a859",
                                },
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

          <Stack justifyContent={"center"} direction="row" spacing={2} mt={4}>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                fontWeight: 900,
                color: "#fff",
                fontSize: "50px",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "white",
                },
              }}
            >
              DỰ ÁN
            </Typography>
          </Stack>

          <Stack justifyContent={"center"} direction="row" spacing={2} mt={4}>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                fontWeight: 400,
                color: "#fff",
                fontSize: "14px",
                width: "70%",
              }}
            >
              PHƯƠNG NAM luôn nỗ lực trở thành công ty hàng đầu trong lĩnh vực
              hợp tác đầu tư hạ tầng viễn thông, nhà cung cấp và phân phối các
              giải pháp camera, an ninh tích hợp và các giải pháp điện nhẹ (hệ
              thống mạng, tổng đài, nhà thông minh) tại Việt Nam, đặc biệt các
              giải pháp của chúng tôi đều hướng tới người dùng cuối cùng và được
              xây dựng trên nền CNTT và sản phẩm của các nhà sản xuất hàng đầu
              trên thế giới.
            </Typography>
          </Stack>
        </CustomAppBar>
      </CustomBox>
    </Stack>
  );
};

export default Projects;
