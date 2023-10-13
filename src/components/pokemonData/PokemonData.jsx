import React, { useState } from "react";
import { usePokemon } from "../../hooks/usePokemon";
import { usePokemonContext } from "../../context/selectedPokemon";
import Loader from "../loader/Loader";
import moreImg from "/more.png";
import {
  PokemonDataImg,
  PokemonDataType,
  PokemonFlavor,
  PokemonDataAbility,
  PokemonDataStats,
  PokemonDataInfo,
  PokemonDataEvolution,
  PokemonDataVarieties,
} from "./components";
import "./pokemondata.css";
const PokemonData = () => {
  const { selectedPokemon } = usePokemonContext();
  const { data, isLoading, error } = usePokemon(selectedPokemon);
  const [more, setMore] = useState(null);
  if (isLoading) {
    return <Loader />;
  } else if (!data || Object.keys(data).length === 0) {
    return (
      <div className="pokemon">
        <p>No pokemon Selected</p>
      </div>
    );
  } else if (error) {
    <div className="pokemon">
      <p>An error ocurred try again</p>;
    </div>;
  }

  const info = {
    base_experience: data.base_experience,
    height: data.height,
    weight: data.weight,
  };

  const handleMore = () => {
    setMore((prev) => !prev);
  };

  return (
    <>
      <div className={`pokemon-data ${more ? "show" : ""}`}>
        <div className="close" onClick={handleMore}>
          <span>X</span>
        </div>
        <PokemonDataImg pokemon={data} />
        <PokemonDataType pokemon={data.types} />
        <PokemonFlavor flavor={data.speciesData.flavor_text_entries} />
        <h4>Abillities</h4>
        <PokemonDataAbility pokemon={data.abilities} />
        <h4>Stats</h4>
        <PokemonDataStats pokemon={data.stats} />
        <h4>Pokemon Info</h4>
        <PokemonDataInfo pokemon={info} weakNess={data.typesData} />
        <h4>Evolution chain:</h4>
        <PokemonDataEvolution
          pokemon={data.evolutionChainData}
          fallbackImg={data.sprites}
        />
        <PokemonDataVarieties pokemon={data.speciesData.varieties} />
      </div>

      <div className={`mobile-pokemon-data ${more ? "hide" : ""}`}>
        <div className="more" onClick={handleMore}>
          <img src={moreImg} alt="more arrow" />
        </div>
        <div className="mobile-data">
          <PokemonDataImg pokemon={data} />
        </div>
      </div>
    </>
  );
};

export default PokemonData;
