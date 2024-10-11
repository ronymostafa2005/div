//mui
import { Box } from "@mui/material";
//iconify
import HeroBanner from "../Components/__homePage/HeroBanner";

//-----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Box sx={{ mt: { xs: 1, md: 10 } }}>
      <HeroBanner />
    </Box>
  );
}
