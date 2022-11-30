import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Box, } from '@chakra-ui/react'


export default function Navbar({ logo }) {
    const [whilehover, seWhiletHover] = useState(false)
    const [navBgColor,setNavBgColor] = useState(false)

    const whenHover = () => {
        seWhiletHover(true);
        setNavBgColor(true)
    }

    const noHover = () => {
        seWhiletHover(false)
        setNavBgColor(false)
    }

    const navHoverHandler = {
        backgroundColor: whilehover ? "white" : "unset",
        color: whilehover ? "black" : "white",
        textAlign: "center",

    }
    const navBoxHandler = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        listStyleType: "none",
        alignItems: "center",
        width: "auto",
        textAlign: "center",
        fontFamily: "'Montserrat', sans-serif",
        backgroundColor: navBgColor ? 'white' : 'unset',
        height:"6em"
    }

    return (
        <>
            <Box>
                <motion.ul
                    style={navBoxHandler}
                    // onMouseEnter={whenHover}
                    // onMouseLeave={noHover}
                >
                    <motion.li
                        style={{ paddingLeft: "100px", fontWeight: "bold", lineHeight: "1.7em", fontSize: "20px" }}
                    >
                        <a style={navHoverHandler} onMouseEnter={whenHover} onMouseLeave={noHover} href="link">  Shop </a>
                    </motion.li>
                    <motion.li
                        style={{ paddingLeft: "50px", fontWeight: "bold", lineHeight: "1.7em", fontSize: "20px", }}
                    >
                        <a style={navHoverHandler} onMouseEnter={whenHover} onMouseLeave={noHover} href="link"> Reviews </a>
                    </motion.li>
                    <motion.li
                        style={{ paddingLeft: "450px" }}
                    >
                        <a style={navHoverHandler} onMouseEnter={whenHover} onMouseLeave={noHover} href="link"> <img style={{ width: "100px", height: "15px", }} src={logo} alt="logo" /> </a> </motion.li>
                </motion.ul>
            </Box>
        </>
    )
}








// chakra ui
//  <>
//  <Box>
//  <motion.div
//  // animate={'90%'}
//  whileHover={{background:"black", color:"black" ,width:"auto",height:"40px"}}>
//  <UnorderedList
//  display="flex"
//  flexDirection="row"
//  justifyContent="start"
//  listStyleType="none" 
//  alignItems="center"
//  width="auto"
//  textAlign="center"
//  fontFamily= "'Montserrat', sans-serif" 
//  color="white" >
//      <ListItem paddingLeft={"100px"} fontWeight={"extrabold"} lineHeight="1.7em" fontSize="2xl" > <a href="link">  Shop </a></ListItem>
//      <ListItem paddingLeft={"50px"} fontWeight={"extrabold"} fontSize="2xl" > <a href="link"> Reviews</a></ListItem>
//      <ListItem paddingLeft={"350px"}><a href="  DressRossa"> <img style={{width:"100px",height:"15px",}} src={logo} alt="logo" /> </a></ListItem>
//  </UnorderedList>
//  </motion.div>
//  </Box>
//          </>