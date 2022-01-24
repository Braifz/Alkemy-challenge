import { Container, Button } from 'react-bootstrap';

import ThemedButton from './ThemedButton';

const Header = () => {
  return (
    <div>
      <Container className="d-flex justify-content-between mw-100 bg-secondary text-center shadow h-auto">
        <h1 className="p-3 fw-bold font-monospace text-light">SuperHero App</h1>
        <div>
          <Button className="h-50 align-items-center">My Team</Button>
          <ThemedButton />
        </div>
      </Container>
    </div>
  );
};

export default Header;
