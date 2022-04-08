import { v4 as uuid } from "uuid";
import hoodie1 from "../../assets/products/hoodies/hoodie1.png";
import hoodie2 from "../../assets/products/hoodies/hoodie2.png";
import hoodie3 from "../../assets/products/hoodies/hoodie3.png";
import hoodie4 from "../../assets/products/hoodies/hoodie4.png";
import hoodie5 from "../../assets/products/hoodies/hoodie5.png";
import hoodie6 from "../../assets/products/hoodies/hoodie6.png";

export const products = [
  {
    _id: uuid(),
    img: hoodie1,
    name: "Stark Hoodie",
    price: 200,
    mrp: 350,
    category: "clothes",
    album: "Red",
    rating: 5,
  },
  {
    _id: uuid(),
    img: hoodie2,
    name: "Stark Hoodie",
    price: 300,
    mrp: 400,
    category: "accessories",
    album: "1989",
    rating: 4,
  },
  {
    _id: uuid(),
    img: hoodie3,
    name: "Stark Hoodie",
    price: 400,
    mrp: 500,
    category: "Music",
    album: "Fearless",
    rating: 3,
  },
  {
    _id: uuid(),
    img: hoodie4,
    name: "Stark Hoodie",
    price: 300,
    mrp: 500,
    category: "mobile-covers",
    album: "Lover",
    rating: 4,
  },
  {
    _id: uuid(),
    img: hoodie5,
    name: "Stark Hoodie",
    price: 700,
    mrp: 900,
    category: "clothes",
    album: "Reputation",
    rating: 2,
  },
  {
    _id: uuid(),
    img: hoodie6,
    name: "Stark Hoodie",
    price: 800,
    mrp: 1000,
    category: "Music",
    album: "Red",
    rating: 5,
  },
];
