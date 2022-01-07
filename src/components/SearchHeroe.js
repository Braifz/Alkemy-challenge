import { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';

import Card from './Card'

const SearchHeroe = () => {
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
    <div >
      <Formik
        initialValues={{ search: '' }}
        onSubmit={getData}
      >
        <Form>
          <label>Busca tu heroe</label>
          <Field  placeholder="Search" name="search"/>
        </Form>
      </Formik>
      {heroe !== '' ? heroe.data.results.map((data) => 
        (<Card props={data}/>)
      ) : null}
    </div>
  )
}

export default SearchHeroe;