import { Box, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import {
  AppBar,
  Button,
  Grid,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from "@mui/material";

const ListMenu = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  gap: "8px",
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

const CustomAppBar = styled(AppBar)({
  backgroundColor: "rgba(0, 0, 0, 0)", // Adjust the alpha value for transparency
  boxShadow: "none",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});
const CustomBox = styled(Box)(({ theme }) => ({
  minHeight: "96.8vh",
  display: "flex",
  justifyContent: "center",
  paddingTop: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));
const AnimatedTypography = styled(Typography)(
  ({ theme }) => `
      @keyframes slideUp {
        from {
          transform: translateY(20px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 2;
        }
      }
  
      animation: slideUp 2s ${theme.transitions.easing.easeInOut};
    `
);
const youtubeConfig = {
  playerVars: {
    autoplay: 1,
    loop: 1,
    controls: 0, // Ẩn controls
    modestbranding: 1,
    fs: 1,
    cc_load_policy: 1,
    iv_load_policy: 3,
    start: 0,
    autohide: 0,
    enablejsapi: 1,
    origin: window.location.origin,
    playsinline: 1,
    rel: 0,
    showinfo: 0,
    quality: "hd2160", // Chọn chất lượng cao nhất
    cc_lang_pref: "invalid", // Ngôn ngữ không được hỗ trợ
  },
};

const Header = () => {
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
    <CustomBox component="header">
      <CustomAppBar component="nav" position="sticky" elevation={0}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={4}>
            <StyledToolbar>
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
                      <Button
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
                      </Button>
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
        <Box sx={{ paddingLeft: 20, paddingTop: 15 }} component="section">
          <AnimatedTypography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 900,
              color: "#fff",
              fontSize: "120px",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#00a859",
              },
            }}
          >
            PNC
          </AnimatedTypography>

          <AnimatedTypography
            variant="p"
            component="p"
            sx={{
              py: 2.5,
              lineHeight: 1.6,
              color: "#fff",
              fontSize: "45px",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#00a859",
              },
            }}
          >
            "Nhà thầu Viễn Thông chuyên nghiệp!"
          </AnimatedTypography>

          <Box>
            <Button
              component={Link}
              to={"/aboutdetail"}
              variant="outlined"
              sx={{
                px: 4,
                py: 1,
                fontSize: "0.9rem",
                textTransform: "capitalize",
                borderRadius: 0,
                color: "#fff",
                backgroundColor: "transparent",
                borderColor: "#fff",
                "&&:hover": {
                  color: "#00a859",
                  borderColor: "#00a859",
                },
                "&&:focus": {
                  color: "#00a859",
                  borderColor: "#00a859",
                },
              }}
            >
              Xem thêm
            </Button>
          </Box>
        </Box>
      </CustomAppBar>
      <ReactPlayer
        config={youtubeConfig}
        url={"https://www.youtube.com/watch?v=PPfyShd50NQ"}
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    </CustomBox>
  );
};

export default Header;
