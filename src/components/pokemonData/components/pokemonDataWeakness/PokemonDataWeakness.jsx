import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Fragment } from "react";
import "./pokemondataweakness.css";
const PokemonDataWeakness = ({ pokemon }) => {
  const uniqueWeaknesses = new Set();
  // because we're pulling weaknesses from 2 types,some types have the same weakness.
  // ence the set() usage
  pokemon.map((weakness) => {
    weakness.damage_relations.double_damage_from.forEach((innerWeakness) => {
      uniqueWeaknesses.add(innerWeakness.name);
    });
  });
  const uniqueWeaknessesArray = [...uniqueWeaknesses];

  return (
    <div className="weaknesses">
      <h5>Weaknesses</h5>
      <div className="weaknesses-inner">
        {uniqueWeaknessesArray.map((uniqueWeakness, index) => (
          <Fragment key={uniqueWeakness}>
            <img
              src={`./${uniqueWeakness}.png`}
              alt="pokemon type"
              data-tooltip-id={uniqueWeakness}
              key={uniqueWeakness + index}
            />
            <ReactTooltip
              id={uniqueWeakness}
              place="top"
              content={uniqueWeakness}
              className="weak-tooltip"
              key={uniqueWeakness}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default PokemonDataWeakness;
