import React from "react";

import { Nav } from "./index";

const Header = ({
  pokemon,
  setPokemon,
  setName,
  setType,
  setStats,
  setSprite,
  setId,
}) => {
  return (
    <header>
      <Nav
        pokemon={pokemon}
        setPokemon={setPokemon}
        setName={setName}
        setType={setType}
        setStats={setStats}
        setSprite={setSprite}
        setId={setId}
      />
      <img
        id="logo"
        src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png"
        width="200"
        alt="Pokemon GO Logo png"
      />
    </header>
  );
};

export default Header;
