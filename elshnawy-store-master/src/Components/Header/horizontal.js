//MUI
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
//assets
import companyLogo from "../../assets/logo.jpg";
//react-router-dom
import { useNavigate } from "react-router-dom";
import { PATH_AUTH, PATH_SITE } from "../../routes/paths";
import Iconify from "../Iconify";
import { useCallback } from "react";

//---------------------------------------------

function HorizontalNavbar({ navLinks, user, logout }) {
  const navigate = useNavigate();

  const handelCartView = useCallback(() => {
    let context;
    if (localStorage.getItem("access_token")) {
      context = (
        <Grid
          item
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 25,
            }}
          >
            <Tooltip title="cart">
              <IconButton href={PATH_SITE.cart}>
                <Iconify icon="raphael:cart" />
              </IconButton>
            </Tooltip>
            <Tooltip title="logout">
              <IconButton onClick={logout}>
                <Iconify icon="material-symbols-light:logout" />
              </IconButton>
            </Tooltip>
          </Paper>
        </Grid>
      );
    } else {
      context = (
        <Grid
          item
          md={2}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Button href={PATH_AUTH.login} variant="contained">
            Login
          </Button>
          <Button href={PATH_AUTH.signUp} variant="outlined">
            Sign up
          </Button>
        </Grid>
      );
    }
    return context;
  }, [logout, user]);

  return (
    <Grid
      container
      sx={{
        position: "fixed",
        top: 3,
        height: 60,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <Grid
        item
        md={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "default",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: 25,
            px: 2,
          }}
        >
          <Avatar src={companyLogo} />
          <Typography
            variant="h6"
            sx={{ color: "black", fontWeight: "bold", ml: 1 }}
          >
            EL-SHNAWY STORE
          </Typography>
        </Paper>
      </Grid>
      <Grid item md={6}>
        <Paper
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 5,
            borderRadius: 25,
          }}
        >
          {navLinks.map((link) => (
            <Typography
              onClick={() => navigate(link.path)}
              variant="h6"
              sx={{ color: "black", cursor: "pointer" }}
            >
              {link.name}
            </Typography>
          ))}
        </Paper>
      </Grid>
      {/* {handelCartView()} */}
      <Grid item md={1}></Grid>
    </Grid>
  );
}

export default HorizontalNavbar;
