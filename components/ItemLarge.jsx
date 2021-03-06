import React from "react";

const ItemLarge = (props) => {
  const { image, alt, title, price, reverse = false } = props;
  return (
    <div
      className={
        reverse
          ? "ItemLarge__Container ItemLarge__Reverse"
          : "ItemLarge__Container"
      }
    >
      <div className="ImageLarge">
        <img src={image} alt={alt} />
      </div>
      <div className="InfoLarge">
        <h1>{title}</h1>
        <h4 className="TextItemL">{price}</h4> 
       
      </div>
      
     
      
    </div>
  );
};

export default ItemLarge;
