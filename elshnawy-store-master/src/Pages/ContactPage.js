//mui
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
//formik
import { useFormik } from "formik";
//yup
import * as Yup from "yup";
//lottie
import Lottie from "lottie-react";
//assets
import contact from "../assets/Animation/contact.json";
//iconify
import Iconify from "../Components/Iconify";

//--------------------------------------------------------------------------

function ContactPage() {
  // const triggerAlert = useSetRecoilState(alertAtom);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      // sendMailRequest(values)
      //   .then((response) => {
      //     resetForm();
      //     triggerAlert({
      //       isOpen: true,
      //       isSuccess: true,
      //       message: "Mail sent successfully",
      //     });
      //   })
      //   .catch((error) => {
      //     triggerAlert({
      //       isOpen: true,
      //       isSuccess: false,
      //       message: "Something went wrong",
      //     });
      //     console.error("Error sending mail", error.response);
      //   });
    },
  });

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    formik;

  return (
    <Grid container spacing={5} sx={{ my: { xs: 0, md: 10 } }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Paper
          sx={{
            width: { xs: "95%", md: "80%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            py: 3,
            px: { xs: 1, md: 7 },
          }}
        >
          <Typography variant="h4" sx={{ color: "black" }}>
            Contact Us
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "primary.main", // Change the border color to primary
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.main", // Change the border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main", // Change the border color when focused
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "primary.main", // Change the border color to primary
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.main", // Change the border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main", // Change the border color when focused
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Phone NUMBER"
              name="phone_number"
              type="number"
              value={values.phone_number}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone_number && Boolean(errors.phone_number)}
              helperText={touched.phone_number && errors.phone_number}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "primary.main", // Change the border color to primary
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.main", // Change the border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main", // Change the border color when focused
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.message && Boolean(errors.message)}
              helperText={touched.message && errors.message}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "primary.main", // Change the border color to primary
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.main", // Change the border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main", // Change the border color when focused
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Send
            </Button>
          </Box>
        </Paper>
      </Grid>
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
        <Lottie animationData={contact} style={{ width: "80%" }} />
        <Box sx={{ display: "flex" }}>
          <a
            href="https://wa.me/+201559578795"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Iconify
                icon="logos:whatsapp-icon"
                sx={{ width: 40, height: 40, cursor: "pointer" }}
              />
            </IconButton>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100063546175324&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Iconify
                icon="logos:facebook"
                sx={{ width: 40, height: 40, mx: 2, cursor: "pointer" }}
              />
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/el.shnawy_stor?igsh=eXB3emxhaXE2ZG1i"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Iconify
                icon="skill-icons:instagram"
                sx={{ width: 40, height: 40, cursor: "pointer" }}
              />
            </IconButton>
          </a>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ContactPage;
