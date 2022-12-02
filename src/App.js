import './App.css';
import { Box, Card } from '@chakra-ui/react';
import LandingPage from './components/LandingPage';
import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

import { Detials } from './components/Detials';
// import CardImage from './components/CardImage';
// import ProductShow from './components/ProductShow';
import GifCard from './components/GifCard';
import ImageCollage from './components/ImageCollage';
// import img1 from "../src/components/images/img1.jpg";
// import img2 from "../src/components/images/img2.jpg";
// import img3 from "../src/components/images/img3.jpg";
// import img5 from "../src/components/images/img5.jpg";
// import img6 from "../src/components/images/img6.jpg"; 
// import img7 from "../src/components/images/img7.jpg";

import ProductList from './components/Pages/ProductList';
// import Slider from './components/Slider';
// import MainPage from './components/MainPage';
// import Navbar from './components/Navbar';
// import logo from './components/images/logo.webp';
// import ProductWithTwoCards from './components/ProductWithTwoCards';
// import tee1 from '../src/components/images/tee1.jpeg';
// import tee2 from '../src/components/images/tee2.jpeg';
// import featurev1 from '../src/components/videos/hammofeature.mp4'
// import featurev2 from '../src/components/videos/hammofeature2.mp4'
// import featurev3 from '../src/components/videos/hammofeature3.mp4'

import { category, product } from './Data';
function App() {

  return (
    <Box>
      {/* <Routes>
        <Route path="/" element={<LandingPage />} >
          <Route path="/id" element={<Detials />} />
<Route path="/:id" element={  <GifCard
        gifImages={[
          { image: feature1, initial: { x: 1200, y: -1000 }, animate: { x: 2, y: 2 }, imgtransition: { duration: 2 } },
          { image: feature2, initial: { x: 1200 }, animate: { x: 2, y: 2 }, imgtransition: { duration: 2 } },
          { image: feature3, initial: { y: 1000, x: -1200 }, animate: { x: 2, y: 2 }, imgtransition: { duration: 2 } },
        ]}
        width="25rem"
        height="25rem"
        />} />
        </Route>
   <Route path='/footer' element={   <Footer/> }/>
      </Routes> */}
      <Routes>
        <Route path="/" element={<LandingPage  category={category}/>} >
        </Route>
        <Route path="/:id" element={<ProductList product={product} />} />
        {/* <Route path="/:id" element={<ImageCollage /> } /> */}
      </Routes>



      {/* <CardImage
    const arrayImages={[
      img1 ,
      img2 ,
      img3 ,
    ]}
    width= "25rem"
    height= "25rem"
    /> */}

      {/* <Detials
        detialImages={[
          { item: tee1, colors: "red" },
          { item: tee2, colors: "black" },
          { item: tee1, colors: "pink" },
        ]}
        mainHeadding="Classic Crew"
        shippingTime:"Ships in a Week",
        productDiscription="Midnight Navy 100% Supima Cotton Invisible Stitching Modern Cut" /> */}

      {/* <GifCard 
     const gifImages={[
       img5 ,
      img6 ,
      img7 ,
    ]}
    width= "25rem"
    height= "25rem"
    /> */}
      {/* <Slider 
          employeeImage ={ [
            {identity:"BaluDas" , posting:"customer" , Review: "  ❝Service is very Satisfactoary❞ " } ,
            { identity: "RiyaRaj" , posting:"customer" , Review: " ❝Good Response❞ " },
            { identity: "Ramesh" , posting:"customer" , Review: " ❝Quick Delivery❞ "},
          ]}
        /> */}
      {/* <GifCard
        gifImages={[
          { image: feature1, initial: { x: 1200, y: -1000 }, animate: { x: 2, y: 2 }, imgtransition: { duration: 2 } },
          { image: feature2, initial: { x: 1200 }, animate: { x: 2, y: 2 }, imgtransition: { duration: 2 } },
          { image: feature3, initial: { y: 1000, x: -1200 }, animate: { x: 2, y: 2 }, imgtransition: { duration: 2 } }
        ]}
        width="25rem"
        height="25rem"
      /> */}
      {/* <CardImage
        const arrayImages={[
          img1,
          img2,
          img3,
        ]}
        width="25rem"
        height="25rem"
      /> */}
      {/* <MainPage /> */}
      {/* <ImageCollage /> */}
    </Box>
  );
}


export default App;