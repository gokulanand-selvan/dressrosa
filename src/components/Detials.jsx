import { Box, Image, Select } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
// import img1 from "../components/images/img1.jpg";
// import img2 from "../components/images/img2.jpg";
import { motion } from "framer-motion";

export default function Detials({ detialImages, mainHeadding, productDiscription }) {
    const [sticky, setSticky] = useState(true);

    const ImageRef = useRef();

    useEffect(() => {
        document.addEventListener("scroll", update);
    }, []);

    function update() {
        const elem = ImageRef.current;
        const rect = elem.getBoundingClientRect();
        Math.sign(rect.top) === -1 ? setSticky(false) : setSticky(true);
        console.log(rect);
    }
    useEffect(() => {
        console.log(sticky);
    }, [sticky]);

    // const position = sticky ? "fixed"  = "relative"

    return (
        <Box
            display={{ base: "flex", md: "flex" }}
            justifyContent={"start"}
            alignItems={"end"}
            flexDirection={{ base: "column", md: "row" }}
           

        >
            {/* imageside */}
            <Box maxWidth={{ base: "auto", md: "70%" }}
                display={{ base: "flex", md: "unset" }}
                overflowX={{base:"auto",md:"unset"}}
                flexWrap={{base:"nowrap",md:"unset"}}
            >
                {detialImages.map((detialImg, index) => (
                    <Image 
                        style={{
                            objectFit: "cover",
                            width: "1700px",
                            maxheight: "700px",
                            borderRadius: "0px",
                        }}
                        src={detialImg.item}
                        alt="img"
                        key={index}
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
                display={{ base:"flex",md: "flex" }}
                flexDirection={{ base:"column",md: "column" }}
                justifyContent={{ md: "end" }}
                width={{ base:"100%",md: "30%" }}
                alignContent={{ md: "start" }}
            >
                <Box display={"flex"} flexDirection={{md:"row"}} textAlign={"center"} justifyContent={"space-Evenly"} marginTop={"5em"}  >
                    <h1 style={{ fontWeight: "bolder", fontFamily: "'Montserrat', sans-serif", fontSize: "18px" }}>{mainHeadding}</h1>
                    <Select variant="unstyled" maxWidth={"20%"} size="md">
                        <option style={{ fontFamily: "'Montserrat', sans-serif" }} value="option1">Men</option>
                        <option style={{ fontFamily: "'Montserrat', sans-serif" }} value="option2">Women</option>
                    </Select>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                    }} >
                    {detialImages.map((color, index) => {
                        return (
                            <motion.div
                                className="box"
                                whileHover={{ scale: 0.7 }}
                                transition={{ type: " inertia", stiffness: 500, damping: 10 }}
                                style={{ display: "flex", flexDirection: "row" }} >
                                <button
                                    key={index}
                                    style={{
                                        border: "3px",
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "10px",
                                        backgroundColor: color.colors,
                                        // transform: " rotateX(0deg) rotate(0deg) perspective(2em)",
                                    }} />
                            </motion.div>
                        );
                    })}
                </Box>
                <br />
                <Box alignItems={"center"} display={"flex"} justifyContent={"end"} flexDirection={"column"} marginTop={"4em"}>
                    <p style={{ maxWidth: "73%", fontWeight: "400", fontSize: "30px", fontFamily: "'Montserrat', sans-serif" }}>
                        {productDiscription}
                    </p>
                    <a style={{ color: "blue", fontFamily: "'Montserrat', sans-serif" }} href="link">
                        Learn More
                    </a>
                </Box>
                <Box alignItems={"center"} marginBottom={"4em"} marginTop={"5em"}  >
                    <Box display={"flex"} justifyContent={"space-evenly"}   >
                        <p style={{ lineHeight: '1.4em', fontFamily: "'Montserrat', sans-serif" }}>
                            Shipping
                        </p>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", border: " none", flexGrow: 1, borderBottom: " 1px dotted black", height: "0.8em", maxWidth: "20%", }} />
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>Ships in 10 hours</p>
                    </Box>
                    <Box display={"flex"} justifyContent={"space-evenly"} marginTop={"10px"} >
                        <p style={{ lineHeight: '1.4em', fontFamily: "'Montserrat', sans-serif" }}>
                            Returns
                        </p>
                        <div style={{ border: " none", flexGrow: 1, borderBottom: " 1px dotted black", height: "0.8em", maxWidth: "20%" }} />
                        <p style={{ fontFamily: "'Montserrat', sans-serif" }}>14 Days Returns</p>
                    </Box>
                </Box>
                <Box width={{base:"100%",md:"500px"}} display={'flex'} flexDirection={"column"}>
                    <Box height={"70px"} backgroundColor={'#fff'} border={'1px solid whitesmoke'} display={"flex"} alignItems={"center"} justifyContent={'space-around'}>
                        <Select variant="unstyled" size="md" maxWidth={"20%"}>
                            <option style={{ fontFamily: "'Montserrat', sans-serif" }} svalue="option1">size:xs</option>
                            <option style={{ fontFamily: "'Montserrat', sans-serif" }} value="option2">size:M</option>
                        </Select>
                        <p><a style={{ color: "blue", fontFamily: "'Montserrat', sans-serif" }} href="link">Size Guide</a></p>
                    </Box>
                    <Box textAlign={"center"} height={100} backgroundColor={'#1a2e3e'} display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={'center'}>
                        <p><a style={{ color: "whitesmoke", fontFamily: "'Montserrat', sans-serif" }} href="link"> Add For 1500 </a></p>
                        <p style={{ color: "whitesmoke", fontFamily: "'Montserrat', sans-serif" }}>200 offer when you buy 2</p>
                    </Box>
                </Box>
            </Box>
        </Box>

    );
}
