import SearchIcon from "@mui/icons-material/Search";
import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

import {
  AppBar,
  Button,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

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
    to: "/",
  },
];
const itemList2 = [
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
    to: "/",
  },
];
const Content = () => {
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
                  <Typography
                    sx={{ color: "#fff" }}
                    variant="h4"
                    component="h2"
                    color="textPrimary"
                  >
                    Phương Nam
                  </Typography>
                </Link>
              </StyledToolbar>
            </Grid>
            <Grid item xs={12} paddingRight={16}>
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
                          color: "#fff",
                          fontWeight: "bold",
                          whiteSpace: "nowrap", // Prevent text from wrapping
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "orange",
                          },
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
                            color: "#fff",
                            fontWeight: "bold",
                            whiteSpace: "nowrap", // Prevent text from wrapping
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: "orange",
                            },
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
            </Grid>
          </Grid>
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
                  color: "orange",
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
                  color: "orange",
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
                  color: "orange",
                },
              }}
            >
              CÔNG TY CỔ PHẦN XÂY DỰNG <br />
              CÔNG NGHIỆP DỊCH VỤ VIỆT NAM
            </Typography>
          </Box>
        </CustomAppBar>
      </CustomBox>
    </Stack>
  );
};

export default Content;
