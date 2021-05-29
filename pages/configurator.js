import React, { useState } from "react";
import useStore from "../store/mainStore";
import Link from "next/link";

const configurator = () => {
  const engines = [
    {
      id: 1,
      title: "2.0 SKYACTIV-G 6 AT 2WD (150 л.с.)",
      price: " 23 000 р",
      cost: 23000,
    },
    {
      id: 2,
      title: "2.5 SKYACTIV-G 6 AT 2WD (194 л.с.)",
      price: "33 000 р",
      cost: 33000,
    },
    {
      id: 3,
      title: "2.5 SKYACTIV-G 6 AT 2WD (231 л.с.)",
      price: "48 000 р",
      cost: 48000,
    },
  ];

  const comp = [
    {
      id: 1,
      title: "Стандаартная",
      price: " 50 000 р",
      cost: 50000,
    },
    {
      id: 2,
      title: "Средняя",
      price: "100 000 р",
      cost: 100000,
    },
    {
      id: 3,
      title: "Полная",
      price: "248 000 р",
      cost: 248000,
    },
  ];
  const model = useStore((state) => state.model);
  const setModel = useStore((state) => state.setModel);

  const getTotal = () => {
    let total = model.cost;
    if (model.engine?.cost) {
      total += model.engine?.cost;
    }
    if (model.comp?.cost) {
      total += model.comp?.cost;
    }
    return total;
  };

  return (
    <div>
      {model ? (
        <>
          <h1>Выберите двигатель</h1>
          {engines.map((x) => (
            <button
              className="btnkk"
              onClick={() => setModel({ ...model, engine: x })}
            >
              {x.title}
            </button>
          ))}
          <h1>Выберите комплектацию</h1>
          {comp.map((x) => (
            <button
              className="btnkk"
              onClick={() => setModel({ ...model, comp: x })}
            >
              {x.title}
            </button>
          ))}
          <h2>Стоимость: {getTotal()}</h2>
          <Link href="/account">
            <h2>Показать итог</h2>
          </Link>
        </>
      ) : "Сначала выберите модель"}
    </div>
  );
};

export default configurator;
