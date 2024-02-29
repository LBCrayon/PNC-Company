import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DrawerItem from "./DrawerItem";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const navbar = document.getElementById("navbar");

      if (navbar) {
        if (offset > 50) {
          navbar.style.transform = "translateY(0)";
        } else {
          navbar.style.transform = "translateY(-100%)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      id="navbar" // Đặt id để truy cập thanh navbar trong handleScroll
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "#1e2a5a",
        transition: "transform 0.3s",
      }}
      elevation={0}
    >
      <StyledToolbar>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h6" component="h2">
            Logo
          </Typography>
        </Link>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <DrawerItem />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
