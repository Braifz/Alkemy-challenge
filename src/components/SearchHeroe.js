import { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { Container } from 'react-bootstrap';

import Card from './Card';

const SearchHeroe = () => {
  const [heroe, setHeroe] = useState('');

  const getData = async (value) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = `https://superheroapi.com/api/4124530737602434/search/${value.search}`;
    try {
      const response = await axios.get(proxyUrl + apiUrl, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
      const data = await response;
      setHeroe(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container className="w-100 d-flex flex-column align-items-center justify-content-center overflow-auto p-3 border border-2 rounded shadow m-2">
      <Formik initialValues={{ search: '' }} onSubmit={getData}>
        <Form>
          <label className="fs-1 m-1">Choose your hero : </label>
          <br />
          <Field
            className="text-center border-none rounded-pill m-2 w-100"
            placeholder="Search"
            name="search"
          />
        </Form>
      </Formik>
      {heroe !== ''
        ? heroe.data.results.map((data) => <Card props={data} />)
        : null}
    </Container>
  );
};

export default SearchHeroe;
