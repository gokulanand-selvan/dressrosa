import React from 'react'
import { Box, Text } from '@chakra-ui/react'
// import CardImage from './CardImage'
// import classic1 from '../components/images/classic1.jpeg'
// import classic2 from '../components/images/classic2.jpeg'
import BackgroundHover from '../components/BackgroundHover';
import solidcard1 from '../components/images/solidcard1.jpeg'
import solidcard2 from '../components/images/solidcard2.jpeg'


export default function ProductWithTwoCards({ image4, }) {
    return (
        <>

            <Box
                backgroundImage={`url(${image4})`}
                backgroundSize="contain"
                backgroundRepeat="no-repeat"
                width="100%"
                height="104em"
                fontFamily='"Montserrat",sans-serif'
                zIndex={1}
                position="relative"
                backgroundColor="black"
            // marginBottom="10em"

            >
                <a href="link">
                    <Text lineHeight="1.7em"
                        fontSize="5xl"
                        fontWeight="extrabold"
                        color="white"
                        style={{ position: "absolute", top: '50%', left: '55%', transform: 'translate(-50%, -50%)', }}>
                        Solid Stuff
                    </Text>
                    <Box
                        // sx={{ backgroundColor: "red" }}
                        // paddingBottom="5em"
                        zIndex="1"
                    >
                        <BackgroundHover
                            arraySolidImages={[
                                solidcard1, solidcard2
                            ]}
                        />
                      
                    </Box>
                </a>
            </Box>


            {/* <main>
                <section style={{ position: "relative", textAlign: "center", display: "block" }}>
                    <a href="image">
                        <Box
                            backgroundImage={`url(${image4})`}
                            backgroundSize="cover"
                            backgroundRepeat="no-repeat"
                            // backgroundPositionY="20em"
                            paddingTop="50vh"
                            width="100%"
                            height="150vh"
                            fontFamily='"Montserrat",sans-serif'
                            zIndex={1}
                            position="relative" >
                            <Box>
                                <Heading size="4xl">
                                    Solid Stuff
                                </Heading>
                            </Box>
                        </Box>
                    </a>
                </section>
                <section
                    style={{ position: "relative" }}
                >
                    <Box display="flex" >
                        <Box >
                        <a href="image">
                            <Box backgroundImage={`url(${solidcard1})`
                            } 
                            width="50%" height="50em" >
                            </Box>
                        </a>
                        <Box>
                            <Heading size="4xl">
                                Unit HD
                            </Heading>
                        </Box>
                        </Box>
                    </Box>
                </section>
            </main> */}

        </>
    )
}
