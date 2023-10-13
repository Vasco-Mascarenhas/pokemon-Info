import React, { useState } from "react";
import {
  DataContainer,
  MoveContainer,
  MoveData,
  OrderBy,
  SearchBar,
} from "../../components";
import { useMoves } from "../../hooks/useMoves";

const Moves = () => {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(20);
  const [searchedMove, setSearchedMove] = useState(null);
  const { data, isLoading, error } = useMoves(searchedMove);
  const handleSearch = (value) => {
    setSearchedMove(value.replace(" ", "-"));
  };

  const handleClearClick = () => {
    setSearchedMove(null);
    setFromValue(0);
    setToValue(20);
  };

  return (
    <>
      <div className="info-container">
        <div className="ordering">
          <SearchBar
            search={handleSearch}
            placeholder="Search for a move by name or type!"
          />
          <OrderBy
            fromValue={fromValue}
            toValue={toValue}
            onClearClick={handleClearClick}
          />
        </div>
        <MoveContainer
          moves={data}
          loading={isLoading}
          searchedMove={searchedMove}
          error={error}
        />
      </div>
      <DataContainer>
        <MoveData />
      </DataContainer>
    </>
  );
};

export default Moves;
