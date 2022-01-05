import { Formik, Form, Field } from 'formik';


const SearchHeroe = (props) => {
  return (
    <div>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={ props }
      >
        <Form>
          <Field  placeholder="Search" name="search"/>
        </Form>
      </Formik>
    </div>
  )
}

export default SearchHeroe;