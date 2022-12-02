import LPimage1 from "./components/images/LPbackground1.jpeg";
import LPimage2 from "./components/images/LPbackground2.jpeg";
import classic1 from "./components/images/classic1.jpeg";
import classic2 from "./components/images/classic2.jpeg";
import classic3 from "./components/images/classic3.jpeg";
import solid from "./components/images/solid1.jpeg";
import solidcard1 from "./components/images/solidcard1.jpeg";
import solidcard2 from "./components/images/solidcard2.jpeg";
import shorts from "./components/images/shorts.jpeg";
import lite1 from "./components/images/lite1.jpeg";

import hammoHoodie_1 from './components/images/hammohoodie_1.jpeg';
import hammoHoodie_2 from './components/images/hammoHoodie_2.jpeg';

export const category = [
    {
      id: 0,
      height: "100vh",
      width: "100%",
      image: LPimage2,
      title: "The Ultimate Hoodie",
      backgroundColor: "#dac9bd",
      child: false,
      childArr: ""
    },
    {
      id: 1,
      height: "150vh",
      width: "100%",
      image: LPimage1,
      title: "Timeless",
      backgroundColor: "black",
      child: true,
      childArr: [
        { childId: 111 , image: [ classic1, classic2, classic3 ],width:"100%",height:"34.5em" },]
      
    },
    {
      id: 2,
      height: "20em",
      width: "100%",
      image: lite1,
      title: "Meet Light",
      backgroundColor: "#a6a7a7",
      child: false,
      childArr: ""
    },
    {
      id: 3,
      height: "104em",
      width: "100%",
      image: solid,
      title: "Solid Stuff",
      backgroundColor: "black",
      child: true,
      childArr: [{ childId: 222, image: [ solidcard1, solidcard2 ] ,width:"100%",height:"104em" }],
    },
    {
      id: 4,
      height: "74em",
      width: "100%",
      image: shorts,
      title: "Game On",
      backgroundColor: "#fcfafa",
      child: false,childArr: ""
    },
  ];


export const product = [
    {
      categoryId : 3, 
      id: 0,
      image: [hammoHoodie_1, hammoHoodie_2],
      color: ["sandal", "red", "green", "brown"],
      productDiscription: "product 1 category 3",
      shippingTime: "Ships in a Week",
    },
    {
      categoryId : 2, 
      id: 1,
      image: [hammoHoodie_1, hammoHoodie_2],
      color: ["sandal", "red", "green", "brown"],
      productDiscription:"product 1 category 2",
      shippingTime: "Ships in a Week",
    },
    {
      categoryId : 2, 
      id: 2,
      image: [hammoHoodie_1, hammoHoodie_2],
      color: ["sandal", "red", "green", "brown"],
      productDiscription:"product 2 category 2",
      shippingTime: "Ships in a Week",
    },
    {
      categoryId : 0, 
      id: 3,
      image: [hammoHoodie_1, hammoHoodie_2],
      color: ["sandal", "red", "green", "brown"],
      productDiscription:"product 1 category 0",
      shippingTime: "Ships in a Week",
    },
    {
      categoryId : 0, 
      id: 4,
      image: [hammoHoodie_1, hammoHoodie_2],
      color: ["sandal", "red", "green", "brown"],
      productDiscription:"product 2 category 0",
      shippingTime: "Ships in a Week",
    },
    {
      categoryId : 2, 
      id: 5,
      image: [hammoHoodie_1, hammoHoodie_2],
      color: ["sandal", "red", "green", "brown"],
      productDiscription:"product 2 category 2",
      shippingTime: "Ships in a Week",
    }
  ]