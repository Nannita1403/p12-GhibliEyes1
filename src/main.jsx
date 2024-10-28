import  { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import ThemePageProvider from './providers/ThemePageProvider.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

createRoot(document.getElementById('root')).render( 
<ChakraProvider>
  <ThemePageProvider>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </ThemePageProvider>
</ChakraProvider>
);
