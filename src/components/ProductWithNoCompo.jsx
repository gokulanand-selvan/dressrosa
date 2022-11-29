import { Box, Text } from '@chakra-ui/react'
import React from 'react'


export default function ProductWithNoCompo({ image3 }) {
    return (

        <Box
            backgroundImage={`url(${image3})`}
            // pdddingBottom ="67%"
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
            width="100%"
            height="74em"
            fontFamily='"Montserrat",sans-serif'
            zIndex={1}
            position="relative"
            // marginBottom="10em"
            backgroundColor="#a6a7a7"
        >
            <a href="link">
                <Text lineHeight="1.7em"
                    fontSize="5xl"
                    fontWeight="extrabold"
                    color="white"
                    style={{ position: "absolute", top: '50%', left: '55%', transform: 'translate(-50%, -50%)', }}>
                    Meet Light
                </Text>
                <Text
                    lineHeight="1.7em"
                    fontSize="2xl"
                    fontWeight="extrabold"
                    color="white"
                    position="absolute"
                    top="80%"
                    left="55%"
                    transform='translate(-50%, -50%)'
                >
                    Classic Lite
                </Text>
            </a>
        </Box>
    )
}
