import React, { useState } from "react";
import { useItemContext } from "../../context/selectedItem";
import { useItem } from "../../hooks/useItem";
import Loader from "../loader/Loader";
import { handleImgError } from "../../helpers/handleImgError";
import { getId } from "../../helpers/getId";
import moreImg from "/more.png";
import "./itemdata.css";
const ItemDataContainer = () => {
  const [more, setMore] = useState(null);
  const { selectedItem } = useItemContext();
  const { data, error, isLoading } = useItem(selectedItem);
  const effect = data?.effect_entries?.find(
    (eff) => eff.language.name === "en"
  );

  const flavor = data?.flavor_text_entries?.find(
    (flavor) => flavor.language.name === "en"
  );

  const handleMore = () => {
    setMore((prev) => !prev);
  };

  return isLoading ? (
    <div className="item-data">
      <Loader />
    </div>
  ) : data ? (
    <>
      <div className={`item-data ${more ? "show" : "hide"}`}>
        <div className="close" onClick={handleMore}>
          <span>X</span>
        </div>
        <img
          onError={(e) => handleImgError(e, data.id)}
          src={
            data.sprites.default != null
              ? data.sprites.default
              : (e) => handleImgError(e, data.id)
          }
          alt="Item image"
        />
        <span className="item-id">#{data.id}</span>
        <h4>{data.name.replace(/-/g, " ")}</h4>
        <span className="category">
          {data.category.name.replace(/-/g, " ")}
        </span>
        <div className="item-info">
          <div className="cost">
            <h5>Cost: {data.cost}₽</h5>
          </div>
        </div>
        <span className="flavor">{flavor ? flavor.text : ""}</span>
        <p className="effect">{effect ? effect.effect : ""}</p>
        <div className="held-item">
          {data.held_by_pokemon
            ? data.held_by_pokemon.map((pokemon) => {
                return (
                  <div className="item-pokemon" key={pokemon.pokemon.name}>
                    <h5 key={pokemon.pokemon.name}>{pokemon.pokemon.name}</h5>
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${getId(
                        pokemon.pokemon.url
                      )}.gif`}
                      alt="pokemon"
                      onError={handleImgError}
                    />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <div className={`mobile-item-data ${more ? "hide" : ""}`}>
        <div className="more" onClick={handleMore}>
          <img src={moreImg} alt="more arrow" />
        </div>
        <div className="mobile-info">
          <img src={data.sprites.default} alt="" />
          <span className="item-id">#{data.id}</span>
          <h4>{data.name.replace(/-/g, " ")}</h4>
        </div>
      </div>
    </>
  ) : !data || Object.keys(data).length === 0 ? (
    <div className="items-data">
      <p>No item selected</p>
    </div>
  ) : (
    <div className="items-data">
      <p>No item selected</p>
    </div>
  );
};

export default ItemDataContainer;
