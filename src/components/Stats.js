import React from "react";

const Stats = ({ stats, selectedPokemon }) => {
  return (
    <div className="stats">
      <h4>{selectedPokemon}'s Stats:</h4>
      {stats.map((stat) => {
        return (
          <>
            <p>
              {stat.stat.name}: {stat.base_stat}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default Stats;
