import { Link, Typography } from "@mui/material";
import React from "react";

const FooterLink = ({ text }) => {
  return (
    <Typography
      variant="p"
      component="a"
      sx={{
        fontSize: "0.9rem",
        fontWeight: "400",
        textDecoration: "none",
        textTransform: "capitalize",
        color: "white",
        maxWidth: "60%",
      }}
    >
      {text}
    </Typography>
  );
};

export default FooterLink;
