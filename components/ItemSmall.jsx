import React from "react";
import useStore from '../store/mainStore'

const ItemSmall = (props) => {
  const { image, alt, title, price } = props;
  const setModel = useStore(state => state.setModel)
  return (
    <div className="ItemSmall__Container">
      <div className="ImageSmall">
        <img src={image} alt={alt}/>
      </div>
      <div className="InfoSmall">
        <p className = "TitlT">{title}</p>
        <h1 className = "PriceT">{price}</h1>
      </div>
      <button onClick={() => setModel({image, alt, title, price })}>Выбрать</button>
    </div>
  );
};

export default ItemSmall;
