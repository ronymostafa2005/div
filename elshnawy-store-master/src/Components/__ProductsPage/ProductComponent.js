// MUI
import { Box, Button, Card, Paper, Typography } from "@mui/material";
// iconify
import Iconify from "../Iconify";

//-------------------------------------------------------

function ProductComponent({ product }) {
  return (
    <Paper
      sx={{
        p: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: { xs: "95%", md: "70%" },
        height: { xs: 400, md: 500 },
        cursor: "pointer",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <Box
        component="img"
        src={product.images[0]}
        sx={{
          width: 300,
          borderRadius: 10,
          height: 300,
        }}
      />
      <Typography variant="h5" sx={{ mt: 1, color: "black" }}>
        {product.name}
      </Typography>
      <Typography variant="h6" sx={{ mb: 1, color: "black" }}>
        {product.price} EGP
      </Typography>
      <Button variant="contained">Buy Now</Button>
    </Paper>
  );
}

export default ProductComponent;
