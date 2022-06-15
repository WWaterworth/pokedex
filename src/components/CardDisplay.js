import React from "react";

const CardDisplay = ({ name, types, stats, sprite, id }) => {
  return (
    <div className="card-display">
      <div id="top-card-container">
        <div id="top-info">
          <h2>{name.toUpperCase()}</h2>
          <div id="type-container">
            {types &&
              types.map((type, idx) => {
                return (
                  <span key={idx} id="type-span">
                    <p id={type.type.name}> {type.type.name} </p>
                  </span>
                );
              })}
          </div>
        </div>
        <div id="pokedex-id">{sprite ? <h4>Pokedex ID# {id}</h4> : null}</div>
      </div>
      <div id="sprite-container">
        {sprite ? (
          <>
            <img id="sprite" src={sprite} alt="pokemon default front sprite" />
          </>
        ) : null}
      </div>
      {sprite ? (
        <div id="stat-container">
          <div id="stat-text">
            <p>Hp:</p>
            <p>Attack:</p>
            <p>Defense:</p>
            <p>Special Attack:</p>
            <p>Special Defense:</p>
            <p>Speed:</p>
          </div>
          {!stats ? <h3>Stats:</h3> : null}
          <ul>
            {stats &&
              stats.map((stat, idx) => {
                return <li key={idx}>{stat.base_stat}</li>;
              })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default CardDisplay;
