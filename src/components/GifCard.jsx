// import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export default function GifCard( {gifImages, width ,height } ) {
  return (
    <>
        <motion.div>
      <motion.div
      // initial={gifImages.initial}
      // animate={{ x: 2, }}
      // transition={{ duration:2 }}
      style={{display:"flex",justifyContent:"space-evenly",marginTop:"5em"}}>
      {gifImages.map((arrImg,index) =>(
         <motion.div
         initial={arrImg.initial}
         animate={arrImg.animate}
         transition={arrImg.imgtransition}
         >
   <img style={{ objectFit: "cover",width: width,height:height,borderRadius:"10px" }} src={arrImg.image} alt="ooop" key={index} />
   </motion.div>
 ))}
  </motion.div>
      </motion.div>
    </>
  );
}
