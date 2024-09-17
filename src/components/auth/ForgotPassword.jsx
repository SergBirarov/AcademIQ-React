import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import {
  Box,
  Grid2,
  TextField,
  Button,
  IconButton,
  inputAdornmentClasses,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import GitHubIcon from "@mui/icons-material/GitHub";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import FormControl from "@mui/material/FormControl";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


const ForgotPassword = ({ onBack }) => {
  const [email, setEmail] = React.useState("")
  const [id, setId] = React.useState("")

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("Email sent to", email, id)

    try {
      const response = await fetch('http://misha-rn-test.somee.com/api/Password/reset-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          id: id,
        }),
        cache: 'no-cache',
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/")

      } else {
        const errorData = await response.json();
        console.log('Error:', errorData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };





  return (
    <Box
      sx={{
        width: { xs: "70vw", sm: "50vw", md: "400px" },
        height: "auto",
        backgroundColor: "background.paper",
        padding: 4,
        margin: "auto",
        borderRadius: 2,
        boxShadow: 24,
      }}
    >
      <Grid2
        container
        component="form"
        noValidate
        spacing={1}
        direction={"column"}
      >
        <Grid2 item xs={12} sm={6} sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src="https://academiq-assets.s3.eu-north-1.amazonaws.com/Academiq-title.png"
            sx={{
              width: { xs: "10rem", sm: "12rem" },
              height: "auto",
              marginRight: "auto",
            }}
          />
        </Grid2>
        <Grid2 item xs={12} sm={6} sx={{ textAlign: "right" }}>
          <Box component="h1" variant="h1">
            שחזור ססמה
          </Box>
        </Grid2>
        <Grid2 item xs={12} sm={6} sx={{ textAlign: "right" }}>
          <Typography component="p" variant="body1">
            הזן את מספר הזהות וכתובת המייל כדי לקבל קוד לשחזור הססמא
          </Typography>
        </Grid2>
        <Grid2 item xs={12} sx={{ textAlign: "right" }}>
          <TextField
            onChange={(event) => setId(event.target.value)}

            fullWidth
            label="מספר זהות"
            variant="outlined"
            slotProps={{
              input: {
                style: { direction: "rtl" },
                startAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle
                      sx={{ color: "primary.main", mr: 1, my: 0.5 }}
                    />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ mb: 2, direction: "rtl" }}
          />
        </Grid2>
        <Grid2 item xs={12} sx={{ textAlign: "right" }}>
          <TextField
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
            label="מייל"
            variant="outlined"
            slotProps={{
              input: {
                style: { direction: "rtl" },
                startAdornment: (
                  <InputAdornment position="end">
                    <AlternateEmailIcon
                      sx={{ color: "primary.main", mr: 1, my: 0.5 }}
                    />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ mb: 2, direction: "rtl" }}
          />
        </Grid2>

        <Grid2
          item
          xs={12}
          direction={"column"}
          sx={{
            textAlign: "center",
            mt: 2,
            flexFlow: "column",
            display: "flex",
            mx: "auto",
          }}
        >
          <Button
            onClick={handleSubmit}
            size="large"
            variant="contained"
            color="primary"
            sx={{ mb: 2, width: '100%' }}
          >
            לחץ לקבלת קישור לאיפוס הססמה
          </Button>
        </Grid2>
        <Grid2 item>
          <Button variant="text" color="secondary" onClick={onBack}>
            חזור
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ForgotPassword;