import { Box,Image, Select } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import img1 from "../components/images/img1.jpg";
import img2 from "../components/images/img2.jpg";
import { motion } from "framer-motion";

export default function Detials({detialImages,mainHeadding,productDiscription}) {
    const [sticky, setSticky] = useState(false);

    const ImageRef = useRef();

    useEffect(() => {
        document.addEventListener("scroll", update);
    }, []);

    function update() {
        const elem = ImageRef.current;
        const rect = elem.getBoundingClientRect();
        Math.sign(rect.bottom) === -1 ? setSticky(false) : setSticky(true);
        // console.log(rect );
    }
    useEffect(() => {
        console.log(sticky);
    }, [sticky]);

    return (
        <Box sx={{ display: "flex", justifyContent: "start"}}>
            <Box width={"65%"} >
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
                sx={{
                    height: "100vh",
                    position: sticky ? "fixed" : "relative",
                    right: "0",
                    top: "0",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    maxWidth:"30%",
                }}>
                <Box display={"flex"} flexDirection={"row"} textAlign={"center"}  justifyContent={"space-Evenly"} >
                    <h1 style={{ fontWeight: "bolder" }}>{mainHeadding}</h1>
                    <Select variant="unstyled" maxWidth={"20%"} size="md">
                        <option value="option1">Men</option>
                        <option value="option2">Women</option>
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
                <Box alignItems={"center"} display={"flex"} justifyContent={"end"} flexDirection={"column"}>
                    <p style={{ maxWidth: "73%" ,fontWeight:"400",fontSize:"30px",}}>
                      {productDiscription}
                    </p>
                    <a style={{ color: "blue" }} href="link">
                        Learn More
                    </a>
                </Box>
                <Box  alignItems={"center"} >
                    <Box display={"flex"} justifyContent={"space-evenly"} >
                        <p style={{ lineHeight: '1.4em' }}>
                            Shipping
                        </p>
                        <div style={{ border: " none", flexGrow: 1, borderBottom: " 1px dotted black", height: "0.8em", maxWidth: "20%", }} />
                        <p>Ships in 10 hours</p>
                    </Box>
                    <Box display={"flex"} justifyContent={"space-evenly"} >
                        <p style={{ lineHeight: '1.4em' }}>
                            Returns
                        </p>
                        <div style={{ border: " none", flexGrow: 1, borderBottom: " 1px dotted black", height: "0.8em", maxWidth: "20%" }} />
                        <p>14 Days Returns</p>
                    </Box>
                </Box>
                <Box width={"500px"} display={'flex'} flexDirection={"column"}>
                    <Box height={"70px"} backgroundColor={'#fff'} border={'1px solid whitesmoke'} display={"flex"} alignItems={"center"} justifyContent={'space-around'}>
                        <Select variant="unstyled" size="md" maxWidth={"20%"}>
                            <option svalue="option1">size:xs</option>
                            <option value="option2">size:M</option>
                        </Select>
                        <p><a style={{color:"blue"}} href="link">Size Guide</a></p>
                    </Box>
                    <Box textAlign={"center"} height={100} backgroundColor={'#1a2e3e'} display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={'center'}>
                        <p><a style={{ color: "whitesmoke" }} href="link"> Add For 1500 </a></p>
                        <p style={{ color: "whitesmoke" }}>200 offer when you buy 2</p>
                    </Box>
                </Box>
            </Box>
        </Box>

    );
}
