import { ThemeProviderWrapper } from '../context/ThemeContext';
import { CssBaseline } from '@mui/material';
import theme from '../src/assets/styles/theme';
import AppRouter from '../router/AppRouter';
// import Footer from './components/common/Footer';


function App() {
  const { logout } = useAuth();

  //Get new token if expired
  // useEffect(async () => {
  //   const token = localStorage.getItem('token');
  //   const tokenCreated = localStorage.getItem('token_created');

  //   if (token && tokenCreated) {
  //     const timeRemaining = tokenCreated + 30 * 60 - Date.now();
  //     if (timeRemaining <= 0) {
  //       logout();
  //     } else if (timeRemaining < 7) {
  //       try {
  //         const response = await fetch("/api/User/newToken", {
  //           method: "GET",
  //           headers: {
  //             "Authorization": `Bearer ${token}`,
  //           },
  //         });

  //         if (response.ok) {
  //           const data = await response.json();
  //           localStorage.setItem('token', data.token);
  //           localStorage.setItem('token_created', Date.now());
  //         } else {
  //           localStorage.removeItem('token');
  //           localStorage.removeItem('token_created');
  //           logout();
  //         }
  //       } catch (error) {
  //         console.error('Error refreshing token:', error);
  //         logout();
  //       }
  //     }
  //   }
  // }, []);

  return (
    <ThemeProviderWrapper theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProviderWrapper>
  )
}

export default App;