
import { Box, } from "@chakra-ui/react";
import { useEffect, useState } from "react";


const Slider = ({ employeeImage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            // console.log("render", currentIndex, employeeImage.length ,);
            if (currentIndex === employeeImage.length - 1) {
                setCurrentIndex(0);
            }
            else setCurrentIndex(currentIndex + 1);
        }, 5000)
        return () => clearInterval(timer)
    },// eslint-disable-next-line
     [currentIndex]);

    const imageStyle = {
        borderRadius: '90px',
        border: "solid yellow 4px",
        padding: "3px",
    }
    return (
        <Box sx={{ position: "relative",margin:"5em"}}>
            <Box > </Box>
            <Box sx={{ position: "absolute", top: "55%", left: '50%', transform: 'translate(-50%, -50%)', }} >
                {/* <img style={imageStyle} src={employeeImage[currentIndex].name} alt="emim" /> */}
                <h1 style={{ fontSize: "50px", color: "gold", fontWeight: "bolder", }}> {employeeImage[currentIndex].identity} </h1>
                <p style={{ fontSize: "25px", color: "#000", fontWeight: "bold" }} > {employeeImage[currentIndex].posting} </p>
                <p style={{ fontSize: "25px", color: "grey", fontWeight: "normal" }} > {employeeImage[currentIndex].Review} </p>
            </Box>
        </Box>
    );
};
export default Slider