import React from "react";
import pokemonHome from "/pokemonhome.png";
import pokeball from "/pokeball.png";
import mew from "/mew.png";
import ultraBall from "/ultra-ball.png";
import psyDuck from "/psyduck.png";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <NavLink to="/">
          <li>
            <img src={pokemonHome} alt="Pokeball" />
            <span>Home</span>
          </li>
        </NavLink>
        <NavLink to="Pokedex">
          <li>
            <img src={pokeball} alt="Pokeball" />
            <span>Pokédex</span>
          </li>
        </NavLink>
        <NavLink to="Ability">
          <li>
            <img src={mew} alt="Pokeball" />
            <span>Abilities</span>
          </li>
        </NavLink>
        <NavLink to="Items">
          <li>
            <img src={ultraBall} alt="Pokeball" />
            <span>Items</span>
          </li>
        </NavLink>
        <NavLink to="Moves">
          <li>
            <img src={psyDuck} alt="Pokeball" />
            <span>Moves</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
