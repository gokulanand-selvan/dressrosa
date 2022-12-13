import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { Detials } from "../Detials";


export default function DetialPage({ productDetials,cart,setCart }) {
  const pr = useParams();
  let detialItem = productDetials.filter((i) => {
    return i.itemId === parseInt(pr.detials);
  });
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
            id={e.itemId}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </> 
      {/* <Footer /> */}
    </Box>
  );
}
