import { Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
// import Detials from "./Detials";

export default function CardImage( {arrayImages, width ,height } ) {

  return (
    <>
      <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
      
          {arrayImages.map((arrImg,index) =>(
              <motion.div
              className="box"
              whileHover={{ scale: 0.90 }}
              transition={{ type: "", stiffness: 500, damping: 10 }} 
            >
       <img style={{ objectFit: "cover",width: width,height:"50vh",borderRadius:"50px" }} src={arrImg} alt="ooop" key={index} />
        </motion.div>
          ))}
      </Box>
    </>
  );
}
