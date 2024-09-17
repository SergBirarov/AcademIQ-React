import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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


const SignIn = ({ onForgotPassword }) => {
  const [userId, setUserId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async () => {

    try {
      const response = await fetch('http://misha-rn-test.somee.com/api/User/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          id: userId,
          email: "",
          password: password,
        }),
        cache: 'no-cache',
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('token_created', Date.now());

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
            התחברות
          </Box>
        </Grid2>
        <Grid2 item xs={12} sx={{ textAlign: "right" }}>
          <TextField
            onChange={(event) => setUserId(event.target.value)}

            fullWidth
            label="מספר זהות"
            variant="outlined"
            slotProps={{
              input: {
                style: { direction: "rtl" },
                startAdornment: (
                  <InputAdornment position="end">
                    <AccountCircle
                      sx={{ color: "action.active", mr: 1, my: 0.5 }}
                    />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ mb: 2, direction: "rtl" }}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <FilledInput
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
            label="סיסמה"
            variant="outlined"
            slotProps={{
              input: {
                style: { direction: "rtl" },
                startAdornment: (
                  <InputAdornment position="end">
                    <LockIcon />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ mb: 2, backgroundColor: "background.paper" }}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid2>

        <Grid2 item xs={12} sx={{ textAlign: "end" }}>
          <Box component={"h4"}>או התחבר בעזרת אחד מהאמצעים הבאים</Box>
        </Grid2>
        <Grid2
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton sx={{ color: "secondary.main", mx: 1 }}>
            <GoogleIcon />
          </IconButton>
          <IconButton sx={{ color: "secondary.main", mx: 1 }}>
            <MicrosoftIcon />
          </IconButton>
          <IconButton sx={{ color: "secondary.main", mx: 1 }}>
            <GitHubIcon />
          </IconButton>
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
            sx={{ mb: 2 }}
          >
            התחבר
          </Button>
          <Button size="large" variant="text" color="secondary" onClick={onForgotPassword}>
            שכחתי ססמא
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};


export default SignIn;