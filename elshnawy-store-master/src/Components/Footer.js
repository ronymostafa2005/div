// mui
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
// iconify
import Iconify from "./Iconify"; // Adjust the path according to your project structure

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        color: "white",
        py: 4,
        mt: 5,
        textAlign: "center",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="body1">
            © {new Date().getFullYear()} EL-SHNAWY Store. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Follow us on:</Typography>
          <IconButton
            component={Link}
            href="https://www.facebook.com/profile.php?id=100063546175324&mibextid=ZbWKwL"
            target="_blank"
          >
            <Iconify icon="eva:facebook-fill" />
          </IconButton>
          <IconButton
            component={Link}
            href="https://wa.me/+201559578795"
            target="_blank"
          >
            <Iconify icon="ic:baseline-whatsapp" />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.instagram.com/el.shnawy_stor?igsh=eXB3emxhaXE2ZG1i"
            target="_blank"
          >
            <Iconify icon="mdi:instagram" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
