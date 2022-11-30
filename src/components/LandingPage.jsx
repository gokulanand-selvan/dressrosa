import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import LPimage1 from "./images/LPbackground1.jpeg"
import LPimage2 from "./images/LPbackground2.jpeg";
import Navbar from '../components/Navbar';
import logo from '../components/images/logo.webp'
import lite1 from '../components/images/lite1.jpeg'
import ProductShow from './ProductShow';
import ProductWithNoCompo from './ProductWithNoCompo';
import ProductWithTwoCards from './ProductWithTwoCards';
import solid from '../components/images/solid1.jpeg'
import solidcard1 from '../components/images/solid1.jpeg'
import shorts from '../components/images/shorts.jpeg'
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate= useNavigate()
    return (
        <>
            <Box
                backgroundImage={`url(${LPimage2})`}
                backgroundSize="cover"
                width="100%"
                height="100vh"
                fontFamily='"Montserrat",sans-serif'
                position="relative"
                onClick={()=>navigate("/hammoHoodie") }
            >
                <a href="klow">
                    <Navbar logo={logo} />
                    <Text lineHeight="1.7em"
                        fontSize="5xl"
                        fontWeight="extrabold"
                        color="white" style={{ position: "absolute", top: "90%", left: '55%', transform: 'translate(-50%, -50%)', }}>The Ultimate Hoodie</Text>
                </a>
            </Box>

            <ProductShow
                image1={LPimage1}
            />
            <ProductWithNoCompo
            backgroundColor ={"#a6a7a7"}
                image3={lite1}
                title={"Meet Light"}
            />
            <ProductWithTwoCards
                image4={solid}
                solidcard1 ={solidcard1}
            />
            <ProductWithNoCompo
            backgroundColor = {"#fcfafa"}
            image3={shorts} 
            title={"Game On"}/>
        </>
    )
}












// eslint-disable-next-line 
{/* <Box
    backgroundImage={`url(${LPimage2})`}
    backgroundSize="cover"
    width="100%"
    height="100vh"
    fontFamily='"Montserrat",sans-serif'
    position="relative"
>
    <a href="klow">
        <Navbar logo={logo} />
        <Text lineHeight="1.7em"
            fontSize="5xl"
            fontWeight="extrabold"
            color="white" style={{ position: "absolute", top: "90%", left: '55%', transform: 'translate(-50%, -50%)', }}>The Ultimate Hoodie</Text>
    </a>
</Box>
<Box
    backgroundImage={`url(${LPimage1})`}
    backgroundSize="cover"
    backgroundPositionY="20em"
    paddingTop="50vh"
    width="100%"
    height="100em"
    fontFamily='"Montserrat",sans-serif'
>
    <Text lineHeight="1.7em"
        fontSize="5xl"
        fontWeight="extrabold"
        color="white" style={{ position: "absolute", top: "65%", left: '50%', transform: 'translate(-50%, -50%)', }}>Timeless</Text>
</Box>

<Box
    sx={{ backgroundColor: "#000" }}
    paddingBottom='25em'
    height="100vh"
    width="100%"
// zIndex="-1"
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
</Box> */}