import React, { useState } from "react";
import { useMoveContext } from "../../context/selectedMove";
import moreImg from "/more.png";
import { getTypeColor } from "../../helpers/getTypeColor";
import "./movedata.css";
const MoveData = () => {
  const { selectedMove } = useMoveContext();
  const [more, setMore] = useState();

  const handleMore = () => {
    setMore((prev) => !prev);
  };

  if (!selectedMove) {
    return (
      <div className="moves-data">
        <p>No move selected</p>
      </div>
    );
  }
  return (
    <>
      <div className={`move-data ${more ? "show" : "hide"}`}>
        <div className="close" onClick={handleMore}>
          <span>X</span>
        </div>
        <h4>{selectedMove.name.replace(/-/g, " ")}</h4>
        <span className="move-id">#{selectedMove.id}</span>
        <span>
          {selectedMove.effect_entries[0]?.short_effect.replace(
            /\$Effect_chance%/gi,
            selectedMove.effect_chance + "%"
          )}
        </span>
        <div className="move-type">
          <span
            className="type"
            style={{ background: getTypeColor(selectedMove.type.name) }}
          >
            {selectedMove.type.name}
          </span>
          <span
            className="type"
            style={{ background: getTypeColor(selectedMove.damage_class.name) }}
          >
            {selectedMove.damage_class.name}
          </span>
        </div>
        <div className="move-category">
          <h4>Category</h4>
          <span>{selectedMove.meta?.category?.name.replace(/\+/g, " + ")}</span>
        </div>
        <div className="move-info">
          <div className="move-stats">
            <div className="move-stat">
              <h4>Power</h4>
              <span>{selectedMove.power ? selectedMove.power : "None"}</span>
            </div>
            <div className="move-stat">
              <h4>PP</h4>
              <span>{selectedMove.pp ? selectedMove.pp : "None"}</span>
            </div>
            <div className="move-stat">
              <h4>Priority</h4>
              <span>
                {selectedMove.priority ? selectedMove.priority : "None"}
              </span>
            </div>
            <div className="move-stat">
              <h4>Accuracy</h4>
              <span>
                {selectedMove.accuracy ? selectedMove.accuracy : "None"}
              </span>
            </div>
          </div>
          <div className="move-meta">
            <div className="crit-rate">
              <h4>Crit rate</h4>
              <span> {selectedMove.meta?.crit_rate}%</span>
            </div>
            <div className="flinch">
              <h4>Flinch chance</h4>
              <span>{selectedMove.meta?.flinch_chance}%</span>
            </div>
            <div className="drain">
              <h4>Drain</h4>
              <span>{selectedMove.meta?.drain}%</span>
            </div>
          </div>
          <div className="status-effects">
            <div className="ailment">
              <h4>Ailment</h4>
              <span>{selectedMove.meta?.ailment.name}</span>
            </div>
            <div className="ailment-chance">
              <h4>Ailment Chance</h4>
              <span>{selectedMove.meta?.ailment_chance}%</span>
            </div>

            <div className="effect-chance">
              <h4>Effect Chance</h4>
              <span>{selectedMove?.effect_chance}%</span>
            </div>
            <div className="stat-chance">
              <h4>Stat chance</h4>
              <span>{selectedMove.meta?.stat_chance}%</span>
            </div>
          </div>
        </div>

        <div className="target">
          <h4>Target</h4>
          <span>{selectedMove.target.name.replace(/-/g, " ")}</span>
        </div>
      </div>
      <div className={`mobile-move-data ${more ? "hide" : ""}`}>
        <div className="more" onClick={handleMore}>
          <img src={moreImg} alt="more arrow" />
        </div>
        <div className="mobile-info">
          <span className="item-id">#{selectedMove.id}</span>
          <h4>{selectedMove.name.replace(/-/g, " ")}</h4>
        </div>
      </div>
    </>
  );
};

export default MoveData;
