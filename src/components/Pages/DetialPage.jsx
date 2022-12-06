import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { Detials } from "../Detials";
import GifCard from "../GifCard";
// import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"
import img7 from "../images/img7.jpg"
import img5 from "../images/img5.jpg";


export default function DetialPage({ productDetials }) {
  // console.log(productDetials);
  const pr = useParams();
  // console.log(pr.detials)
  let detialItem = productDetials.filter((i) => {
    // console.log(i.itemId, (detials));
    return i.itemId === parseInt(pr.detials);
  });
  // console.log(detialItem)
  return (
    <Box>
      <>
        {detialItem.map((e) => (
          <Detials
            key={e.itemId}
            data={e}
            productImages={e.productImage}
            mainHeadding={e.mainHeadding}
            shippingTime={e.shippingTime}
            productDiscription={e.productDiscription}
            color={e.color}
          />
        ))}
      </>
      <GifCard
        const
        gifImages={[img5, img6, img7]}
        width="25rem"
        height="25rem"
      />
    </Box>
  );
}
