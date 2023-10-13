import React from "react";
import { getTypeColor } from "../../../../helpers/getTypeColor";
import "./pokemondatatype.css";
const PokemonDataType = ({ pokemon }) => {
  return (
    <div className="pokemon-type">
      {pokemon.map((type) => (
        <span
          key={type.type.name}
          className="type"
          style={{ background: getTypeColor(type.type.name) }}
        >
          {type.type.name}
        </span>
      ))}
    </div>
  );
};

export default PokemonDataType;
