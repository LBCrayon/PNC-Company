import { Box, styled, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import {
  AppBar,
  Button,
  Grid,
  ListItem,
  ListItemButton,
  ListItemText,
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

const Header = () => {
  const CustomAppBar = styled(AppBar)({
    backgroundColor: "rgba(0, 0, 0, 0)", // Adjust the alpha value for transparency
    boxShadow: "none",
  });

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
  });
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "100vh",
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
      cc_lang_pref: 'invalid' // Ngôn ngữ không được hỗ trợ
    },
  };
  
  return (
    <CustomBox component="header">
      <CustomAppBar component="nav" position="sticky" elevation={0}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={4}>
            <StyledToolbar>
              <Typography
                sx={{ color: "#fff" }}
                variant="h4"
                component="h2"
                color="textPrimary"
              >
                Logo
              </Typography>
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
              fontSize: "90px",
              "&:hover": {
                backgroundColor: "transparent",
                color: "orange",
              },
            }}
          >
            Phương Nam
          </AnimatedTypography>

          <AnimatedTypography
            variant="p"
            component="p"
            sx={{
              py: 2.5,
              lineHeight: 1.6,
              color: "#fff",
              fontSize: "35px",
              "&:hover": {
                backgroundColor: "transparent",
                color: "orange",
              },
            }}
          >
            "One Solution - Countless Capabilities"
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
                  color: "orange",
                  borderColor: "orange",
                },
                "&&:focus": {
                  color: "orange",
                  borderColor: "orange",
                },
              }}
            >
              Xem thêm
            </Button>
          </Box>
        </Box>
      </CustomAppBar>
      {/* Box text */}

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
