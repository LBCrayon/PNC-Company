/* eslint-disable jsx-a11y/alt-text */
import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

import {
  AppBar,
  Button,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Toolbar
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";

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
const CustomAppBar = styled(AppBar)({
  backgroundColor: "rgba(0, 0, 0, 0)", // Adjust the alpha value for transparency
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

const linkStyle = {
  textDecoration: "none", // Loại bỏ gạch dưới
  color: "#fff", // Màu chữ
};

const Content = () => {
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
        backgroundImage: `url("https://www.ibs.com.vn/wp-content/uploads/2020/03/Group-6751.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center", // Để giữ nền ảnh ở giữa trang
        height: "100vh", // Set chiều cao bằng 100% của viewport
      }}
    >
      {" "}
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
                    {" "}
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
          </Grid>{" "}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Box sx={{ paddingLeft: 40, paddingTop: 15 }} component="section">
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  fontWeight: 500,
                  color: "#fff",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#00a859",
                  },
                }}
              >
                VỀ CHÚNG TÔI
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                sx={{
                  fontWeight: 900,
                  color: "#fff",
                  fontSize: "50px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#00a859",
                  },
                }}
              >
                PNC
              </Typography>

              <Typography
                variant="h5"
                component="h5"
                sx={{
                  fontWeight: 900,
                  color: "#fff",
                  fontSize: "50px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#00a859",
                  },
                }}
              >
                CÔNG TY TNHH XÂY LẮP KỸ THUẬT <br />
                PHƯƠNG NAM
              </Typography>
            </Box>
          </motion.div>
        </CustomAppBar>
      </CustomBox>
    </Stack>
  );
};

export default Content;
