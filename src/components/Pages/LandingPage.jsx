import React from "react";

import ProductShow from "../ProductShow";

import { Box } from "@chakra-ui/react";
import Footer from "../Footer"


export default function LandingPage({ category }) {
  return (
    <>
     
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
            subTitle={product.subTitle}
            mobimg={product.mobimg}
          />
        ))}
      <Footer />
    </>
  );
}
