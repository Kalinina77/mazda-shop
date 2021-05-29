import React from "react";
import ItemLarge from "../components/ItemLarge";
import ItemSmall from "../components/ItemSmall";
import Head from "next/head";

const shop = () => {
  const cars = [
    {
      id: 1,
      image: "/auto/m6.png",
      alt: "text",
      title: "MAZDA 6",
      price: "от 1 730 000 р",
      cost: 1730000,
      reverse: false,
    },
    {
      id: 2,
      image: "/auto/cx5.png",
      alt: "text",
      title: "MAZDA CX-5",
      price: "от 1 811 000 р",
      cost: 1811000,
      reverse: true,
    },
    {
      id: 3,
      image: "/auto/cx30.png",
      alt: "text",
      title: "MAZDA CX-30",
      price: "от 1 695 000 р",
      cost: 1695000,
      reverse: false,
    },
    {
      id: 4,
      image: "/auto/mcx9.png",
      alt: "text",
      title: "MAZDA CX-9 ",
      price: "от 3 108 000 р",
      cost: 3108000,
      reverse: true,
    },
  ];

  const cars2 = [
    {
      image: "/auto/1.jpg",
      alt: "text",
      title: "СПЕЦИАЛЬНАЯ СЕРИЯ",
      price: "NOIR MAZDA CX-9 И MAZDA CX-5",
      reverse: false,
    },
    {
      image: "/auto/02.jpg",
      alt: "text",
      title: "КРЕДИТ ДЛЯ ЛОЯЛЬНЫХ КЛИЕНТОВ",
      price:
        "Являетесь владельцем Mazda и планируете заменить свой автомобиль на новый? Воспользуйтесь вашей привилегией!",
      reverse: true,
    },
    {
      image: "/auto/3.png",
      alt: "text",
      title: "MAZDA ТРЕЙД-ИН",
      price:
        "Получите максимум выгоды при покупке нового автомобиля Mazdа по программе Mazda Трейд-ин",
      reverse: false,
    },
    {
      image: "/auto/2.jpg",
      alt: "text",
      title: "MAZDA В КРЕДИТ ОТ 8900",
      price: "Войдите в мир Mazda с выгодой",
      reverse: true,
    },
  ];

  return (
    <>
      <Head>
        <title>Mazda</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"
          rel="stylesheet"
        ></link>
      </Head>
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
