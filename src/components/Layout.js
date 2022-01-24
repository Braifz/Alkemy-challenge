import { useContext } from 'react';
import { Container } from 'react-bootstrap';

import ThemeContext from '../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container
      fluid
      className={`min-vh-100 p-0 ${theme.background} ${theme.color}`}
    >
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
