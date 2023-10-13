import React from "react";
import Card from "../card/Card";
import { getTypeColor } from "../../helpers/getTypeColor";
import "./pokemoncard.css";
import { usePokemonContext } from "../../context/selectedPokemon";
import { handleImgError } from "../../helpers/handleImgError";

const PokemonCard = ({ pokemon }) => {
  const { setSelectedPokemon } = usePokemonContext();
  const handleClick = () => {
    setSelectedPokemon(pokemon.id);
  };

  return (
    <Card id={pokemon.id} cardClick={handleClick}>
      <img
        key={pokemon.name + "image"}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`}
        alt="Pokemon Image"
        onError={(e) => handleImgError(e, pokemon.id)}
      />
      <span className="pokemon-id">Nº {pokemon.id}</span>
      <h4>{pokemon.name.replace(/-/g, " ")}</h4>
      <div className="pokemon-type">
        {pokemon.types?.map((type, index) => (
          <span
            key={type.type.name + index}
            className="type"
            style={{ background: getTypeColor(type.type.name) }}
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </Card>
  );
};

export default PokemonCard;
