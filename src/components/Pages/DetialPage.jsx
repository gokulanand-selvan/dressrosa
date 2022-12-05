import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import {Detials} from '../Detials'

export default function DetialPage({productDetials}) {

    console.log(productDetials);
    const {id} =useParams();
    let detialItem = productDetials.filter((i) => i.detialImages.productId === parseInt(id))

  return (
    <Box>
      <>
        {detialItem.map((e) => (
          <Detials
            id={e.id}
            key={e.id}
            data={e}
            productImages={e.detialImages}
            mainHeadding={e.mainHeadding}
            shippingTime={e.shippingTime}
            productDiscription={e.productDiscription}
            color={e.color}
          />
        ))}
      </>
    </Box>
  );
}


