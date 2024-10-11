//mui
import { Box, Grid } from "@mui/material";
//component
import ProductComponent from "../Components/__ProductsPage/ProductComponent";
// Assets
import airpods from "../assets/Products/airpods.png";
import shave from "../assets/Products/shave.png";
import watch1 from "../assets/Products/watch1.png";
import watch2 from "../assets/Products/watch2.png";

//----------------------------------------------------------------------
const products = [
  {
    id: 1,
    name: "AirPods",
    description: "Wireless earbuds with superior sound quality.",
    price: 500,
    images: [airpods],
  },
  {
    id: 2,
    name: "Shaver",
    description: "High-quality electric shaver for a smooth shave.",
    price: 300,
    images: [shave],
  },
  {
    id: 3,
    name: "Watch 1",
    description: "Stylish smartwatch with fitness tracking features.",
    price: 1000,
    images: [watch1],
  },
  {
    id: 4,
    name: "Watch 2",
    description: "Elegant watch with classic design.",
    price: 750,
    images: [watch2],
  },
];

//----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <Box sx={{ mt: { xs: 1, md: 10 } }}>
      <Grid container spacing={5}>
        {products.map((product) => (
          <Grid item xs={12} md={6} key={product.id}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ProductComponent product={product} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
