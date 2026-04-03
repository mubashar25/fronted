import camera from "./image 28.png";
import mobile from "./image 23.png";
import headphone from "./image 29.png";
import laptop from "./image 34.png";
import watch from "./image 35.png";
import chair from "./rasm.png";
import lamp from "./image 94.png";

// WATCH
import watcha4 from "./61qxr0hR-SL._AC_SL1500_.jpg";
import watchb4 from "./71PCZAWpqVL._AC_SL1500_.jpg";
import watchc4 from "./611Rf6fMQSL._AC_SL1500_.jpg";
import watchd4 from "./714sV1Ls+4L._AC_SL1500_.jpg";
import watche4 from "./714sV1Ls+4L._AC_SL1500_.jpg";

// PHONE
import phonea4 from "./61sjUG2iZAL._AC_SL1500_.jpg";
import phoneb4 from "./81IrxvqffWL._AC_SL1500_.jpg";
import phonec4 from "./81IrxvqffWL._AC_SL1500_.jpg";
import phoned4 from "./61sjUG2iZAL._AC_SL1500_.jpg";

// LAPTOP
import laptopa4 from "./71nYpJKrGNL._AC_SL1500_.jpg";
import laptopb4 from "./71Os2Kn40pL._AC_SL1500_.jpg";

// RELATED
import headphone4 from "./image 29.png";
import speaker4 from "./image 29.png";
import band4 from "./image 29.png";
import lens4 from "./image 29.png";
import tablet4 from "./image 29.png";

export const dealItems = [
  {
    id: 1,
    name: "Smart watches",
    discount: "-25%",
    image: camera,
  },
  {
    id: 2,
    name: "Laptops",
    discount: "-15%",
    image: headphone,
  },
  {
    id: 3,
    name: "Laptops",
    discount: "-15%",
    image: mobile,
  },
  {
    id: 4,
    name: "Laptops",
    discount: "-15%",
    image: laptop,
  },
  {
    id: 5,
    name: "Laptops",
    discount: "-15%",
    image: watch,
  },
  {
    id: 6,
    name: "Laptops",
    discount: "-15%",
    image: mobile,
  },
];

export const blockItemsA = [
    { id: 1, name: "Soft chairs", price: 19, image: chair },
    { id: 2, name: "Lamp", price: 12, image: lamp },
    { id: 3, name: "Sofa", price: 25, image: chair },
    { id: 4, name: "Table", price: 30, image: lamp },
];

export const blockItemsB = [
  { id: 1, name: "Soft chairs", price: 19, image: chair },
  { id: 2, name: "Lamp", price: 12, image: lamp },
  { id: 3, name: "Sofa", price: 25, image: chair },
  { id: 4, name: "Table", price: 30, image: lamp },
];

export const recommendItems = [
  { id: 1, name: "T-shirts with multiple colors, for men", price: 10.3, image: camera },
  { id: 2, name: "Jeans pants for men blue color", price: 12.5, image: mobile },
  { id: 3, name: "Modern headphones for music", price: 15.0, image: headphone },
  { id: 4, name: "Smart watch latest model", price: 22.0, image: watch },
  { id: 5, name: "Laptop for office work", price: 250, image: laptop },
  { id: 6, name: "Casual shoes for men", price: 18.0, image: camera },
  { id: 7, name: "Wireless earbuds high quality", price: 30.0, image: headphone },
  { id: 8, name: "Backpack for travel", price: 20.0, image: mobile },
  { id: 9, name: "Gaming accessories combo", price: 45.0, image: laptop },
  { id: 10, name: "Classic wrist watch", price: 28.0, image: watch },
];

export const products = [
  {
    id: 1,
    title: "Smart Watch Series 7",
    price: 998,
    rating: 4,
    orders: 154,
    shipping: "Free Shipping",
    description: "High quality smart watch with modern features.",
    image: watch,
  },
  {
    id: 2,
    title: "Laptop for office work",
    price: 799,
    rating: 5,
    orders: 320,
    shipping: "Free Shipping",
    description: "Powerful laptop for office and daily use.",
    image: laptop,
  },
  {
    id: 3,
    title: "Smartphone latest model",
    price: 499,
    rating: 4,
    orders: 210,
    shipping: "Free Shipping",
    description: "Latest smartphone with high performance.",
    image: mobile,
  },
  {
    id: 4,
    title: "Wireless Headphones",
    price: 120,
    rating: 4,
    orders: 89,
    shipping: "Free Shipping",
    description: "Noise cancelling wireless headphones.",
    image: headphone,
  },
  {
    id: 5,
    title: "Gaming Laptop",
    price: 1200,
    rating: 5,
    orders: 75,
    shipping: "Free Shipping",
    description: "High performance gaming laptop.",
    image: laptop,
  },
  {
    id: 6,
    title: "Bluetooth Speaker",
    price: 60,
    rating: 4,
    orders: 140,
    shipping: "Free Shipping",
    description: "Portable speaker with deep bass.",
    image: mobile,
  },
  {
    id: 7,
    title: "Smart Fitness Band",
    price: 45,
    rating: 4,
    orders: 98,
    shipping: "Free Shipping",
    description: "Track your daily fitness activities.",
    image: watch,
  },
  {
    id: 8,
    title: "Gaming Headset",
    price: 85,
    rating: 5,
    orders: 67,
    shipping: "Free Shipping",
    description: "Comfortable headset for long gaming sessions.",
    image: headphone,
  },
];

// 🔥 PRODUCT LIST

export const productsdetail = [
  {
    id: 1,
    title: "Smart Watch Series 7",
    price: 998,
    rating: 4,
    orders: 154,
    shipping: "Free Shipping",
    category: "watch",
    description: "High quality smart watch with modern features.",
    images: [watcha4, watchb4, watchc4, watchd4, watche4],
  },
  {
    id: 2,
    title: "iPhone 13 Pro",
    price: 1200,
    rating: 5,
    orders: 210,
    shipping: "Free Shipping",
    category: "mobile",
    description: "Latest Apple iPhone with A15 Bionic chip.",
    images: [phonea4, phoneb4, phonec4, phoned4],
  },
  {
    id: 3,
    title: "Gaming Laptop",
    price: 1500,
    rating: 4,
    orders: 89,
    shipping: "Free Shipping",
    category: "laptop",
    description: "High performance gaming laptop.",
    images: [laptopa4, laptopb4],
  },
  {
    id: 4,
    title: "Smart Watch Series 8",
    price: 998,
    rating: 4,
    orders: 154,
    shipping: "Free Shipping",
    category: "watch",
    description: "High quality smart watch with modern features.",
    images: [watcha4, watchb4, watchc4, watchd4, watche4],
  },
];


// 🔥 RELATED PRODUCTS

export const relatedProducts = [
  { id: 101, title: "Headphones", price: 99, image: headphone4 },
  { id: 102, title: "Bluetooth Speaker", price: 120, image: speaker4 },
  { id: 103, title: "Smart Band", price: 60, image: band4 },
  { id: 104, title: "Camera Lens", price: 200, image: lens4 },
  { id: 105, title: "Tablet", price: 300, image: tablet4 },
];