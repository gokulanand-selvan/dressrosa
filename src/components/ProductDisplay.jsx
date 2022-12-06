import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function ProductDisplay({ detialImages,id }) {
  return (
    <>
      <Box display={"grid"} justifyContent={"center"}>
        <Grid gridTemplateColumns={"auto auto"} 
        rowGap="50px"
        columnGap={"50px"}
        gap={"90px"}
        >
          {detialImages.map((i, id) => (
            <Link 
            key={id}
            to={`/product/${id}`}
            >
              <Image
                maxWidth={"30em"}
                maxHeight={"50em"}
                src={i.catImage1}
                alt="img"
                key={id}
              />
            </Link>
          ))}
        </Grid>
      </Box>
    </>
  );
}
