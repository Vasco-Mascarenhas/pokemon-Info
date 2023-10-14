import React from "react";
import "./movecontainer.css";
import Loader from "../loader/Loader";
import MoveListItem from "../moveListItem/MoveListItem";
const MoveContainer = ({
  moves,
  loading,
  searchedMove,
  error,
  typeSelected,
}) => {
  if (loading) return <Loader />;
  if (error) return <p>There's no move with that name/id. Please try again.</p>;
  if (searchedMove) {
    return (
      <ul className="moves">
        <MoveListItem move={moves} />
      </ul>
    );
  }

  if (typeSelected) {
    let filteredMoves = moves?.filter(
      (move) => move.type.name === typeSelected.toLowerCase()
    );

    return (
      <ul className="moves">
        {filteredMoves.map((move, index) => (
          <MoveListItem move={move} key={index} />
        ))}
      </ul>
    );
  }

  return (
    <ul className="moves">
      {moves.map((move, index) => (
        <MoveListItem move={move} key={index} />
      ))}
    </ul>
  );
};

export default MoveContainer;
