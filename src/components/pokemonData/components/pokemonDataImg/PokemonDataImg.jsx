import React, { useState } from "react";
import shinyStar from "/shinystar.png";
import "./pokemondataimg.css";
import { handleImgError } from "../../../../helpers/handleImgError";
const PokemonDataImg = ({ pokemon }) => {
  const [shiny, setShiny] = useState(false);
  return (
    <div className="pokemon-img">
      <div className="pokemon-img-info">
        {shiny ? (
          <img
            key={pokemon.name + "image"}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/${pokemon.id}.gif`}
            alt="Pokemon Image"
            onError={(e) => handleImgError(e, pokemon.id)}
          />
        ) : (
          <img
            key={pokemon.name + "image"}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`}
            alt="Pokemon Image"
            onError={(e) => handleImgError(e, pokemon.id)}
          />
        )}
        <span className="pokemon-id">#{pokemon.id}</span>
        <h4>{pokemon.name.replace(/-/g, " ")}</h4>
      </div>
      <div className="pokemon-img-controls">
        <button
          className={`normal ${!shiny ? "selected" : ""}`}
          onClick={() => setShiny(false)}
        >
          <img src={shinyStar} alt="shiny" />
        </button>
        <button
          className={`shiny ${shiny ? "selected" : ""}`}
          onClick={() => setShiny(true)}
        >
          <img src={shinyStar} alt="shiny" />
        </button>
      </div>
    </div>
  );
};

export default PokemonDataImg;
