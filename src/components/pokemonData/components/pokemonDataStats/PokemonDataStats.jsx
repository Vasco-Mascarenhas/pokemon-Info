import React from "react";
import "./pokemondatastats.css";
import { statName } from "../../../../constants/statName";
const PokemonDataStats = ({ pokemon }) => {
  const getNewName = (oldName) => {
    const stat = statName.find((stat) => stat.name === oldName);
    return stat ? stat.new : oldName;
  };

  const getStatColor = (newColor) => {
    const statColor = statName.find((stat) => stat.name === newColor);
    return statColor ? statColor.color : "black";
  };

  const totalBaseStat = pokemon.reduce((sum, stat) => sum + stat.base_stat, 0);
  return (
    <div className="pokemon-stats">
      {pokemon.map((stat, index) => (
        <div key={index} className="base-stat">
          <h5
            key={stat.stat.name}
            style={{ background: getStatColor(stat.stat.name) }}
          >
            {getNewName(stat.stat.name)}
          </h5>
          <p key={stat.base_stat}>
            {stat.base_stat === null ? "???" : stat.base_stat}
          </p>
        </div>
      ))}
      <div className="base-stat total">
        <h5>TOT</h5>
        <p>{totalBaseStat}</p>
      </div>
    </div>
  );
};

export default PokemonDataStats;
