import { useContext } from 'react';
import { Formik, Form } from 'formik'
import axios from 'axios';
import { Button, Container} from 'react-bootstrap';

import TextInput from './TextInput';

const postUser = async (values) => {
  try {
    const postData = await axios.post('http://challenge-react.alkemy.org/', {
      email: values.email,
      password: values.password
    })
    const token = postData.data.token
    localStorage.setItem('tokenNum', token);
  } catch (e) {
    alert('Email o contraseña incorrecta! :c');
  }

}

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Requerido'
  }
  if (!values.password) {
    errors.password = 'Requerido'
  }
  return errors
}

const SignIn = () => {
  return (
    <Container className="border rounded border-3 p-5 shadow mw-250">
      <h1 className="fs-1 p-3 text-center border-bottom"> Sign In</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={validate}
        onSubmit={postUser}
      >
        <Form className="p-1">
          <TextInput name="email" label="Email" placeholder="Email"/>
          <br />
          <TextInput type="password" name="password" label="Password" placeholder="Password"/>
          <br />
          <Button type="submit"> Enviar </Button>
        </Form>
      </Formik>
    </Container>
  )
}

  
  export default SignIn;