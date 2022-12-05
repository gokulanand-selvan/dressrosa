import React from 'react'
import { motion } from "framer-motion";
import { Box } from '@chakra-ui/react';


export default function BackgroundHover({ arraySolidImages }) {
    return (
        <>
            <Box
                style={{ display: "flex", justifyContent: "space-around", flexDirection: "row" }}
                position="absolute"
                top="75%"
                left="50%"
                transform='translate(-50%, -50%)'
                width="100%"
            >
                {arraySolidImages.map((arrImg, index) => (
                    <motion.div
                        whileHover={{ scale: 0.9 }}
                        transition={{ duration: 0.5 }}

                    >
                        <img

                            style={{
                                objectFit:"cover",
                                width: "40em",
                                height: "25em",
                                borderRadius: "15px",
                            }}
                            src={arrImg}
                            alt="ooop"
                            key={index}
                        />
                    </motion.div>
                ))}
            </Box>

        </>
    )
}
