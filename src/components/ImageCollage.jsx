import { Box, Image, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import img1 from "../components/images/img1.jpg";
import img2 from "../components/images/img2.jpg";
import img3 from "../components/images/img3.jpg";
import img4 from "../components/images/img4.jpg";
import img5 from "../components/images/img5.jpg";
import img6 from "../components/images/img6.jpg";
import img7 from "../components/images/img7.jpg";

export default function ImageCollage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const arrayImages = [
    { item: img1, gender: "female" },
    { item: img2, gender: "female" },
    { item: img3, gender: "female" },
    { item: img4, gender: "female" },
    { item: img5, gender: "male" },
    { item: img6, gender: "female" },
    { item: img7, gender: "female" },
  ];

  useEffect(() => {
    const collage = setInterval(() => {}, 2000);
  }, []);
  console.log(currentIndex);
  return (
    <Flex width="100%" alignItems={"center"} justifyContent="center" margin={"5em"}> 
      <Box width={"600px"} height="800px" position="relative">
        {arrayImages.map((images, index) => {
          let right = 0;
          let left = 0;
          let top = index * 200;
          left = index%2 === 0 ? "100px" : 0;
          right = index%2 !== 0 ? "100px" : 0;
          let rotate = index%2 === 0 ? "rotate(20deg)" : "rotate(-20deg)"
          return (
          <Box
          position={"absolute"}
          top={top}
          left={left}
          right={right} width={"300px"} height={"300px"} transform={rotate}>
            <Image
            sx={{ width : "100%",height:"100%", objectFit:"cover"}}
            src={images.item}
            key={index}
          />
            </Box>
        )})}
      </Box>
    </Flex>
  );
}
