import React from "react";
import pikachu from "/pikachu.gif";
import "./loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <img src={pikachu} alt="pikachu running" />
    </div>
  );
};

export default Loader;
