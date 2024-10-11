// mui
import { Box, Typography, Paper, Button, Grid } from "@mui/material";

export default function AboutPage() {
  return (
    <Box
      sx={{
        mt: { xs: 0, md: 10 },
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" align="center" gutterBottom>
        About Us
      </Typography>

      <Grid container spacing={4}>
        {/* Company Overview Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              direction: "rtl", // تغيير الاتجاه إلى اليمين
            }}
          >
            <Typography variant="h5" sx={{ color: "black" }} gutterBottom>
              Who We Are
            </Typography>
            <Typography variant="body1" sx={{ color: "black" }} paragraph>
              موقع الشناوي لبيع جميع المنتجات الي هتحتاجها باسعار مناسبة وخدمه متميزة وتوصيل في اسرع وقت
            </Typography>
          </Paper>
        </Grid>

        {/* Our Mission Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              direction: "rtl", // تغيير الاتجاه إلى اليمين
            }}
          >
            <Typography variant="h5" sx={{ color: "black" }} gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ color: "black" }} paragraph>
              مهمتنا هي تقديم لك خدمة متميزة ومنتجات بجودة عالية واسعار مناسبة ونقدم لك ضمان وهدفنا هو راحتك وخدمتك
            </Typography>
          </Paper>
        </Grid>

        {/* Our Values Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              direction: "rtl", // تغيير الاتجاه إلى اليمين
            }}
          >
            <Typography variant="h5" sx={{ color: "black" }} gutterBottom>
              Our Values
            </Typography>
            <Typography variant="body1" sx={{ color: "black" }} paragraph>
              قيمنا هي تقديم لك خدمه متميزة وجودة عالية من المنتجات وضمان وخدمة عملاء معك حتى بعد البيع لضمان سعادتكم ورضاكم
            </Typography>
          </Paper>
        </Grid>

        {/* Our Team Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              direction: "rtl", // تغيير الاتجاه إلى اليمين
            }}
          >
            <Typography variant="h5" sx={{ color: "black" }} gutterBottom>
              Meet Our Team
            </Typography>
            <Typography variant="body1" sx={{ color: "black" }} paragraph>
              فريقنا يتكون من مجموعة من الخبرات المميزة لاختيار منتجات بعناية وذات جودة عالية وخدمة عملاء لخدمتكم
            </Typography>
          </Paper>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              px: 7,
              direction: "rtl", // تغيير الاتجاه إلى اليمين
            }}
          >
            <Typography variant="h5" sx={{ color: "black" }} gutterBottom>
              Need to know more?
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 1,
                animation: "pulse 2s infinite", // Apply animation
                "@keyframes pulse": {
                  "0%": {
                    transform: "scale(1)",
                  },
                  "50%": {
                    transform: "scale(1.05)", // Slightly scale up
                  },
                  "100%": {
                    transform: "scale(1)",
                  },
                },
              }}
            >
              Contact Us
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
