import React from "react";
import "./pokemondatainfo.css";
import PokemonDataWeakness from "../pokemonDataWeakness/PokemonDataWeakness";
const PokemonDataInfo = ({ pokemon, weakNess }) => {
  return (
    <div className="pokemon-info">
      <div className="pokemon-height">
        <h5>Height</h5>
        <span>{pokemon.height === null ? "???" : pokemon.height / 10}m</span>
      </div>
      <div className="pokemon-weight">
        <h5>Weight</h5>
        <span> {pokemon.weight === null ? "???" : pokemon.weight / 10}kg</span>
      </div>
      <div className="pokemon-base">
        <h5>Base Exp</h5>
        <span>
          {pokemon.base_experience === null ? "???" : pokemon.base_experience}
        </span>
      </div>
      <PokemonDataWeakness pokemon={weakNess} />
    </div>
  );
};

export default PokemonDataInfo;
