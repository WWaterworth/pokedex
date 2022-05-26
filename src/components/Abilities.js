import React from "react";

const Abilities = ({ selectedPokemon, abilities }) => {
  return (
    <div className="abilities">
      <h4>{selectedPokemon}'s Abilities</h4>
      {abilities.map((move) => {
        return (
          <div>
            <ul>
              <li>{move.ability.name}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Abilities;
