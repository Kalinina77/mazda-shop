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
    <div className="configpp">
      {model ? (
        <><h1>{model.title}</h1>
                <img src={model.image} />
                <h2>{model.price}</h2>
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
         <button className="btnkk"> <Link  href="/account">
            <h2 className="linConf">Показать итог</h2>
          </Link>
          </button>
          <div className="Opicanie">
          <div className="textConf">
          <h3>
            Средняя комплектация: 
            <h5>ОПЦИИ, КОТОРЫМИ БУДЕТ ДОПОЛНЕНА ТЕКУЩАЯ КОНФИГУРАЦИЯ:</h5>
            <h4>Люк с электроприводом</h4>
            <h4>Солнцезащитная шторка на заднем стекле</h4>
            <h4>Аудиосистема "Bose", 11 динамиков, CD проигрыватель с функцией MP3</h4>
           <h4> Стоимость: 100 000 р</h4>
            </h3>
           </div>
           <div className="textConf">
            <h3>Стандартная комплектация:</h3>
            <h4>ОПЦИИ, КОТОРЫМИ БУДЕТ ДОПОЛНЕНА ТЕКУЩАЯ КОНФИГУРАЦИЯ:</h4>
            <h3>Материал обивки салона - ткань</h3>
            <h3>Стоимость: 50 000 р</h3>
           <h3></h3></div>
          

           <div className="textConf">
            <h3>Полная комплектация:</h3>
            <h4>  ОПЦИИ, КОТОРЫМИ БУДЕТ ДОПОЛНЕНА ТЕКУЩАЯ КОНФИГУРАЦИЯ:</h4>
            <h3>Люк с электроприводом</h3>
            <h3>Солнцезащитная шторка на заднем стекле</h3>
            <h3> i-ELOOP - Система рекуперации энергии торможения</h3>
            <h3>Камера кругового обзора 360</h3>
            <h3>MRCC - Адаптивный круиз контроль</h3>
            <h3>LKA (LDW) - Система предупреждения о выходе из занимаемой полосы</h3>
            <h3> SCBS (впереди) - Система безопасного торможения в городе</h3>
            <h3> SCBS (сзади) - Система безопасного торможения в городе</h3>
            <h3>   Стоимость: 248 000 р</h3>
            <h3></h3></div>
            
            <div className="textConf">
            <h3>2.0 SKYACTIV-G 6 AT 2WD (150 л.с.)</h3>
            <h3>Стоимость: 23 000 р</h3>
            <h3></h3></div>

            <div className="textConf">
            <h3>2.5 SKYACTIV-G 6 AT 2WD (194 л.с.)</h3>
            <h3> Стоимость: 33 000 р</h3>
            <h3></h3></div>

            <div className="textConf">
            <h3>2.5 SKYACTIV-G 6 AT 2WD (231 л.с.)</h3>
            <h3>Стоимость: 48 000 р</h3>
            <h3></h3></div>

          </div>
        </>
      ) : "Сначала выберите модель"}
    </div>
  );
};

export default configurator;
