import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Pokemon from "../components/Pokemon";
import { GET_POKEMONS } from '../graphql/get-pokemons';

const PokemonsContainer = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });

  return (
    <div>
      <p>I am a pokemon container</p>
      {pokemons &&
        pokemons.map((pokemon, id) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </div>
  );
};

export default PokemonsContainer;
