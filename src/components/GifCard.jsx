import { Box } from "@chakra-ui/react";
import React from "react";

export default function GifCard( {gifImages, width ,height } ) {
  return (
    <>
      <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
      {gifImages.map((arrImg,index) =>(
   <img style={{ objectFit: "cover",width: width,height:height,borderRadius:"10px" }} src={arrImg} alt="ooop" key={index} />
      ))}
  </Box>
    </>
  );
}
