import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function ProductDisplay({ detialImages, title, price, id }) {
  const [whilehover, seWhiletHover] = useState(false);
  // const [navBgColor, setNavBgColor] = useState(false);

  const whenHover = () => {
    seWhiletHover(true);
    // setNavBgColor(true);
  };

  const noHover = () => {
    seWhiletHover(false);
    // setNavBgColor(false);
  };

  const navHoverHandler = {
    backgroundColor: whilehover ? "white" : "black",
    color: whilehover ? "black" : "white",
    textAlign: "center",
  };

  return (
    <>
      <Box
        display={{ base: "flex", md: "grid" }}
        justifyContent={"center"}
        backgroundColor={"black"}
      >
        <Navbar />
        <Grid
          gridTemplateColumns={{ base: "unset", md: "auto auto" }}
          rowGap={{ base: "1", md: "50px" }}
          columnGap={"50px"}
          gap={"90px"}
          maxWidth="100%"
        >
          {detialImages.map((i, id) => (
            <Link key={id} to={`/product/${id}`}>
              <Image
                maxWidth={{ base: "22em", md: "30em" }}
                overflowX={{ base: "auto", md: "unset" }}
                maxHeight={"50em"}
                borderRadius={"2xl"}
                src={i.catImage1}
                alt="img"
                key={id}
                // position="relative"
              />
              <Text
                position={"relative"}
                color={"yellow"}
                bottom={"40%"}
                left={"0%"}
                width={{md:"100%",base:"100%"}}
                textAlign="center"
                zIndex={1}
                lineHeight={{ base: "unset", md: "1.7em" }}
                fontSize={{ base: "2.25em", md: "2.25em" }}
                fontWeight="extrabold"
                fontFamily='"Montserrat",sans-serif'
              >
                {i.title}
              </Text>
              <Text
                style={navHoverHandler}
                display={"grid"}
                alignItems={"center"}
                fontFamily='"Montserrat",sans-serif'
                fontSize={{ base: "unset", md: "25px" }}
                maxWidth={{md:"100%",base:"100%"}}
                width={{md:"100%",base:"100%"}}
                height="60px"
                position={"relative"}
                // color={"white"}
                bottom={{md:"15%",base:"14%"}}
                left={"0%"}
                textAlign="center"
                zIndex={1}
                onMouseEnter={whenHover}
                onMouseLeave={noHover}
                overflowX={{ base: "auto", md: "unset" }}

              >
                Price: {i.price}
              </Text>
            </Link>
          ))}
        </Grid>
      </Box>
    </>
  );
}
