import React, { useEffect, useState } from "react";
import {
    Box,
    Grid2,
    TextField,
    Button,
    IconButton,
    Alert,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import LockIcon from "@mui/icons-material/Lock";
import FilledInput from "@mui/material/FilledInput";
import { useNavigate, useSearchParams } from "react-router-dom";

const PasswordReset = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [subPassword, setSubPassword] = useState("");
    const [errorMsg, setErrorMgs] = useState("");
    const [resetToken, setResetToken] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();


    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    useEffect(() => {
        const token = searchParams.get('token');
        if (token) {
            setResetToken(token);
        }
    }, [searchParams]);

    const handleSubmit = async () => {
        console.log(resetToken);

        if (password == undefined || password == "" || password.length < 8) {
            setErrorMgs("הסיסמה חייבת להיות לפחות 8 תווים");
        }

        if (password == subPassword) {

            try {
                const response = await fetch('http://misha-rn-test.somee.com/api/Password/reset', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({
                        resetToken: resetToken,
                        newPassword: password
                    }),
                    cache: 'no-cache',
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);

                    navigate("/login");

                } else {
                    const errorData = await response.json();
                    console.log('Error:', errorData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }



            setErrorMgs("");
        } else {
            setErrorMgs("הסיסמות אינן תואמות");
        }
    };


    return (
        <Box
            component="main"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: '100vw',
                height: '100vh',
                position: "relative",
                overflow: "hidden",
            }}
        >
            <video
                autoPlay
                loop
                muted
                style={{
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: -1,
                }}
            >
                <source src="https://academiq-assets.s3.eu-north-1.amazonaws.com/homeBckg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
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
                            שחזור סיסמה
                        </Box>
                    </Grid2>
                    {errorMsg && (
                        <Alert severity="error" sx={{ mt: 1 }}>
                            {errorMsg}
                        </Alert>
                    )}
                    <Grid2 item xs={12}>
                        <FilledInput
                            onChange={(event) => setPassword(event.target.value)}
                            fullWidth
                            label="סיסמה חדשה"
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
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />

                    </Grid2>
                    <Grid2 item xs={12}>
                        <FilledInput
                            onChange={(event) => setSubPassword(event.target.value)}
                            fullWidth
                            label="אישור סיסמה"
                            variant="outlined"
                            type={"password"}
                            slotProps={{
                                input: {
                                    style: { direction: "rtl" },
                                },
                            }}
                            sx={{ mb: 2, backgroundColor: "background.paper" }}
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
                            sx={{ mb: 2 }}
                        >
                            שחזר סיסמה
                        </Button>
                    </Grid2>
                </Grid2>
            </Box>


        </Box>

    );
};

export default PasswordReset;
