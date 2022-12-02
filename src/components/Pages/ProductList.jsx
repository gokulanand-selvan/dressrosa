import React from 'react';
import { useLocation, useMatch, useParams } from 'react-router-dom';
import GifCard from '../GifCard';

import feature1 from '../images/feature1.jpeg';
import feature2 from '../images/feature2.jpeg';
import feature3 from '../images/feature3.jpeg';

export default function ProductList({product}) {
    const {id } = useParams();
    console.log( id);

    let products = product.filter(i => i.categoryId === parseInt(id));

    console.log(products);
  return (
    <GifCard
          gifImages={[
            { image: feature1, initial: { x: 1200, y: -1000 }, animate: { x: 2, y: 2 }, imgtransition: { duration: 2 } },
            { image: feature2, initial: { x: 1200 }, animate: { x: 2, y: 2 }, imgtransition: { duration: 2 } },
            { image: feature3, initial: { y: 1000, x: -1200 }, animate: { x: 2, y: 2 }, imgtransition: { duration: 2 } },
          ]}
          width="25rem"
          height="25rem"
        />
  )
}
