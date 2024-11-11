import { useContext } from 'react'
import { ThemeContext } from './providers/ThemePageProvider'
import { Box } from '@chakra-ui/react';

//Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
import Error from './components/AlertError/Error';
import { Route, Routes } from 'react-router-dom';

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
        <Route path="*" element={<Error/>} />
      </Routes>
      {/* <Footer/> */}
  </Box>
  )
}

export default App