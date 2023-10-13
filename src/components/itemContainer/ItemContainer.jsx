import React from "react";
import Card from "../card/Card";
import Loader from "../loader/Loader";
import "./itemcontainer.css";
import { useItemContext } from "../../context/selectedItem";
import { handleImgError } from "../../helpers/handleImgError";
const ItemContainer = ({ item, searchedItem, loading, error }) => {
  const { setSelectedItem } = useItemContext();
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
        onClick={() => setSelectedItem(item.name)}
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
            cardClick={() => setSelectedItem(item.name)}
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
