import React from "react";
import Card from "../card/Card";
import Loader from "../loader/Loader";
import "./itemcontainer.css";
import { useItemContext } from "../../context/selectedItem";
import { handleImgError } from "../../helpers/handleImgError";
import { desktop } from "../../helpers/mediaQuery";
const ItemContainer = ({ item, searchedItem, loading, error }) => {
  const { setSelectedItem } = useItemContext();
  const handleItemclick = (item) => {
    if (desktop.matches) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setSelectedItem(item);
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p>There's no item with that name/id. Please try again.</p>;
  }
  if (searchedItem) {
    return (
      <div
        className="single-pokemon"
        onClick={() => handleItemclick(item.name)}
      >
        <Card key={item.name}>
          <img
            onError={(e) => handleImgError(e, item.id)}
            src={
              item.sprites.default != null
                ? item.sprites.default
                : (e) => handleImgError(e, item.id)
            }
            alt={item.name}
          />
          <span>#{item.id}</span>
          <h4>{item.name.replace(/-/g, " ")}</h4>
          <span>{item.category.name.replace(/-/g, " ")}</span>
        </Card>
      </div>
    );
  }
  return (
    <div className="pokemons">
      {item.map((item) => {
        return (
          <Card
            id={item.id}
            key={item.id}
            cardClick={() => handleItemclick(item.name)}
          >
            <img
              onError={(e) => handleImgError(e, item.id)}
              src={
                item.sprites.default != null
                  ? item.sprites.default
                  : (e) => handleImgError(e, item.id)
              }
              alt={item.name}
            />
            <span>#{item.id}</span>
            <h4>{item.name.replace(/-/g, " ")}</h4>
            <span>{item.category.name.replace(/-/g, " ")}</span>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemContainer;
