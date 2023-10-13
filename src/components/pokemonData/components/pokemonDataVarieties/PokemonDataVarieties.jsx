import React from "react";
import "./pokemondatavarieties.css";
import { usePokemonContext } from "../../../../context/selectedPokemon";
import { handleImgError } from "../../../../helpers/handleImgError";
import { getId } from "../../../../helpers/getId";
const PokemonVarieties = ({ pokemon }) => {
  const { setSelectedPokemon } = usePokemonContext();

  const handleClick = (clickedPokemon) => {
    setSelectedPokemon(clickedPokemon);
  };

  if (pokemon.length === 1) {
    return "";
  }
  return (
    <>
      <h4>Varieties:</h4>
      <div className="varieties">
        {pokemon.map((poke) => {
          return (
            <div
              className="variety"
              key={poke.pokemon.name}
              onClick={() => handleClick(getId(poke.pokemon.url))}
            >
              <h5>{poke.pokemon.name.replace(/-/g, " ")}</h5>
              <img
                onError={(e) => handleImgError(e, getId(poke.pokemon.url))}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${getId(
                  poke.pokemon.url
                )}.gif`}
                alt="Pokemon Image"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PokemonVarieties;
