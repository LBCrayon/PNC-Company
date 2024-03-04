import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AppBar,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

const commonListItemButtonStyles = {
  color: "#fff",
  fontWeight: "bold",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: "transparent",
    color: "orange",
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
    text: "Quan hệ cổ đông",
    to: "/about",
  },
  {
    text: "Tuyển dụng",
    to: "/contact",
  },
  {
    text: "Liên hệ",
    to: "/contact",
  },
];

const itemList2 = [
  {
    text: "Trang chủ",
    to: "/",
  },
  {
    text: "Về chúng tôi",
    to: "/about",
  },
  {
    text: "Lĩnh vực kinh doanh chính",
    to: "/business",
  },
  {
    text: "Dự án",
    to: "/project",
  },
  {
    text: "Tin tức",
    to: "/news",
  },
];
const linkStyle = {
  textDecoration: "none", // Loại bỏ gạch dưới
  color: "#fff", // Màu chữ
};

const ProjectBox = ({ icon, title }) => (
  <Box
    component="article"
    sx={{
      px: 4,
      py: 2,
      textAlign: "center",
      fontSize: "0.2rem",
    }}
  >
    {icon}
    <Typography variant="h6" component="h5" color="white">
      {title}
    </Typography>
  </Box>
);

const Projects = () => {
  return (
    <Stack
      container
      sx={{
        backgroundImage: `url("https://www.ibs.com.vn/wp-content/uploads/2020/03/Group-7757-4.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "35vh",
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
                            ...commonListItemButtonStyles,
                          }}
                        >
                          <ListItemText primary={item.text} />
                        </StyledListItemButton>
                      </ListItem>
                    ))}
                  </ListMenu>
                  <Stack direction="row" spacing={2}>
                    <ListMenu>
                      {itemList2.map((item) => (
                        <ListItem key={item.text}>
                          <StyledListItemButton
                            component={Link}
                            to={item.to}
                            sx={{
                              ...commonListItemButtonStyles,
                            }}
                          >
                            <ListItemText primary={item.text} />
                          </StyledListItemButton>
                        </ListItem>
                      ))}
                    </ListMenu>

                    <SearchIcon
                      sx={{
                        paddingTop: "15px",
                        fontSize: 30,
                        color: "#fff",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "orange",
                        },
                      }}
                    />
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
              Hàng ngày, chúng tôi luôn nỗ lực hết mình để đạt được những kết
              quả vượt trội cho mỗi dự án mà chúng tôi tham gia. Những giá trị
              mà IBS thiết lập nên được thể hiện qua một số những dự án tiêu
              biểu trong danh mục hàng loạt các dự án mà chúng tôi đã tham gia
              trong hàng thập kỷ vừa qua.
            </Typography>
          </Stack>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 2, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Stack justifyContent={"center"} direction="row" spacing={2} mt={6}>
              <ProjectBox
                icon={<MapsHomeWorkOutlinedIcon />}
                title="DỰ ÁN XÂY DỰNG DÂN DỤNG"
              />
              <ProjectBox
                icon={<MapsHomeWorkOutlinedIcon />}
                title="DỰ ÁN CÔNG NGHIỆP"
              />
              <ProjectBox
                icon={<MapsHomeWorkOutlinedIcon />}
                title="DỰ ÁN NĂNG LƯỢNG"
              />
              <ProjectBox
                icon={<MapsHomeWorkOutlinedIcon />}
                title="DỊCH VỤ GIẢI PHÁP TỰ ĐỘNG HÓA"
              />
              <ProjectBox
                icon={<MapsHomeWorkOutlinedIcon />}
                title="DỰ ÁN VẬN HÀNH VÀ BẢO DƯỠNG"
              />
            </Stack>
          </motion.div>
        </CustomAppBar>
      </CustomBox>
    </Stack>
  );
};

export default Projects;
