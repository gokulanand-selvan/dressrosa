import './App.css';
import { Box } from '@chakra-ui/react';
// import CardImage from './components/CardImage';
// import GifCard from './components/GifCard';
// import ImageCollage from './components/ImageCollage';
import img1 from "../src/components/images/img1.jpg";
import img2 from "../src/components/images/img2.jpg";
import img3 from "../src/components/images/img3.jpg";
// import img5 from "../src/components/images/img5.jpg";
// import img6 from "../src/components/images/img6.jpg";
// import img7 from "../src/components/images/img7.jpg";
// import tee1 from '../src/components/images/tee1.jpeg';
// import tee2 from '../src/components/images/tee2.jpeg';
// import { Detials } from './components/Detials';
// import feature1 from './/components/images/feature1.jpeg';
// import feature2 from './/components/images/feature2.jpeg';
// import feature3 from './/components/images/feature3.jpeg';
// import Slider from './components/Slider';
// import MainPage from './components/MainPage';
// import Navbar from './components/Navbar';
// import logo from './components/images/logo.webp';
import LandingPage from './components/LandingPage';
import ProductWithTwoCards from './components/ProductWithTwoCards';
import BackgroundHover from './components/BackgroundHover';


function App() {
  return (
    <Box>
<LandingPage />
<BackgroundHover
 const arrayImages={[
  
  img2 ,
  img3 ,
]}
/>
      {/* <CardImage
    const arrayImages={[
      img1 ,
      img2 ,
      img3 ,
    ]}
    width= "25rem"
    height= "25rem"
    /> */}
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
      {/* <Detials
        detialImages={[
          { item: tee1, colors: "red" },
          { item: tee2, colors: "black" },
          { item: tee1, colors: "pink" },
        ]}
        mainHeadding="Classic Crew"
        productDiscription="Midnight Navy 100% Supima Cotton Invisible Stitching Modern Cut" /> */}
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
      {/* <ImageCollage />  */}
    </Box>
  );
}


export default App;