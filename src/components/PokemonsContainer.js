import React from "react";
import { useQuery } from "@apollo/react-hooks";
import Pokemon from "./Pokemon";
import { GET_POKEMONS } from "../graphql/get-pokemons";
import { Container, Row } from "react-bootstrap";

const PokemonsContainer = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 10 },
  });

  return (
    <Container>
      <Row>
        {pokemons &&
          pokemons.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
      </Row>
    </Container>
  );
};

export default PokemonsContainer;
