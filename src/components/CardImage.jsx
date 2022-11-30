import { Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
// import Detials from "./Detials";

export default function CardImage({ arrayImages, width, height }) {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-evenly",}}>
        {arrayImages.map((arrImg, index) => (
          <motion.div
          key={index}
            whileHover={{scale:0.9}}
            transition={{duration:0.5}}
            // initial={{x:1200}}
            // animate={{ x: 2, }}
            >
            <img
              style={{
                objectFit: "contain",
                width: width,
                height: height,
                borderRadius:"15px"
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
