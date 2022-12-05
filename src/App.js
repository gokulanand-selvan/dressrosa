import './App.css';
import { Box, } from '@chakra-ui/react';
import LandingPage from './components/Pages/LandingPage';
import {  Route, Routes } from 'react-router-dom';
import ProductList from './components/Pages/ProductList';
import { category, product, productDetials } from './Data';
import DetialPage from './components/Pages/DetialPage';


function App() {

  return (
    <Box>
      <Routes>
        <Route path="/" element={<LandingPage  category={category}/>} >
        </Route>
        <Route path="/:id" element={<ProductList product={product} />} />        
        <Route path="/product/:detials" element={<DetialPage productDetials={productDetials} />} />
      </Routes>
    </Box>
  );
}


export default App;