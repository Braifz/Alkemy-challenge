import { Container } from 'react-bootstrap';

const Card = ({props}) => {
  return (
    <Container>
      <h1>{props.name}</h1>
      <p>{props.biography.alignment}</p>
      <img src={props.image.url} alt={props.name} />
    </Container>
  )
}

export default Card;