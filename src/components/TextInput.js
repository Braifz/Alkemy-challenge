import { useField } from "formik";
import { Form } from 'react-bootstrap';

const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <div>
            <Form.Label className="fs-5">{label}</Form.Label>
            <Form.Control size="md" {...field} {...props} />
            {meta.touched && meta.error ? <p className="text-danger fs-5 p-2">{meta.error}</p> : null}
        </div>
    )
}

export default TextInput;