import { useContext } from 'react'
import { ThemeContext } from './providers/ThemePageProvider'
import { Box } from '@chakra-ui/react';

//Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Error from './components/AlertError/Error';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Favorites from './pages/Favorites';
import Header from './components/Header/Header';

function App() {
  const {light}=useContext(ThemeContext);

  return (
    <Box height={'100%'} width={'100%'} overflowX={'hidden'}
    bg={`var(--${light ? "light" : "dark"}-mode-bg)`} 
    color={`var(--${light ? "light" : "dark"}-mode-text)`}
    transition="all 0.5s" >
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movie/:id" element={<Movie/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
  </Box>
  )
}

export default App