import { Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
// import Detials from "./Detials";


export default function CardImage({ child, childArr, width, height }) {
  
  return (
    <>
      <Box >
        {child && childArr.map((arrImg, index) => (
            <Box
              key={index}
              width={{base:"30em", md:"unset"}}
              maxWidth={{base:"100%",md:"unset"}}
              height={{base:"unset",md:"unset"}}
              paddingBottom={{base:"10em",md:"unset"}}
              display={{base:"-webkit-box",md:"flex"}}
              overflowX={{ base: "auto", md: "unset" }}
              flexWrap={{ base: "nowrap", md: "unset" }}
              justifyContent={{base:"unset",md:"space-evenly"}}
            >
              {arrImg.image.map((e, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    style={{
                      objectFit: "contain",
                      width: width,
                      height: height,
                      borderRadius: "15px",
                    }}
                    src={e}
                    alt="oppf"
                  />
                </motion.div>
              ))}
            </Box>
          ))}
      </Box>
    </>
  );
}

// <motion.div
// key={arrImg.childId}
//   whileHover={{scale:0.9}}
//   transition={{duration:0.5}}
//   // initial={{x:1200}}
//   // animate={{ x: 2, }}
//   >
//   <img
//   key={arrImg.id}
// style={{
//   objectFit: "contain",
//   width: width,
//   height: height,
//   borderRadius:"15px",

// }}
//     src={arrImg}
//     alt="ooop"
//   />
// </motion.div>
