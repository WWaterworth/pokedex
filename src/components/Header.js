import React from "react";

import { Nav } from "./index";

const Header = ({ pokemon, setName, setType, setStats, setSprite }) => {
  return (
    <header>
      <Nav
        pokemon={pokemon}
        setName={setName}
        setType={setType}
        setStats={setStats}
        setSprite={setSprite}
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
