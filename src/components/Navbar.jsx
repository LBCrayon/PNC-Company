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
          <img
            width={"140"}
            height={"140px"}
            src="https://firebasestorage.googleapis.com/v0/b/finedelivery-880b6.appspot.com/o/PNC%2FLOGO%20-%20PNC%20-%20NEW.png?alt=media&token=1f635abc-15cb-4a83-bda0-f7b76c650309"
          />
        </Link>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <DrawerItem />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
