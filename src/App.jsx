import { ThemeProviderWrapper } from '../context/ThemeContext';
import { CssBaseline } from '@mui/material';
import theme from '../src/assets/styles/theme';
import AppRouter from '../router/AppRouter';
import Footer from './components/common/Footer';
import { UserProvider } from '../context/UserContext.jsx';


function App() {

  return (
    <ThemeProviderWrapper theme={theme}>
      {/* <UserProvider> */}
      <CssBaseline />
      <AppRouter />
      {/* <Footer  /> */}
      {/* </UserProvider> */}
    </ThemeProviderWrapper>
  )
}

export default App;
