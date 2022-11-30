import React from 'react'
import { motion } from "framer-motion"
import { Box, } from '@chakra-ui/react'


export default function Navbar({ logo }) {
//  const [whilehover,seWhiletHover] = useState(false)

    return (
        <>
            <Box>
                <motion.ul
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        listStyleType: "none",
                        alignItems: "center",
                        width: "auto",
                        textAlign: "center",
                        fontFamily: "'Montserrat', sans-serif",
                    }}
                >
                    <motion.li
                        // whileHover={{ background: "black", color: "white",}} 
                        style={{ paddingLeft: "100px", fontWeight: "bold", lineHeight: "1.7em", fontSize: "20px" }}
                    >
                        <a href="link">  Shop </a>
                    </motion.li>
                    <motion.li
                    //   whileHover={{ background: "black", color: "white", }}
                        style={{ paddingLeft: "50px", fontWeight: "bold", lineHeight: "1.7em", fontSize: "20px", }}
                    >
                        <a href="link">  Reviews </a>
                    </motion.li>
                    <motion.li
                      whileHover={{ background: "black", color: "white", }}
                        style={{ paddingLeft: "450px" }}
                    >
                        <a href="  DressRossa"> <img style={{ width: "100px", height: "15px", }} src={logo} alt="logo" /> </a> </motion.li>
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