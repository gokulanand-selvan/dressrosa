import { Box, Text } from '@chakra-ui/react'
import React from 'react'
// import Navbar from './Navbar'
// import logo from '../components/images/logo.webp'
import { Navigate } from 'react-router-dom'

export default function ProductWithNavbar({ image2, tilte1 }) {
    return (
        <>
            <Box
                backgroundImage={`url(${image2})`}
                backgroundSize="cover"
                width="100%"
                height="100vh"
                fontFamily='"Montserrat",sans-serif'
                position="relative"
                onClick={() => Navigate("/hammoHoodie")}
            >
                <a href="klow">
                    {/* <Navbar logo={logo} /> */}
                    <Text lineHeight="1.7em"
                        fontSize="5xl"
                        fontWeight="extrabold"
                        color="white" style={{ position: "absolute", top: "90%", left: '55%', transform: 'translate(-50%, -50%)', }}>{tilte1}</Text>
                </a>
            </Box>
        </>
    )
}
