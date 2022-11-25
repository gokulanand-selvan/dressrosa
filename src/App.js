import './App.css';
import { Box } from '@chakra-ui/react';
import CardImage from './components/CardImage';
import GifCard from './components/GifCard';
import ImageCollage from './components/ImageCollage';
import img1 from "../src/components/images/img1.jpg";
import img2 from "../src/components/images/img2.jpg";
import img3 from "../src/components/images/img3.jpg";
import img5 from "../src/components/images/img5.jpg";
import img6 from "../src/components/images/img6.jpg";
import img7 from "../src/components/images/img7.jpg";
import tee1 from '../src/components/images/tee1.jpeg';
import tee2 from '../src/components/images/tee2.jpeg';
import Detials from './components/Detials';


function App() {
  return (
    <Box>
    
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
{/* <ImageCollage />  */}
      <Detials
      const detialImages = {[
        { item: tee1, colors: "red" },
        { item: tee2, colors: "black" },
    ]}
    mainHeadding="Classic Crew"
    productDiscription="Midnight Navy 100% Supima Cotton Invisible Stitching Modern Cut"
      />


      <GifCard 
     const gifImages={[
       img5 ,
      img6 ,
      img7 ,
    ]}
    width= "25rem"
    height= "25rem"
    /> <GifCard 
    const gifImages={[
      img5 ,
     img6 ,
     img7 ,
   ]}
   width= "25rem"
   height= "25rem"
   /> 
   </Box>
  );
}

export default App;
