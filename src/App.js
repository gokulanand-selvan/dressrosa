import './App.css';
import { Box, } from '@chakra-ui/react';
import LandingPage from './components/Pages/LandingPage';
import {  Route, Routes } from 'react-router-dom';
import ProductList from './components/Pages/ProductList';
import { category, product, productDetials, } from './Data';
import DetialPage from './components/Pages/DetialPage';
import Chekout from './components/Chekout';
import { useState } from "react";



function App() {
const [cart,setCart] = useState([])
  return (
    <Box>
      <Routes>
        <Route path="/" element={<LandingPage  category={category}/>} ></Route>
        <Route path="/:id" element={<ProductList product={product} />} />        
        <Route path="/product/:detials" element={<DetialPage productDetials={productDetials} cart={cart} setCart={setCart} />} />
        <Route path="/chekout" element={<Chekout cart={cart} />} ></Route>
      </Routes>
    </Box>
  );
}


export default App;