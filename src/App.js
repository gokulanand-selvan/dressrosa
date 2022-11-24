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


function App() {
  return (
   <Box>
    <CardImage
    const arrayImages={[
      img1 ,
      img2 ,
      img3 ,
    ]}
    width= "25rem"
    height= "25rem"
    />
    <GifCard 
     const gifImages={[
      img5 ,
      img6 ,
      img7 ,
    ]}
    width= "25rem"
    height= "25rem"
    />
<ImageCollage /> 
   </Box>
  );
}

export default App;
