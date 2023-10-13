import React from "react";
import "./pokemonflavor.css";
const PokemonFlavor = ({ flavor }) => {
  const fav = flavor?.filter((flav) => flav.language.name === "en");
  return (
    <span className="flavor_text">
      {fav.length > 0 ? fav[0].flavor_text.replace("\f", " ") : ""}
    </span>
  );
};

export default PokemonFlavor;
