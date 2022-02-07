import { useState, createContext, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';

import SignIn from './components/SignIn';
import Home from './components/Home';
import Layout from './components/Layout';
import ThemeContext, { themes } from './context/ThemeContext';

const UserContext = createContext(false);

const App = () => {
  const [user, setUser] = useState(true);
  const [theme, setTheme] = useState(themes.dark);

  const handleChangeTheme = () => {
    setTheme(() => {
      return theme === themes.dark ? themes.light : themes.dark;
    });
  };

  const tokenInLocalStorage = () => {
    const tokenKey = localStorage.getItem('tokenNum');
    if (tokenKey !== null) {
      setUser(true);
      console.log(tokenKey, 'si hay!', user);
    } else {
      setUser(false);
      console.log('no hay', user);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <UserContext.Provider value={user}>
        <Layout>
          <Button className="m-3" onClick={tokenInLocalStorage}>
            {' '}
            Token en localStorage ?
          </Button>
          <Container className="border border-3 rounded m-auto d-flex justify-content-center align-items-center p-2 mt-2 mb-3">
            {user === true ? <Home /> : <SignIn />}
          </Container>
        </Layout>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
