import React from "react";
import { useState } from "react";
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
import SignIn from "../components/auth/SignIn";
import ForgotPassword from "../components/auth/ForgotPassword";
import { motion } from "framer-motion"; // Framer Motion for animation

const LoginPage = () => {

  const [showForgotPassword, setShowForgotPassword] = useState(false);

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

      <motion.div
        initial={{ x: showForgotPassword ? "100%" : "0%" }}
        animate={{ x: showForgotPassword ? "100%" : "0%" }}
        transition={{ duration: 0.5 }}
        exit={{ x: "100%" }}

        style={{
          position: "absolute",
          width: "50%",
          left: showForgotPassword ? "-100%" : "0%",
        }}      >
        <SignIn onForgotPassword={() => setShowForgotPassword(true)} />
      </motion.div>

      <motion.div
        initial={{ x: showForgotPassword ? "100%" : "0%" }}
        animate={{ x: showForgotPassword ? "100%" : "0%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5 }}
        style={{
          position: "absolute",
          width: "50%",
          left: showForgotPassword ? "0%" : "100%",
        }}
      >
        <ForgotPassword onBack={() => setShowForgotPassword(false)} />
      </motion.div>
    </Box>

  );
};

export default LoginPage;
