// import { Box, Text } from "@chakra-ui/react";
import React from "react";

import Navbar from "../components/Navbar";
import logo from "../components/images/logo.webp";
import ProductShow from "./ProductShow";
// import ProductWithNoCompo from "./ProductWithNoCompo";
// import ProductWithTwoCards from "./ProductWithTwoCards";

import { Outlet, useParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
// import ProductWithNavbar from "./ProductWithNavbar";

export default function LandingPage({category}) {


  return (
    <>
<Box  >
  <Navbar logo={logo} />
      {category.map((product) => (
        <ProductShow
        key={product.id}
        id={product.id}
        image={product.image}
        title={product.title}
        backgroundColor={product.backgroundColor}
        child={product.child}
        childArr={product.childArr}
        />
        ))}
</Box>
    </>
  );
}
