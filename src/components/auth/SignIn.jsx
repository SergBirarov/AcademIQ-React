import React from "react";
import {
  Box,
  Grid2,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import FilledInput from "@mui/material/FilledInput";
import { useAuth } from "../../../context/AuthContext";
import { GetVw, GetVh, GetResponsiveFontSize } from "../../utils/GeneralHelpers";


const student = {
  firstName: "ישראל",
  lastName: "ישראל",
  profileImage: "https://source.unsplash.com/random/100x100?sig=1",
  email: "jU9Q3@example.com",
  id: 1,
  cityCode:1,
  AddressL : "רחוב ישראל 1",
  phone: '0541234567',
  schoolYear: "2022",
  Enrollment: "2022-2023",
};


 const SignIn = ({ onForgotPassword }) => {

    const {user} = useAuth();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
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
              size="large"
              variant="contained"
              color="primary"
              sx={{ mb: 2 }}
              onClick={() => user.signin(student)}
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