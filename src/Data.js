import LPimage1 from "./components/images/LPbackground1.jpeg";
// import LPimage2 from "./components/images/LPbackground2.jpeg";
import classic1 from "./components/images/classic1.jpeg";
import classic2 from "./components/images/classic2.jpeg";
import classic3 from "./components/images/classic3.jpeg";
import solid from "./components/images/solid1.jpeg";
import solidcard1 from "./components/images/solidcard1.jpeg";
import solidcard2 from "./components/images/solidcard2.jpeg";
import shorts from "./components/images/shorts.jpeg";
import lite1 from "./components/images/lite1.jpeg";
import mobhome1 from "./components/images/mobhome1.jpeg"
import mobhome2 from "./components/images/mobhome2.jpeg"
import mobhome3 from "./components/images/mobhome3.jpeg"
import mobhome4 from "./components/images/mobhome4.jpeg"
import mobhome5 from "./components/images/mobhome5.jpeg"

import hammoHoodie_1 from "./components/images/hammohoodie_1.jpeg"
import hammoHoodie_2 from './components/images/hammoHoodie_2.jpeg';
import hammodiff from './components/images/hammodiff.jpeg';

export const category = [
 
  {
    id: 0,
    height: "100vh",
    width: "100%",
    image: hammodiff,
    title: "Timeless",
    subTitle:"March Tee",
    backgroundColor: "#00182c",
    child: false,
    childArr: "",
    navBar: true,
    mobimg:mobhome1,
  },

  {
    id: 1,
    height: "150vh",
    width: "100%",
    image: LPimage1,
    title: "The Classic ",
    subTitle:"March Tee",
    backgroundColor: "black",
    child: true,
    childArr: [
      { childId: 111, image: [classic1, classic2, classic3], width: "100%", height: "34.5em" },],
    navBar: false,
    mobimg:mobhome2,

  },
  {
    id: 2,
    height: "20em",
    width: "100%",
    image: lite1,
    title: "The Ultimate Hoodie",
    subTitle:"March Tee",
    backgroundColor: "#a6a7a7",
    child: false,
    childArr: "",
    navBar: false,
    mobimg:mobhome3,
  },
  {
    id: 3,
    height: "104em",
    width: "100%",
    image: solid,
    title: "Solid Stuff",
    subTitle:"March Tee",
    backgroundColor: "black",
    child: true,
    childArr: [{ childId: 222, image: [solidcard1, solidcard2], width: "100%", height: "104em" }],
    navBar: false,
    mobimg:mobhome4,
  },
  {
    id: 4,
    height: "74em",
    width: "100%",
    image: shorts,
    title: "Styled Shorts",
    subTitle:"March Tee",
    backgroundColor: "#00182c",
    child: false,
    childArr: "",
    navBar: false,
    mobimg:mobhome5,
  },
];


// categoaryListing

export const product = [

  {
    categoryId: 0,
    id: 0,
    type: "Hoodies",
    detialImages: [
      {
        title: "Hood",
        price: "$10",
        catImage1: classic3,
        productId: 11,
      },
      {
        catImage1: classic1,
        title: "Hood",
        price: "$10",
        productId: 12,
      },

      {
        catImage1: classic2,
        title: "Hood",
        price: "$10",
        productId: 13,
      },
      {
        catImage1: classic3,
        title: "Hood",
        price: "$10",
        productId: 14,
      },
    ]

  },

  //2)

  {
    categoryId: 1,
    id: 1,
    type: "short Hand",
    detialImages: [
      {
        catImage1: classic1,
        title: "Hood",
        price: "$10"
      },
    ],
  },

  {
    categoryId: 2,
    id: 2,
    type: "short Hand",
    detialImages: [
      {
        catImage1: classic1,
        title: "short Hand",
        price: "$10"
      },
    ],
  },

  {
    categoryId: 3,
    id: 3,
    type: "Full Hand",
    detialImages: [
      {
        catImage1: classic1,
        title: "Full Hand",
        price: "$10"
      },
    ],
  },

  {
    categoryId: 4,
    id: 4,
    type: "shorts",
    detialImages: [
      {
        catImage1: classic1,
        title: "shorts",
        price: "$10"
      },
    ],
  },

  {
    categoryId: 5,
    id: 5,
    type: "sleveless",
    detialImages: [
      {
        catImage1: classic1,
        title: "sleveless",
        price: "$10"
      },
    ],
  }
]

//productdetials

export const productDetials = [

  {
    itemId: 0,
    productImage: [solidcard2, hammoHoodie_2],
    color: ["sandal", "red", "green", "brown"],
    productDiscription: "Midnight Navy 100% Supima Cotton Invisible Stitching Modern Cut" ,
    shippingTime: "Ships in a Week",
    mainHeadding: "Classic Crew",
  },
  {
    itemId: 1,
    productImage: [hammoHoodie_1, hammoHoodie_2],
    color: ["sandal", "red", "green", "brown"],
    productDiscription: "Midnight Navy 100% Supima Cotton Invisible Stitching Modern Cut" ,
    shippingTime: "Ships in a Week",
    mainHeadding: "Classic Crew",
  },
  {
    itemId: 2,
    productImage: [solidcard1, solidcard2],
    color: ["sandal", "red", "green", "brown"],
    productDiscription: "Midnight Navy 100% Supima Cotton Invisible Stitching Modern Cut" ,
    shippingTime: "Ships in a Week",
    mainHeadding: "Classic Crew",
  },
  {
    itemId: 3,
    productImage: [hammoHoodie_1, solidcard2],
    color: ["sandal", "red", "green", "brown"],
    productDiscription: "Midnight Navy 100% Supima Cotton Invisible Stitching Modern Cut" ,
    shippingTime: "Ships in a Week",
    mainHeadding: "Classic Crew",
  },
  {
    itemId: 4,
    productImage: [hammoHoodie_1, solidcard1],
    color: ["sandal", "red", "green", "brown"],
    productDiscription: "Midnight Navy 100% Supima Cotton Invisible Stitching Modern Cut" ,
    shippingTime: "Ships in a Week",
    mainHeadding: "Classic Crew",
  }

]