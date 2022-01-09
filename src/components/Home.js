import { Container } from 'react-bootstrap';
import { useContext } from 'react';

import SearchHeroe from './SearchHeroe';
import ThemeContext from './ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container
      className={`h-100 fluid ${theme.background} d-flex flex-column justify-content-center align-items-center  rounded p-5`}
    >
      <SearchHeroe />
    </Container>
  );
};

export default Home;
