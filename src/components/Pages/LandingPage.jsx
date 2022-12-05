import React from "react";

import ProductShow from "../ProductShow";

import { Box } from "@chakra-ui/react";

export default function LandingPage({ category }) {
  return (
    <>
      <Box>
        {category.map((product) => (
          <ProductShow
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            backgroundColor={product.backgroundColor}
            child={product.child}
            childArr={product.childArr}
            navBar={product.navBar}
          />
        ))}
      </Box>
    </>
  );
}
