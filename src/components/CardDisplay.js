import React from "react";

const CardDisplay = ({ name, types, stats, sprite }) => {
  return (
    <div className="card-display">
      <img src={sprite} alt="pokemon default front sprite" />
      <h1>{name}</h1>
      <div className="types">
        <ul>
          {types &&
            types.map((type, idx) => {
              return <li key={idx}>{type.type.name}</li>;
            })}
        </ul>
      </div>
      {!stats ? <h3>Stats:</h3> : null}
      <ul>
        {stats &&
          stats.map((stat) => {
            return (
              <li>
                {stat.stat.name}: {stat.base_stat}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CardDisplay;
