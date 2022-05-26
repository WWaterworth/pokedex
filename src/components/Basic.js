import React from "react";

const Basic = ({selectedPokemon, singlePokemon, sprite}) => {
  return (
    <div className="basicInfo">
          <h2>Selected Pokemon: {selectedPokemon}</h2>
          <h3>Id Number: {singlePokemon.id}</h3>
          <img src={sprite} />
          <h3>Base Experience: {singlePokemon.base_experience}</h3>
          <h3>Height: {singlePokemon.height}</h3>
          <h3>Weight: {singlePokemon.weight}</h3>
        </div>
  )
};

export default Basic;
