// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontWeight: "bolder",
      textShadow: "0px 4px 20px rgba(255, 255, 255, 0.5)",
    },
    h2: {
      fontWeight: "bolder",
      textShadow: "0px 4px 20px rgba(255, 255, 255, 0.5)",
    },
    h3: {
      fontWeight: "bolder",
      textShadow: "0px 4px 20px rgba(255, 255, 255, 0.5)",
    },
  },
  palette: {
    primary: {
      main: "#77c1fe", // Primary color
      dark: "#6d8ea5",
    },
    secondary: {
      main: "#fff", // Secondary color
    },
    text: {
      primary: "#ffffff", // Set default text color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disable uppercase transformation
          borderRadius: 15, // Rounded corners
          padding: "10px 20px", // Custom padding
        },
        contained: {
          background: "primary",
          color: "#fff", // Custom text color
          "&:hover": {
            backgroundColor: "secondary", // Custom hover color
          },
        },
        outlined: {
          borderColor: "primary",
          color: "#fff", // Custom text color to match the gradient
          "&:hover": {
            borderColor: "primary",
            backgroundColor: "secondary", // Custom hover color
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          display: "flex",
          boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.5)", // White shadow
          width: "fit-content", // Set width based on content
          height: "fit-content", // Set height based on content
          padding: 5, // Add padding if needed
          borderRadius: 10,
        },
      },
    },
  },
});

export default theme;
