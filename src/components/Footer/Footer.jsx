import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const StackColumn = styled(Stack)(() => ({
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    gap: 8,
    textAlign: "center",
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ededed",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: 30,
    },
  }));

  return (
    <BoxRow
      component="footer"
      sx={{
        py: 4,
        px: 2,
        backgroundColor: "#00235a",
        color: "white",
      }}
    >
      <StackColumn>
        <FooterTitle text={"Công ty TNHH Xây Lắp Kỹ Thuật Phương Nam"} />
        <Typography variant="caption" component="p">
          &copy; 2024 LB.
        </Typography>
      </StackColumn>
      <StackColumn>
        <FooterTitle text={"Văn phòng Hồ Chí Minh"} />
        <FooterLink
          text={
            "Địa chỉ: C33 - C34, Tầng 3, Homyland Riverside, 403A Đ. Nguyễn Duy Trinh, P. Phú Thuận, Quận 2, Thành phố Hồ Chí Minh "
          }
        />
        <FooterLink text={"Điện thoại: 0909090909 "} />
        <FooterLink text={"Fax: 0909090909"} />
        <FooterLink text={"Email: lebao.dev@gmail.com"} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={"Văn phòng Hà Nội"} />
        <FooterLink
          text={
            "Địa chỉ: C33 - C34, Tầng 3, Homyland Riverside, 403A Đ. Nguyễn Duy Trinh, P. Phú Thuận, Quận 2, Thành phố Hồ Chí Minh "
          }
        />
         <FooterLink text={"Điện thoại: 0909090909 "} />
        <FooterLink text={"Fax: 0909090909"} />
        <FooterLink text={"Email: lebao.dev@gmail.com"} />
      </StackColumn>

      {/* <StackColumn>
        <FooterTitle text={'our services'} />
        <FooterLink text={'buy house'} />
        <FooterLink text={'sell house'} />
        <FooterLink text={'rent house'} />
        <FooterLink text={'build house'} />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'our company'} />
        <FooterLink text={'reporting'} />
        <FooterLink text={'get in touch'} />
        <FooterLink text={'management'} />
      </StackColumn> */}
    </BoxRow>
  );
};

export default Footer;
