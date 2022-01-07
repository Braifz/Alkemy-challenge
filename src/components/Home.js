import { Container } from 'react-bootstrap';

import SearchHeroe from './SearchHeroe';



const Home = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center border rounded border-3 p-5">
      <SearchHeroe/>
    </Container>
  )
}

export default Home;