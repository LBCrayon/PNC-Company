import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Grid,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

// img
const HeaderCustomer = () => {
  return (
    <Stack
      container
      sx={{
        backgroundImage: `url("https://www.ibs.com.vn/wp-content/uploads/2020/03/Group-7757-4.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "10vh",
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
                    <ListMenu>
                      {itemList2.map((item) => (
                        <ListItem key={item.text}>
                          <StyledListItemButton
                            component={Link}
                            to={item.to}
                            sx={{
                              fontSize: "18px",
                              color: "#fff",
                              fontWeight: "bold",
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

                    <SearchIcon
                      sx={{
                        paddingTop: "15px",
                        fontSize: 30,
                        color: "#fff",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "#00a859",
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
                pt: 20,
                fontWeight: 900,
                color: "#fff",
                fontSize: "50px",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "white",
                },
              }}
            >
              CÔNG TY TNHH XÂY LẮP KỸ THUẬT PHƯƠNG NAM
            </Typography>
          </Stack>
        </CustomAppBar>
      </CustomBox>
    </Stack>
  );
};

export default HeaderCustomer;
