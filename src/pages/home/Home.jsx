import React from "react";
import "./home.css";
import pokeball from "/pokeball.png";
import mew from "/mew.png";
import ultraBall from "/ultra-ball.png";
import psyDuck from "/psyduck.png";
import mewTwo from "/mewtwo.png";
import { Card } from "../../components";
const Home = () => {
  return (
    <>
      <div className="home-intro">
        <div className="intro-img">
          <img src={mewTwo} alt="intro image" />
        </div>
        <div className="intro-content">
          <h1>Pokemon Encyclopedia</h1>
          <p>
            A Pokémon encyclopedia with a more modern look, made with{" "}
            <b>React</b> and{" "}
            <a href="https://pokeapi.co/" target="_blank">
              PokéAPI
            </a>
          </p>
          <h3>You are able to:</h3>
          <ul>
            <li>Search Pokémon by name, id or type.</li>
            <li>
              Search Abilities by name or id and see which pokémon have them.
            </li>
            <li>
              Search items by name or id and see which pokémon hold them.{" "}
            </li>
            <li>
              Search moves by name or id and see which pokémons have them or can
              learn them.
            </li>
          </ul>
          <p>
            <b>Disclaimer:</b> Some information might be incorrect or missing.
          </p>
        </div>
      </div>
      <aside className="home-content">
        <Card>
          <div className="card-title">
            <img src={pokeball} alt="nav image" />
            <h2>Pokédex</h2>
          </div>
          <p>
            Pokémon are the creatures that inhabit the world of the Pokémon
            games. They can be caught using Pokéballs and trained by battling
            with other Pokémon.
          </p>
        </Card>
        <Card>
          <div className="card-title">
            <img src={mew} alt="nav image" />
            <h2>Abilities</h2>
          </div>
          <p>
            Abilities provide passive effects for Pokémon in battle or in the
            overworld. Pokémon have multiple possible abilities but can have
            only one ability at a time.
          </p>
        </Card>
        <Card>
          <div className="card-title">
            <img src={ultraBall} alt="nav image" />
            <h2>Items</h2>
          </div>
          <p>
            An item is an object in the games which the player can pick up, keep
            in their bag, and use in some manner. They have various uses,
            including healing, powering up...
          </p>
        </Card>
        <Card>
          <div className="card-title">
            <img src={psyDuck} alt="nav image" />
            <h2>Moves</h2>
          </div>
          <p>
            Moves are the skills of Pokémon in battle. In battle, a Pokémon uses
            one move each turn. Some moves (including those learned by Hidden
            Machine) can be used...
          </p>
        </Card>
      </aside>
    </>
  );
};

export default Home;
