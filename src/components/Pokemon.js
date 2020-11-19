import React from "react";

const Pokemon = ({ pokemon }) => {
  return (
    <div>
      <p>{pokemon.name}</p>
      <div>
        <span>{pokemon.maxHP}</span>
        <span>{pokemon.maxCP}</span>
      </div>
      <div>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div>
        {pokemon.attacks.special.map((attack) => (
          <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
