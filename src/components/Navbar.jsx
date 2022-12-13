import React, { useState } from "react";
import { Box, Button, ListItem, UnorderedList } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Cartimg from "./images/iconcart.svg";

export default function Navbar({ logo }) {
  const [whilehover, seWhiletHover] = useState(false);
  const [navBgColor, setNavBgColor] = useState(false);

  const whenHover = () => {
    seWhiletHover(true);
    setNavBgColor(true);
  };

  const noHover = () => {
    seWhiletHover(false);
    setNavBgColor(false);
  };

  const navHoverHandler = {
    backgroundColor: whilehover ? "white" : "unset",
    color: whilehover ? "black" : "white",
    textAlign: "center",
  };
  const navBoxHandler = {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "start",
    listStyleType: "none",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: navBgColor ? "white" : "unset",
    height: "6em",
  };

  const navigate = useNavigate();

  return (
    <>
      <Box overflow="hidden" zIndex={1}>
        <UnorderedList
          sx={navBoxHandler}
          width={"100%"}
          // onMouseEnter={whenHover}
          // onMouseLeave={noHover}
        >
          <ListItem
            sx={{
              paddingLeft: { md: "100px", base: "100px" },
              fontWeight: "bold",
              lineHeight: { md: "1.7em", base: "unset" },
              fontSize: { md: "20px", base: "unset" },
            }}
          >
            <a
              style={navHoverHandler}
              onMouseEnter={whenHover}
              onMouseLeave={noHover}
              href="link"
            >
              Shop
            </a>
          </ListItem>
          <ListItem
            sx={{
              paddingLeft: { md: "45px", base: "50px" },
              fontWeight: "bold",
              lineHeight: { md: "1.7em", base: "unset" },
              fontSize: { md: "20px", base: "unset" },
            }}
          >
            <a
              style={navHoverHandler}
              onMouseEnter={whenHover}
              onMouseLeave={noHover}
              href="link"
            >
              Reviews
            </a>
          </ListItem>
          <ListItem
            sx={{
              paddingLeft: { md: "400px", base: "400px" },
              fontWeight: "bold",
              lineHeight: { md: "1.7em", base: "unset" },
              fontSize: { md: "50px", base: "unset" },
            }}
          >
            <a
              style={navHoverHandler}
              onMouseEnter={whenHover}
              onMouseLeave={noHover}
              href="link"
              onClick={() => navigate("/")}

            >
              March
            </a>
          </ListItem>
          <ListItem>
            <Button
            background={{base:"none",md:"Background"}}
              position={"absolute"}
              top={{ md: "45px", base: "45" }}
              right={{ base: "40px", md: "100px" }}
              transform={"translate(50%,-50%)"}
              width={"auto"}
              onMouseEnter={whenHover}
              onMouseLeave={noHover}
              onClick={() => navigate("/chekout")}
            >
              <img src={Cartimg} alt="dd" />
            </Button>
          </ListItem>
        </UnorderedList>
      </Box>
    </>
  );
}
