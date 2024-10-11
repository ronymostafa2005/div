//MUI
import { Box, Typography } from "@mui/material";
//lottie-react
import Lottie from "lottie-react";
//assets
import notFound from "../assets/Animation/empty-box.json";

//--------------------------------------------------

function Page404() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#282828",
      }}
    >
      <Lottie animationData={notFound} style={{ width: 300 }} />
      <Typography
        variant="h3"
        sx={{ mt: 2, color: "black", textShadow: "none" }}
      >
        Nothing Found
      </Typography>
    </Box>
  );
}

export default Page404;
