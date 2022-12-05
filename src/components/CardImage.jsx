import { Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
// import Detials from "./Detials";


export default function CardImage({ child, childArr, width, height }) {
  return (
    <>
      <Box>
        {/* condition chek for card display */}
        {child && childArr.map((arrImg, index) => (
            <Box
              key={index}
              sx={{ display: "flex", justifyContent: "space-evenly" }}
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
