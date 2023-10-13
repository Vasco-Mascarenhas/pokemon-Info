import React from "react";
import "./pokemonDataAbility.css";
import { getId } from "../../../../helpers/getId";
import { Link } from "react-router-dom";
import linkIcon from "/linkIcon.png";
import { useAbilityContext } from "../../../../context/selectedAbility";
const PokemonDataAbility = ({ pokemon }) => {
  const { setSelectedAbility } = useAbilityContext();
  return (
    <div className="pokemon-ability">
      {pokemon.map((ability) => (
        <Link
          to="/Ability"
          className="ability-link"
          key={ability.ability.name}
          onClick={() => setSelectedAbility(getId(ability.ability.url))}
        >
          <span key={ability.ability.name}>
            {ability.ability.name.replace(/-/g, " ")}
            <img className="link-icon" src={linkIcon} alt="Link Icon" />
          </span>
        </Link>
      ))}
    </div>
  );
};

export default PokemonDataAbility;
