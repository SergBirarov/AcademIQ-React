import { useState } from 'react'
import { ThemeProviderWrapper } from '../context/ThemeContext';
import { CssBaseline } from '@mui/material';
import theme from '../src/assets/styles/theme';
import AppRouter from '../router/AppRouter';
import Footer from './components/common/Footer';
import './App.css'

function App() {

  return (
    <ThemeProviderWrapper theme={theme}>
      <CssBaseline />
      <AppRouter />
      {/* <Footer /> */}
    </ThemeProviderWrapper>
  )
}

export default App;
