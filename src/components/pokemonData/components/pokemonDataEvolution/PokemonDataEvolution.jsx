import React from "react";
import "./pokemondataevolution.css";
import { usePokemonContext } from "../../../../context/selectedPokemon";
import { missingImg } from "../../../../helpers/handleImgError";
import { useItemContext } from "../../../../context/selectedItem";
import { getId } from "../../../../helpers/getId";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { handleImgError } from "../../../../helpers/handleImgError";

const PokemonEvolution = ({ pokemon }) => {
  const { setSelectedPokemon } = usePokemonContext();
  const { setSelectedItem } = useItemContext();

  const evolutions = pokemon.chain;

  const handleItemError = (e) => {
    e.target.src = missingImg;
  };

  console.log();

  return (
    <div className="evolution">
      <div key={`start-${evolutions.species.name}`} className="evolution-info">
        <h5>{evolutions.species.name.replace(/-/g, " ")}</h5>
        <img
          onClick={() => setSelectedPokemon(getId(evolutions.species.url))}
          onError={(e) => handleImgError(e, getId(evolutions.species.url))}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${getId(
            evolutions.species.url
          )}.gif`}
          alt="Pokemon Image"
        />
        <div className="evo-info">
          <span>Starting</span>
        </div>
      </div>
      {evolutions.evolves_to.flatMap((ev, index) => {
        return (
          <div
            key={`evolution-${ev.species.name}-${index}`}
            className="evolution-info"
          >
            <h5>{ev.species.name.replace(/-/g, " ")}</h5>
            <img
              onClick={() => setSelectedPokemon(getId(ev.species.url))}
              onError={(e) => handleImgError(e, getId(ev.species.url))}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${getId(
                ev.species.url
              )}.gif`}
              alt="Pokemon Image"
            />
            <div className="evo-info">
              {ev.evolution_details.map((detail, detailIndex) => {
                return detail.min_level && detail.time_of_day ? (
                  <span
                    key={`level-day-${detail.min_level}-${detail.time_of_day}-${detailIndex}`}
                  >
                    lvl {detail.min_level}{" "}
                    <img
                      className="day-icon"
                      onError={handleItemError}
                      src={`/${detail.time_of_day}.png`}
                      alt={detail.time_of_day}
                    />
                  </span>
                ) : detail.min_level ? (
                  <span
                    className="level"
                    key={`level-${detail.min_level}-${detailIndex}`}
                  >
                    lvl {detail.min_level}
                  </span>
                ) : detail.item ? (
                  <Link
                    className="item-link"
                    to="/Items"
                    key={detail.item.name + "link"}
                    data-tooltip-id={detail.item.name}
                  >
                    <img
                      onError={handleItemError}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${detail.item.name}.png`}
                      alt={detail.item.name}
                      className="item-icon"
                      onClick={() => setSelectedItem(detail.item.name)}
                      key={`item-${detail.item.name}-${detailIndex}`}
                    />
                    <ReactTooltip
                      id={detail.item.name}
                      place="top"
                      content={detail.item.name.replace("-", " ")}
                      className="item-tooltip"
                      key={detail.item.name + "tooltip" + detailIndex}
                    />
                  </Link>
                ) : detail.min_happiness && detail.time_of_day ? (
                  <>
                    <span
                      key={`happiness-day-${detail.min_happiness}-${detail.time_of_day}-${detailIndex}`}
                      data-tooltip-id={detail.min_happiness}
                    >
                      {detail.min_happiness}

                      <ReactTooltip
                        id={detail.min_happiness}
                        place="top"
                        content="Minimum friendship"
                        className="friendship-tooltip"
                        key={detail.min_happiness + "tooltip" + detailIndex}
                      />
                    </span>
                    <img
                      className="day-icon"
                      onError={handleItemError}
                      src={`/${detail.time_of_day}.png`}
                      alt={detail.time_of_day}
                      data-tooltip-id={detail.time_of_day}
                    />
                    <ReactTooltip
                      id={detail.time_of_day}
                      place="top"
                      content={detail.time_of_day}
                      className="time-tooltip"
                      key={detail.time_of_day + "tooltip"}
                    />
                  </>
                ) : detail.min_happiness ? (
                  <span
                    key={`happiness-${detail.min_happiness}-${detailIndex}`}
                    data-tooltip-id={detail.min_happiness}
                  >
                    {detail.min_happiness}
                    <ReactTooltip
                      id={detail.min_happiness}
                      place="top"
                      content="Minimum friendship"
                      className="friendship-tooltip"
                      key={detail.min_happiness + "tooltip" + detailIndex}
                    />
                  </span>
                ) : (
                  ""
                );
              })}
            </div>
          </div>
        );
      })}
      {evolutions.evolves_to.flatMap((evol) =>
        evol.evolves_to.map((ev, index) => {
          return (
            <div
              key={`evolution-${ev.species.name}-${index}`}
              className="evolution-info"
            >
              <h5>{ev.species.name.replace(/-/g, " ")}</h5>
              <img
                onClick={() => setSelectedPokemon(getId(ev.species.url))}
                onError={(e) => handleImgError(e, getId(ev.species.url))}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${getId(
                  ev.species.url
                )}.gif`}
                alt="Pokemon Image"
              />
              <div className="evo-info">
                {ev.evolution_details.map((detail, detailIndex) => {
                  return detail.min_level && detail.time_of_day ? (
                    <span
                      key={`level-day-${detail.min_level}-${detail.time_of_day}-${detailIndex}`}
                    >
                      lvl {detail.min_level}{" "}
                      <img
                        className="day-icon"
                        onError={handleItemError}
                        src={`/${detail.time_of_day}.png`}
                        alt={detail.time_of_day}
                      />
                    </span>
                  ) : detail.min_level ? (
                    <span
                      className="level"
                      key={`level-${detail.min_level}-${detailIndex}`}
                    >
                      lvl {detail.min_level}
                    </span>
                  ) : detail.item ? (
                    <Link
                      className="item-link"
                      to="/Items"
                      key={detail.item.name + "link"}
                      data-tooltip-id={detail.item.name}
                    >
                      <img
                        onError={handleItemError}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${detail.item.name}.png`}
                        alt={detail.item.name}
                        className="item-icon"
                        onClick={() => setSelectedItem(detail.item.name)}
                        key={`item-${detail.item.name}-${detailIndex}`}
                      />
                      <ReactTooltip
                        id={detail.item.name}
                        place="top"
                        content={detail.item.name.replace("-", " ")}
                        className="item-tooltip"
                        key={detail.item.name + "tooltip" + detailIndex}
                      />
                    </Link>
                  ) : detail.min_happiness && detail.time_of_day ? (
                    <>
                      <span
                        key={`happiness-day-${detail.min_happiness}-${detail.time_of_day}-${detailIndex}`}
                        data-tooltip-id={detail.min_happiness}
                      >
                        {detail.min_happiness}

                        <ReactTooltip
                          id={detail.min_happiness}
                          place="top"
                          content="Minimum friendship"
                          className="friendship-tooltip"
                          key={detail.min_happiness + "tooltip" + detailIndex}
                        />
                      </span>
                      <img
                        className="day-icon"
                        onError={handleItemError}
                        src={`/${detail.time_of_day}.png`}
                        alt={detail.time_of_day}
                        data-tooltip-id={detail.time_of_day}
                      />
                      <ReactTooltip
                        id={detail.time_of_day}
                        place="top"
                        content={detail.time_of_day}
                        className="time-tooltip"
                        key={detail.time_of_day + "tooltip"}
                      />
                    </>
                  ) : detail.min_happiness ? (
                    <span
                      key={`happiness-${detail.min_happiness}-${detailIndex}`}
                      data-tooltip-id={detail.min_happiness}
                    >
                      {detail.min_happiness}
                      <ReactTooltip
                        id={detail.min_happiness}
                        place="top"
                        content="Minimum friendship"
                        className="friendship-tooltip"
                        key={detail.min_happiness + "tooltip" + detailIndex}
                      />
                    </span>
                  ) : (
                    ""
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default PokemonEvolution;
