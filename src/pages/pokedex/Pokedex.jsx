import React, { useState } from "react";
import {
  OrderBy,
  PokemonContainer,
  SearchBar,
  DataContainer,
  PokemonData,
} from "../../components";
import { useAllPokemon } from "../../hooks/usePokemons";
import { typeOptions } from "../../constants/typeOptions";
import "./pokedex.css";
const Pokedex = () => {
  const [selectedType, setSelectedType] = useState("");
  const [orderDirection, setOrderDirection] = useState("Asc");
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(20);
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, error } = useAllPokemon(
    fromValue,
    toValue,
    searchValue,
    selectedType
  );

  const handleTypeChange = (value) => {
    setSelectedType(value.value.toLowerCase());
  };

  const handleOrderDirectionChange = (value) => {
    setOrderDirection(value.value);
    setSearchValue("");
  };

  const handleFromValueChange = (value) => {
    setFromValue(value);
    setSearchValue("");
  };

  const handleToValueChange = (value) => {
    setToValue(value);
  };
  const handleSearch = (value) => {
    setSearchValue(value.replace(" ", "-"));
    setFromValue(0);
    setOrderDirection("Asc");
    setSelectedType("");
  };

  const handleClearClick = () => {
    setSearchValue("");
    setFromValue(0);
    setOrderDirection("Asc");
    setSelectedType("");
    setToValue(20);
  };

  return (
    <>
      <div className="info-container">
        <div className="ordering">
          <SearchBar
            search={handleSearch}
            placeholder="Search a Pokémon by name or id!"
          />
          <OrderBy
            selectedType={selectedType}
            orderDirection={orderDirection}
            fromValue={fromValue}
            toValue={toValue}
            onTypeChange={handleTypeChange}
            onOrderDirectionChange={handleOrderDirectionChange}
            onFromValueChange={handleFromValueChange}
            onToValueChange={handleToValueChange}
            onClearClick={handleClearClick}
            options={typeOptions}
          />
        </div>
        <PokemonContainer
          searchedPokemon={searchValue}
          error={error}
          loading={isLoading}
          pokemon={data}
        />
      </div>
      <DataContainer>
        <PokemonData />
      </DataContainer>
    </>
  );
};

export default Pokedex;
