import React from "react";
import "./movelistitem.css";
import { getTypeColor } from "../../helpers/getTypeColor";
import { desktop } from "../../helpers/mediaQuery";
import { useMoveContext } from "../../context/selectedMove";
const MoveListItem = ({ move }) => {
  const { setSelectedMove } = useMoveContext();
  const handleMoveClick = (move) => {
    if (desktop.matches) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setSelectedMove(move);
  };
  return (
    <li className="move" onClick={() => handleMoveClick(move)}>
      <div className="move-name">
        <h4>{move.name.replace(/-/g, " ")}</h4>
      </div>
      <div className="move-id">
        <span>#{move.id}</span>
      </div>
      <div className="move-power">
        <span>Power: {move.power}</span>
      </div>
      <div className="move-pp">
        <span>PP: {move.pp}</span>
      </div>
      <div className="move-type">
        <span
          className="type"
          style={{ background: getTypeColor(move.type.name) }}
        >
          {move.type.name}
        </span>
      </div>
      <div className="move-priority">
        <span>Priority: {move.priority}</span>
      </div>
    </li>
  );
};

export default MoveListItem;
