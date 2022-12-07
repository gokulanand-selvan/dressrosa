import React from "react";
// import classic1 from '../components/images/classic1.jpeg'
// import classic2 from '../components/images/classic2.jpeg'
// import classic3 from '../components/images/classic3.jpeg'
import CardImage from "../components/CardImage";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function ProductShow({
  image,
  title,
  backgroundColor,
  child,
  childArr,
  id,
  navBar,
  subTitle,
  mobimg,
}) {


  
  return (
    <>
      <Box
        backgroundImage={{ md:`url(${image})`,base:`url(${mobimg})`}}
        backgroundSize={{ base: "30em 50em", md: "cover" }}
        backgroundRepeat="no-repeat"
        // backgroundPositionY="20em"
        maxWidth={{base:"100%",md:"unset"}}
        width={{ base: "800px", md: "100%" }}
        height={{ base: "50em", md: "70.9em" }}
        fontFamily='"Montserrat",sans-serif'
        zIndex={1}
        position="relative"

        // marginTop="0"
      >
        {navBar && <Navbar />}

        <Text
          as={Link}
          to={`/${id}`}
          lineHeight={{base:"unset",md:"1.7em"}}
          fontSize={{base:"3.25em",md:"4.25em"}}
          fontWeight="extrabold"
          color="white"
          fontFamily="'Ovo', serif"
          style={{
            position: "absolute",
            top: "62%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {title}
        </Text>

      { child ||  <Text    as={Link}
          to={`/${id}`}
          lineHeight="1.7em"
          fontSize={{md:"2xl", base:"15px"}}
          fontWeight="extrabold"
          color="white"
          sx={{
            position: "absolute",
            top:{md:"53em",base:"52em"},
            left: "50%",
            transform: "translate(-50%, -50%)",
            color:"#f4f3ea"
          }}>
          {subTitle}
        </Text>}
      </Box>
      <Box
        sx={{  backgroundColor: backgroundColor }}
        paddingBottom={{ md:"12em"}}
        zIndex="1"
      >
        <CardImage
          child={child}
          childArr={childArr}
          width="100%"
          height="34.5em"
        />
      </Box>
    </>
  );
}

// eslint-disable-next-line
{
  /* <CardImage
             arrayImages={[
              c1 ,c2,c3
            ]}
            width="100%"
            height="34.5em"
        /> */
}
