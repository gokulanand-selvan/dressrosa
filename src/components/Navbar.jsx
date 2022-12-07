import React, { useState } from 'react'
import { Box, ListItem, UnorderedList, } from '@chakra-ui/react'


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
        height:"6em",
    }

  return (
        <>
            <Box
            overflow="hidden"
            zIndex={1}
            >
                <UnorderedList
                    sx={navBoxHandler}
                    // onMouseEnter={whenHover}
                    // onMouseLeave={noHover}
                >
                    <ListItem
                        sx={{ paddingLeft:{ md:"100px",base:"100px"}, fontWeight: "bold", lineHeight: {md:"1.7em",base:"unset"}, fontSize: {md:"20px",base:"unset"} }}
                    >
                        <a style={navHoverHandler} onMouseEnter={whenHover} onMouseLeave={noHover} href="link">  Shop </a>
                    </ListItem>
                    <ListItem
                        sx={{ paddingLeft:{ md:"50px",base:"50px"}, fontWeight: "bold", lineHeight: {md:"1.7em",base:"unset"}, fontSize: {md:"20px",base:"unset"} }}
                        >
                        <a style={navHoverHandler} onMouseEnter={whenHover} onMouseLeave={noHover} href="link"> Reviews </a>
                    </ListItem>
                    <ListItem
                        sx={{         paddingLeft: {md:"400px",base:"400px"},fontWeight: "bold", lineHeight: {md:"1.7em",base:"unset"}, fontSize: {md:"50px",base:"unset"} }}
                        >
                        <a style={navHoverHandler}  onMouseEnter={whenHover} onMouseLeave={noHover} href="link"> March </a> </ListItem>
                </UnorderedList>
            </Box>
        </>
    )
}






