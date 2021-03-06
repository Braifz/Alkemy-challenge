import { useState } from 'react';

import { Button, Container, Row, Col } from 'react-bootstrap';

const Card = ({ props }) => {
  // Usar redux acá, para manejar el estado y guardar dentro de un array objetos con la data de los heroes elegidos

  const addHeroe = (heroe) => {
    const heroeChosen = [];
    heroeChosen.push(heroe);
  };

  const AlignamentHeroeBorder =
    props.biography.alignment === 'good' ? 'border-success' : 'border-danger';

  const AlignamenteHeroeText =
    props.biography.alignment === 'good' ? 'text-success' : 'text-danger';

  return (
    <Container
      fluid
      key={props.id}
      className={`w-75 shadow p-3 border ${AlignamentHeroeBorder} border-3  m-1 rounded mt-3 mb-5`}
    >
      <Row>
        <Col className="text-center">
          <h1>{props.name}</h1>
        </Col>
        <Col
          className={`d-flex fw-bold ${AlignamenteHeroeText} text-center align-items-center justify-content-center`}
        >
          <p>Alignament: {props.biography.alignment}</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <img
            className="rounded w-100 img-fluid m-2 shadow"
            src={props.image.url}
            alt={props.name}
          />
        </Col>
        <Col className="text-center">
          <Row className="p-2">
            <h3> Powerstats: </h3>
          </Row>
          <Row>
            <p> Intelligence : {props.powerstats.intelligence}</p>
          </Row>
          <Row>
            <p> Strength: {props.powerstats.strength}</p>
          </Row>
          <Row>
            <p> Speed: {props.powerstats.speed}</p>
          </Row>
          <Row>
            <p> Durability: {props.powerstats.durability}</p>
          </Row>
          <Row>
            <p> Power: {props.powerstats.power}</p>
          </Row>
          <Row>
            <p> Combat: {props.powerstats.combat}</p>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Button onClick={addHeroe} className="w-50  m-2">
          Add Heroe
        </Button>
      </Row>
    </Container>
  );
};

export default Card;
