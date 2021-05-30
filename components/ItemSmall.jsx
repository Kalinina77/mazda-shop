import React from "react";
import useStore from "../store/mainStore";
import { useRouter } from "next/router";

const ItemSmall = (props) => {
  const { id, image, alt, title, price, cost, showButtons = true } = props;
  const setModel = useStore((state) => state.setModel);
  const favorites = useStore((state) => state.favorites);
  const addFavorite = useStore((state) => state.addFavorite);
  const removeFavorite = useStore((state) => state.removeFavorite);

  const router = useRouter();

  const handleFavoriteClick = (id) => {
    if (favorites.some((x) => x.id === id)) {
      removeFavorite(id);
    } else {
      addFavorite({ id, image, alt, title, price });
    }
  };

  const handleSelect = () => {
    setModel({ id, image, alt, title, price, cost });
    router.push("/configurator");
  };

  return (
    <div className="ItemSmall__Container">
      <div className="ImageSmall">
        <img src={image} alt={alt} />
      </div>
      <div className="InfoSmall">
        <p className="TitlT">{title}</p>
        <h1 className="PriceT">{price}</h1>
      </div>
      {showButtons && (
        <>
          <button className="btnkk" onClick={() => handleSelect()}>
            Выбрать
          </button>
          <div><h4 ></h4></div>
          <button className="btnkk" onClick={() => handleFavoriteClick(id)}>
            {favorites.some((x) => x.id === id)
              ? "Удалить из избранного"
              : "Добавить в избранное"}
          </button>
        </>
      )}
    </div>
  );
};

export default ItemSmall;
