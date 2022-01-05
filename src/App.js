import {useState} from 'react'
import { Button, Container } from 'react-bootstrap';

import SignIn from './components/SignIn';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer'


const App = () => {
  const [ user, setUser ] = useState(false)
  const tokenInLocalStorage = () => {
    const tokenKey = localStorage.getItem('tokenNum')
    if (tokenKey !== null) {
      setUser(true)
      console.log(tokenKey, 'si hay!', user)
    } else {
      setUser(false)
      console.log('no hay', user)
    }
  }

  return (
    <div className="vh-100">
      <Header />
      <Button className="m-3" onClick={tokenInLocalStorage}> Token en localStorage ?</Button>
      <Container className="d-flex justify-content-center align-items-center p-2 mt-2 mb-3">
        {user === true ? <Home /> : <SignIn />}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
