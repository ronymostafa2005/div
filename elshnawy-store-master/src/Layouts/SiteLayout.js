// MUI
import { Box } from "@mui/material";
// react-router-dom
import { Outlet } from "react-router-dom";
//components
import Navbar from "../Components/Header";
import Footer from "../Components/Footer";

//-----------------------------------------------------

function SiteLayout() {
  return (
    <Box
      sx={{
        bgcolor: "#282828",
      }}
    >
      <Navbar />
      <Box
        sx={{
          pt: { xs: 2, md: 10 },
          pb: 10,
          px: 3,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default SiteLayout;
