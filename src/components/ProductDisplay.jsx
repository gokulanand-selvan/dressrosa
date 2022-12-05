import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function ProductDisplay({ detialImages,id }) {
  // console.log(detialImages);
  return (
    <>
      <Box display={"grid"}>
        <Grid gridTemplateColumns={"auto auto"} >
          {detialImages.map((i, id) => (
            <Link 
            key={id}
            to={`/product/${11}`}
            >
              <Image
                maxWidth={"40em"}
                maxHeight={"30em"}
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
