//mui
import {
  Box,
  Button,
  Grid,
  Typography,
  IconButton,
  Slide,
  Paper,
  Avatar,
} from "@mui/material";
import { useState } from "react";
//assets
import airpods from "../../assets/Products/airpods.png";
import sahave from "../../assets/Products/shave.png";
import watch1 from "../../assets/Products/watch1.png";
import watch2 from "../../assets/Products/watch2.png";
//iconify
import Iconify from "../Iconify";

//----------------------------------------------------------------------

export default function HeroBanner() {
  const images = [airpods, sahave, watch1, watch2]; // Array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [checked, setChecked] = useState(true);

  const handleNext = () => {
    setChecked(false);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setChecked(true);
    }, 300); // Ensure the transition is visible before changing the image
  };

  const handlePrev = () => {
    setChecked(false);
    setTimeout(() => {
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );
      setChecked(true);
    }, 300);
  };

  const cards = [
    {
      id: 1,
      text:'تسلمو ولله ع السماعة طلعت حلوه وصوتها عالي ونقي ومش بحتاج اشحنها كتير بتقعد فترة طويلة مكنتش متوقع انها هتبقى كدا',
      name: 'Yossef Aita',
      avatarUrl: 'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      text: 'The bag turned out amazing, honestly! Thank you so much, really. I would like to order the other color, please' ,
      name: 'John Doe',
      avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 3,
      text: 'خدمة التوصيل كانت سريعة جدا ، وصلت الطلبية في نفس اليوم الي طلبت فيه وكانت ممتازة شكرا ليكم ',
      name: 'Jane Smith',
      avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
  ];

  return (
    <Grid container spacing={5}>
      {/* النص وزر الشراء (نقله من اليمين إلى الشمال) */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h3">Buy From The Best</Typography>
          <Typography variant="h3" component="h1">
            Buy From{" "}
            <Box
              component="span"
              sx={{
                color: "primary.main", // Use the theme's primary color
                animation: "lightning 2s infinite", // Apply animation
                "@keyframes lightning": {
                  "0%": { opacity: 1 },
                  "20%": { opacity: 0.8 },
                  "40%": { opacity: 1 },
                  "60%": { opacity: 0.6 },
                  "80%": { opacity: 0.9 },
                  "100%": { opacity: 1 },
                },
              }}
            >
              EL-SHNAWY
            </Box>{" "}
            Store
          </Typography>
          <Typography variant="subtitle1" sx={{ maxWidth: "85%", mt: 2 }}>
            "Your one-stop shop for all your needs! With us, you'll find
            everything you're looking for. Shop from anywhere, at any time, and
            enjoy a unique shopping experience. We offer guaranteed quality,
            fast delivery, and affordable prices."
          </Typography>
        </Box>
        <Button
          variant="contained"
          href="/products"
          sx={{
            mt: 4,
            width: { xs: "70%", md: "30%" },
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
          Buy Now
        </Button>

        {/* عرض الكارت تحت زر Buy Now */}
        <Grid item xs={12}>
          <Paper
            sx={{
              mt: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              p: 5,
              alignSelf: "start",
            }}
          >
            <Typography sx={{ color: "black" }}>
              {cards[currentImageIndex].text}
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar src={cards[currentImageIndex].avatarUrl} />
                <Typography sx={{ color: "black", ml: 1 }}>
                  {cards[currentImageIndex].name}
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <IconButton onClick={handlePrev}>
                  <Iconify icon="material-symbols-light:keyboard-arrow-left" />
                </IconButton>
                <IconButton onClick={handleNext}>
                  <Iconify icon="material-symbols-light:keyboard-arrow-right" />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Carousel with Slide (منتجات) تم نقله إلى اليمين */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Slide direction={checked ? "right" : "left"} in={checked} timeout={500}>
          <Box
            component="img"
            src={images[currentImageIndex]} // صورة المنتج
            alt="Product"
            sx={{
              width: "100%",
              height: { xs: "300px", md: "400px" },
              borderRadius: "10px",
              maxWidth: "400px",
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.8)", // تأثير الظل
              animation: "glow 4s infinite", // تأثير اللمعان
              "@keyframes glow": {
                "0%": { boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)" },
                "50%": { boxShadow: "0px 0px 40px rgba(255, 255, 255, 1)" },
                "100%": { boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)" },
              },
            }}
          />
        </Slide>
        <Paper sx={{ borderRadius: 25, mt: 4 }}>
          <IconButton onClick={handlePrev}>
            <Iconify icon="material-symbols-light:keyboard-arrow-left" />
          </IconButton>
          <IconButton onClick={handleNext}>
            <Iconify icon="material-symbols-light:keyboard-arrow-right" />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
}
