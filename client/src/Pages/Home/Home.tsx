import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Hero from '../../components/mui/home/Hero';
import Highlights from '../../components/mui/home/Highlights';
import Pricing from '../../components/mui/home/Pricing';
import Features from '../../components/mui/home/Features';
import Testimonials from '../../components/mui/home/Testimonials';
import FAQ from '../../components/mui/home/FAQ';
import Footer from '../../components/mui/home/Footer';
import getLPTheme from '../../components/mui/home/getLPTheme';
import Navbar from '../../components/navbar/Navbar';
import useAuthStore from "../../store/authStore"
import { Navigate } from 'react-router-dom';

export default function LandingPage() {
  const authUser = useAuthStore (state => state.user)
  if(authUser)return <Navigate to="/App"/>
  const LPtheme = createTheme(getLPTheme("light"));



  return (
    <>
      <Navbar mode="home"></Navbar>
      <ThemeProvider theme={LPtheme}>
        <CssBaseline />
        <Hero />
        <Box sx={{ bgcolor: 'background.default' }}>
          <Features />
          <Divider />
          <Testimonials />
          <Divider />
          <Highlights />
          <Divider />
          <Pricing />
          <Divider />
          <FAQ />
          <Divider />
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}
