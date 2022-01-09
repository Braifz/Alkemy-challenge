import { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const Card = ({ props }) => {
  const [state, setState] = useState('');

  return (
    <Container
      fluid
      key={props.id}
      className="w-75 shadow p-3 border border-3 m-1 rounded mt-3 mb-5"
    >
      <Row>
        <Col className="text-center">
          <h1>{props.name}</h1>
        </Col>
        <Col className="d-flex fw-lighter text-center align-items-center justify-content-center">
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
            <p> intelligence : {props.powerstats.intelligence}</p>
          </Row>
          <Row>
            <p> strength: {props.powerstats.strength}</p>
          </Row>
          <Row>
            <p> speed: {props.powerstats.speed}</p>
          </Row>
          <Row>
            <p>durability: {props.powerstats.durability}</p>
          </Row>
          <Row>
            <p>power: {props.powerstats.power}</p>
          </Row>
          <Row>
            <p>combat: {props.powerstats.combat}</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Card;
