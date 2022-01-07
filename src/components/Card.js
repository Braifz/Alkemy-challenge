import { Container } from 'react-bootstrap';

const Card = ({props}) => {
  return (
    <Container fluid>
      <div className="">
        <h1>{props.name}</h1>
        <p>{props.biography.alignment}</p>
        <img src={props.image.url} alt={props.name} />
      </div>
    </Container>
  )
}

export default Card;