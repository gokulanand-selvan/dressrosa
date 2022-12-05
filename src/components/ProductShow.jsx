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
}) {
  return (
    <>
      <Box
        backgroundImage={`url(${image})`}
        backgroundSize={{ base: "cover", md: "cover" }}
        backgroundRepeat="no-repeat"
        // backgroundPositionY="20em"
        width={{ base: "unset", md: "100%" }}
        height={{ base: "unset", md: "70.9em" }}
        fontFamily='"Montserrat",sans-serif'
        zIndex={1}
        position="relative"

        // marginTop="0"
      >
        {navBar && <Navbar />}

        <Text
          as={Link}
          to={`/${id}`}
          lineHeight="1.7em"
          fontSize="5xl"
          fontWeight="extrabold"
          color="white"
          style={{
            position: "absolute",
            top: "62%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {title}
        </Text>
      </Box>
      <Box
        sx={{ backgroundColor: backgroundColor }}
        paddingBottom="12em"
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
