import { Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
// import Detials from "./Detials";

export default function CardImage({ arrayImages, width, height }) {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        {arrayImages.map((arrImg, index) => (
          <motion.div
            // drag
            // dragConstraints={{
            //   top: -50,
            //   left: -50,
            //   right: 50,
            //   bottom: 50,
            // }}
            whileHover={{ scale: 0.9 }}
            transition={{ duration:0.9 }}
            initial={{x:200}}
            animate={{ x: 2, }}>
            <img
              style={{
                objectFit: "cover",
                width: width,
                height: "50vh",
                borderRadius: "50px",
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
