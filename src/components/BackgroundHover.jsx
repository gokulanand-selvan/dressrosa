import React from 'react'
import { motion } from "framer-motion";
import { Box } from '@chakra-ui/react';


export default function BackgroundHover({arrayImages}) {
    return (
        <>
            <motion.div
                whileHover={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
                style={{display:"flex"}}
            >
                    {arrayImages.map((arrImg, index) => (
                <Box 
                backgroundImage = {`url(${arrImg})`}
                width="50%"
                height="10em"
                backgroundSize="cover"
                >
                        {/* <img

                            style={{
                                objectFit: "cover",
                                width: width,
                                height: height,
                                borderRadius: "15px"
                            }}
                            src={arrImg}
                            alt="ooop"
                            key={index}
                        /> */}

                </Box>
                    ))}
            </motion.div>
        </>
    )
}
