import React, { useState } from "react";
import {
  DataContainer,
  MoveContainer,
  MoveData,
  OrderBy,
  SearchBar,
} from "../../components";
import { typeOptions } from "../../constants/typeOptions";
import { useMoves } from "../../hooks/useMoves";

const Moves = () => {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(20);
  const [searchedMove, setSearchedMove] = useState(null);
  const [moveType, setMoveType] = useState();
  const { data, isLoading, error } = useMoves(
    fromValue,
    toValue,
    searchedMove,
    moveType
  );
  const handleSearch = (value) => {
    setSearchedMove(value.replace(" ", "-"));
  };

  const handleClearClick = () => {
    setSearchedMove(null);
    setMoveType(null);
    setFromValue(0);
    setToValue(20);
  };

  const handleCategoryChange = (value) => {
    setMoveType(value.value);
  };

  const handleFromValueChange = (value) => {
    setFromValue(value);
    setSearchedMove(null);
  };

  const handleToValueChange = (value) => {
    setToValue(value);
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
            options={typeOptions}
            onFromValueChange={handleFromValueChange}
            onToValueChange={handleToValueChange}
            onClearClick={handleClearClick}
            onTypeChange={handleCategoryChange}
          />
        </div>
        <MoveContainer
          moves={data}
          loading={isLoading}
          searchedMove={searchedMove}
          typeSelected={moveType}
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
