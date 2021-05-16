import React from "react";
import ItemLarge from "../components/ItemLarge";
import ItemSmall from "../components/ItemSmall";

const shop = () => {
  const cars = [
    {
      image: "/auto/m6.png",
      alt: "text",
      title : "MAZDA 6",
      price: "от 1 730 000 р",
      reverse: false,
    },
    {
      image: "/auto/cx5.png",
      alt: "text",
      title: "MAZDA CX-5",
      price: "от 1 811 000 р",
      reverse: true,
    },
    {
      image: "/auto/cx30.png",
      alt: "text",
      title: "MAZDA CX-30",
      price: "от 1 695 000 р",
      reverse: false,
    },
    {
      image: "/auto/mcx9.png",
      alt: "text",
      title: "MAZDA CX-9 ",
      price: "от 3 108 000 р",
      reverse: true,
    },
  
  ];

  const cars2 = [
    {
      image: "/auto/1.jpg",
      alt: "text",
      title : "MAZDA 6",
      price: "от 1 730 000 р",
      reverse: false,
    },
    {
      image: "/auto/cx5.png",
      alt: "text",
      title: "MAZDA CX-5",
      price: "от 1 811 000 р",
      reverse: true,
    },
    {
      image: "/auto/cx30.png",
      alt: "text",
      title: "MAZDA CX-30",
      price: "от 1 695 000 р",
      reverse: false,
    },
    {
      image: "/auto/mcx9.png",
      alt: "text",
      title: "MAZDA CX-9 ",
      price: "от 3 108 000 р",
      reverse: true,
    },];
  
  return (
    <>
      <div className="shop-container">
        {cars.map((item, index) => (
          <ItemSmall key={index} {...item} />
        ))}
      </div>
      <div>
        {cars2.map((item, index) => (
          <ItemLarge key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default shop;
