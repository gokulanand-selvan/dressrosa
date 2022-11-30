import React from 'react'
import classic1 from '../components/images/classic1.jpeg'
import classic2 from '../components/images/classic2.jpeg'
import classic3 from '../components/images/classic3.jpeg'
import CardImage from '../components/CardImage';
import { Box, Text } from '@chakra-ui/react'


export default function ProductShow({ image1,  }) {
    return (
        <>
           
            <Box
                backgroundImage={`url(${image1})`}
                backgroundSize="contain"
                // backgroundPositionY="20em"
                paddingTop="50vh"
                width="100%"
                height="150vh"
                fontFamily='"Montserrat",sans-serif'
                zIndex={1}
                position="relative"
            >
                <Text lineHeight="1.7em"
                    fontSize="5xl"
                    fontWeight="extrabold"
                    color="white" style={{ position: "absolute", top: '62%', left: '40%', transform: 'translate(-50%, -50%)', }}>Timeless</Text>
            </Box>
            <Box
                sx={{ backgroundColor: "#000" }}
                paddingBottom="12em"
                zIndex= "1"
            >
                <CardImage
                    const arrayImages={[
                        classic1,
                        classic2,
                        classic3,
                    ]}
                    width="100%"
                    height="70vh"
                />
            </Box>

        </>
    )
}
