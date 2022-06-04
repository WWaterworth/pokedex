import React from "react";
import { fetchSinglePokemon } from "../api";

const CardDisplay = ({ pokemon }) => {
  
  return (
    <div className="card-display">
      {pokemon &&
        pokemon.map((poke) => {
          return (
            <div className="card">
              <p>{poke.name}</p>
              <p></p>
            </div>
          );
        })}
    </div>
  );
};

export default CardDisplay;
