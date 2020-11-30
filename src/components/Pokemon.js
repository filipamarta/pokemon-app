import React from "react";
import { Card, Col } from "react-bootstrap";
import './Pokemon.scss';

const Pokemon = ({ pokemon }) => {
  return (
    <>
      <Col xs={6} sm={4} md={4} lg={3}>
        <Card className="text-center">
          <Card.Body>
            <div className="img-container">
              <Card.Img src={pokemon.image} alt={pokemon.name} />
            </div>
            <Card.Title className="mt-4">{pokemon.name}</Card.Title>
            <Card.Text>
            maxHP: {pokemon.maxHP}
            <br />
            maxCP: {pokemon.maxCP}
            </Card.Text>
            Attacks:{" "}
            <div className="attacks">
              {pokemon.attacks.special.map((attack) => (
                <div key={`${attack.name}-${attack.damage}`}>
                  {attack.name}
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Pokemon;
