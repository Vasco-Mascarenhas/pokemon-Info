import React, { useState } from "react";
import "./ability.css";
import {
  DataContainer,
  Loader,
  PokemonContainer,
  PokemonData,
  SearchBar,
} from "../../components";
import { useAbility } from "../../hooks/useAbility";
import { useAbilityContext } from "../../context/selectedAbility";
const Ability = () => {
  const { selectedAbility, setSelectedAbility } = useAbilityContext();
  const { data, isLoading, error } = useAbility(selectedAbility);
  const effect = data?.effect_entries?.find(
    (eff) => eff.language.name === "en"
  );

  return (
    <>
      <div className="info-container">
        <div className="search">
          <SearchBar
            search={(val) => setSelectedAbility(val.replace(" ", "-"))}
            placeholder="Search for an ability by name or id"
          />
        </div>
        {isLoading ? (
          <div className="ability-info">
            <Loader />
          </div>
        ) : error ? (
          <p>There's no ability with that name/id. Please try again.</p>
        ) : (
          <>
            <div className="ability-info">
              <div className="ability-header">
                <h2>{data?.name.replace(/-/g, " ")}</h2>
                <span>#{data.id}</span>
              </div>
              <div className="ability-body">
                {effect?.effect ? (
                  <p>{effect.effect}</p>
                ) : (
                  <p>Currently no effect information available</p>
                )}

                <span>{data?.generation?.name?.replace(/-/g, " ")}</span>
              </div>
            </div>
            <div className="ability-pokemon">
              <PokemonContainer pokemon={data.pokemon} />
            </div>
          </>
        )}
      </div>
      <DataContainer>
        <PokemonData />
      </DataContainer>
    </>
  );
};

export default Ability;
