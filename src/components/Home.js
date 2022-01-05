import { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { Button, Container } from 'react-bootstrap';

import Card from './Card'
import SearchHeroe from './SearchHeroe';



const Home = () => {
  const [heroe, setHeroe] = useState('')
  
  
  const getData = async (value) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = `https://superheroapi.com/api/4124530737602434/search/${value.search}`
    try {
      const response = await axios.get(proxyUrl + apiUrl, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      })
      const data = await response
      setHeroe(data)
      console.log(data)
    } catch (e) {
      console.log(e)
    }    
  }


  return (
    <Container className="d-flex flex-column justify-content-center align-items-center border rounded border-3 p-5">
      <SearchHeroe props={getData} />
      {heroe !== '' ? heroe.data.results.map((data) => 
        (<Card props={ data }/>)
      ) : null}
    </Container>
  )
}

export default Home;