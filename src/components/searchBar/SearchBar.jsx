import React, { useState } from "react";
import pokeball from "/pokeball.png";
import "./searchbar.css";
const SearchBar = ({ search, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  let val = "";
  const handleChange = (e) => {
    val = e.target.value;
    setInputValue(val.toLowerCase());
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
        name="search"
        onKeyDown={(e) => (e.key === "Enter" ? search(inputValue) : "")}
      />
      <button onClick={() => search(inputValue)}>
        <img src={pokeball} alt="pokeball" />
      </button>
    </div>
  );
};

export default SearchBar;
