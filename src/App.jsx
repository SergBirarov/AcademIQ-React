import { ThemeProviderWrapper } from '../context/ThemeContext';
import { CssBaseline } from '@mui/material';
import theme from '../src/assets/styles/theme';
import AppRouter from '../router/AppRouter';
// import Footer from './components/common/Footer';


function App() {

  return (
    <ThemeProviderWrapper theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProviderWrapper>
  )
}

export default App;
