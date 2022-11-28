import { Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
// import Detials from "./Detials";

export default function CardImage({ arrayImages, width, height }) {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-evenly",marginTop:"5em" }}>
        {arrayImages.map((arrImg, index) => (
          <motion.div
            // drag
            // dragConstraints={{
            //   top: -50,
            //   left: -50,
            //   right: 50,
            //   bottom: 50,
            // }}
            
            initial={{x:1200}}
            animate={{ x: 2, }}
            >
            <motion.img
            whileHover={{ scale:[ 1 , 1.4,1.4, 1,1],borderRadius:["20%","20%","50%","50%","20"],rotate:[0,0,360,360,0,]}}
            transition={{duration:2,yoyo:"Infinity" }}
              style={{
                objectFit: "cover",
                width: width,
                height: "50vh",
                // borderRadius: "50px",
              }}
              src={arrImg}
              alt="ooop"
              key={index}
            />
          </motion.div>
        ))}
      </Box>
    </>
  );
}
