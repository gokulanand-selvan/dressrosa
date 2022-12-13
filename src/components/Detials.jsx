import { Box, Flex, Image, Select, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Cartimg from "./images/iconcart.svg";

// import Chekout from "./Chekout";

export const Detials = ({
  productImages,
  mainHeadding,
  productDiscription,
  shippingTime,
  color,
  cart,
  setCart,
  id,
}) => {
  const [sticky, setSticky] = useState(true);

  const ImageRef = useRef();

  useEffect(() => {
    document.addEventListener("scroll", update);
  }, []);

  function update() {
    const elem = ImageRef.current;
    const rect = elem.getBoundingClientRect();
    Math.sign(rect.top) === -1 ? setSticky(false) : setSticky(true);
    // console.log(rect);
  }
  useEffect(() => {
    // console.log(sticky);
  }, [sticky]);

  // add cart

  const Add = () => {
    setCart([
      ...cart,
      {
        dress: "hood",
        price: "$10",
      },
    ]);
  };
  // console.log(cart);

  const navigate = useNavigate();

  return (
    <Box
      display={{ base: "flex", md: "flex" }}
      justifyContent={"start"}
      alignItems={"end"}
      flexDirection={{ base: "column", md: "row" }}
    >
      {/* imageside */}
      <Box
        maxWidth={{ base: "auto", md: "70%" }}
        display={{ base: "flex", md: "unset" }}
        overflowX={{ base: "auto", md: "unset" }}
        flexWrap={{ base: "nowrap", md: "unset" }}
      >
        {productImages.map((detialImg, ItemId) => (
          <Image
            style={{
              objectFit: "cover",
              width: "1700px",
              maxheight: "700px",
              borderRadius: "0px",
              // height:"300px"
            }}
            src={detialImg}
            alt="img"
            key={ItemId}
            ref={ImageRef}
          />
        ))}
      </Box>

      {/* text side */}

      <Box
        height={{ base: "100vh", md: "100vh" }}
        position={{ md: sticky ? "fixed" : "relative" }}
        right={{ md: "0" }}
        top={{ md: "0" }}
        backgroundColor={{ md: "white" }}
        display={{ base: "flex", md: "flex" }}
        flexDirection={{ base: "column", md: "column" }}
        justifyContent={{ md: "end" }}
        width={{ base: "100%", md: "30%" }}
        alignContent={{ md: "start" }}
      >
        <Box
          display={"flex"}
          flexDirection={{ md: "row" }}
          textAlign={"center"}
          justifyContent={"space-Evenly"}
          marginTop={"5em"}
        >
          <h1
            style={{
              fontWeight: "bolder",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "18px",
            }}
          >
            {mainHeadding}
          </h1>
          <Select variant="unstyled" maxWidth={"20%"} size="md">
            <option
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              value="option1"
            >
              Men
            </option>
            <option
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              value="option2"
            >
              Women
            </option>
          </Select>
          <Button onClick={() => navigate("/chekout")}>
            <img src={Cartimg} alt="dd" /> {cart.length}
          </Button>
        </Box>
        <Flex gap={2} justifyContent={"center"}>
          {color.map((colour, index) => {
            return (
              <Box
                key={index}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <button
                  key={index}
                  style={{
                    border: "3px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "10px",
                    backgroundColor: colour,
                  }}
                />
              </Box>
            );
          })}
        </Flex>
        <br />
        <Box
          alignItems={"center"}
          display={"flex"}
          justifyContent={"end"}
          flexDirection={"column"}
          marginTop={"4em"}
        >
          <p
            style={{
              maxWidth: "73%",
              fontWeight: "400",
              fontSize: "30px",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            {productDiscription}
            <br />
            <a
              style={{ color: "blue", fontFamily: "'Montserrat', sans-serif" }}
              href="link"
            >
              Learn More
            </a>
          </p>
        </Box>
        <Box alignItems={"center"} marginBottom={"4em"} marginTop={"5em"}>
          <Box display={"flex"} justifyContent={"space-evenly"}>
            <p
              style={{
                lineHeight: "1.4em",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Shipping
            </p>
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                border: " none",
                flexGrow: 1,
                borderBottom: " 1px dotted black",
                height: "0.8em",
                maxWidth: "20%",
              }}
            />
            <p style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {shippingTime}
            </p>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            marginTop={"10px"}
          >
            <p
              style={{
                lineHeight: "1.4em",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Returns
            </p>
            <div
              style={{
                border: " none",
                flexGrow: 1,
                borderBottom: " 1px dotted black",
                height: "0.8em",
                maxWidth: "20%",
              }}
            />
            <p style={{ fontFamily: "'Montserrat', sans-serif" }}>
              14 Days Easy Returns
            </p>
          </Box>
        </Box>
        <Box
          width={{ base: "100%", md: "500px" }}
          display={"flex"}
          flexDirection={"column"}
        >
          <Box
            height={"70px"}
            backgroundColor={"#fff"}
            border={"1px solid whitesmoke"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <Select variant="unstyled" size="md" maxWidth={"20%"}>
              <option
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                svalue="option1"
              >
                size:xs
              </option>
              <option
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                value="option2"
              >
                size:M
              </option>
            </Select>
            <p>
              <a
                style={{
                  color: "blue",
                  fontFamily: "'Montserrat', sans-serif",
                }}
                href="link"
              >
                Size Guide
              </a>
            </p>
          </Box>
          <Box
            textAlign={"center"}
            height={100}
            backgroundColor={"#1a2e3e"}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Button
            background={"none"}
             onClick={() => {
              Add();
            }}
            
              sx={{
                color: "whitesmoke",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Add For 1500
            </Button>
            <Text
              cursor={"pointer"}
              style={{
                color: "whitesmoke",
                fontFamily: "'Montserrat', sans-serif",
              }}
             
            >
              200 offer when you buy 2
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
