import React from "react";
import "./pokemoncontainer.css";
import Loader from "../loader/Loader";
import PokemonCard from "../pokemonCard/PokemonCard";
const PokemonContainer = ({ pokemon, loading, error, searchedPokemon }) => {
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p>There's no pokemon with that name/id. Please try again.</p>;
  }

  if (searchedPokemon) {
    if (error) {
      return (
        <p className="no-type">
          There's no pokemon with that name. Please type the correct name of the
          pokemon.
        </p>
      );
    }
    return (
      <div className="single-pokemon">
        <PokemonCard pokemon={pokemon} />
      </div>
    );
  }

  if (pokemon.length === 1) {
    return (
      <div className="single-pokemon">
        {pokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }

  return (
    <div className="pokemons">
      {pokemon?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonContainer;
