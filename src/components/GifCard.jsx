import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export default function GifCard( {gifImages, width ,height } ) {
  return (
    <>
        <motion.div >
      <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
      {gifImages.map((arrImg,index) =>(
   <img style={{ objectFit: "cover",width: width,height:height,borderRadius:"10px" }} src={arrImg} alt="ooop" key={index} />
      ))}
  </Box>
      </motion.div>
    </>
  );
}
