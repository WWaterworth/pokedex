import React from "react";

const Types = ({ selectedPokemon, types }) => {
  return (
    <div className="types">
      <h4>{selectedPokemon}'s Types:</h4>
      {types.map((elem) => {
        return (
          <>
            <p>{elem.type.name}</p>
          </>
        );
      })}
    </div>
  );
};

export default Types;
