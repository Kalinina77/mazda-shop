import React from 'react'
import ItemLarge from "../components/ItemLarge";
import ItemSmall from "../components/ItemSmall";
import Head from "next/head";

const info = () => {

  const cars2 = [
    {
      image: "/auto/01.jpg",
      alt: "text",
      title: "СТО ЛЕТ ПУТЕШЕСТВИЯ К МЕЧТЕ",
      price: "Каждый из наших концепт-каров – это полет мысли наших инженеров и дизайнеров. Оцените всю красоту будущего, которое может никогда не наступить. Но в котором так хочется побывать.",
      reverse: false,
    },
    {
      image: "/auto/002.jpg",
      alt: "text",
      title: "ТЕХНОЛОГИИ СОВЕРШЕНСТВА",
      price:
        "Mazda реализует самые смелые идеи. Иногда приходится ждать, чтобы их воплотить. Иногда мы сами подталкиваем прогресс вперед. И вы можете оценить технологии будущего уже сегодня.",
      reverse: true,
    },
    {
      image: "/auto/0003.jpg",
      alt: "text",
      title: "КОНЦЕПТ-КАРЫ",
      price: "Каждый из наших концепт-каров – это полет мысли наших инженеров и дизайнеров. Оцените всю красоту будущего, которое может никогда не наступить. Но в котором так хочется побывать.",
      reverse: false,
    },
    {
      image: "/auto/03_t.jpg",
      alt: "text",
      title: "МАКСИМУМ ВОЗМОЖНОГО",
      price: "Самый большой, мощный, быстрый и одновременно самый тихий и комфортный. Три ряда полноценных сидений, премиальные материалы отделки, инновационные технологии.",
      reverse: true,
    },
    {
        image: "/auto/3.png",
        alt: "text",
        title: "РАСКРЫВАЯ ХАРАКТЕР",
        price: "Брутальность и мощь — это главное впечатление от облика нового Mazda CX-9. Но при близком знакомстве вам откроется более сложная и утонченная натура. Оцените тщательность и мастерство дизайнеров и инженеров, вложенные в создание каждой детали.",
        reverse: false,
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
      
      <div>
        {cars2.map((item, index) => (
          <ItemLarge key={index} {...item} />
        ))}
      </div>
    </>
  );
};


export default info
