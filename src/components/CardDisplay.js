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
                  <p id="types" key={idx}>
                    {" "}
                    {type.type.name}{" "}
                  </p>
                );
              })}
          </div>
        </div>
        <div id="pokedex-id">{sprite ? <h4>Pokedex ID# {id}</h4> : null}</div>
      </div>
      <div id="sprite-container">
        {sprite ? (
          <img id="sprite" src={sprite} alt="pokemon default front sprite" />
        ) : null}
      </div>

      {!stats ? <h3>Stats:</h3> : null}
      <ul>
        {stats &&
          stats.map((stat, idx) => {
            return (
              <li key={idx}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CardDisplay;
