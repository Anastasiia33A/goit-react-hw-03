import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

const initialValues = {
        name: '',
        number: '',
  
};

export default function ContactForm({ addContact }) {
    const nameId = useId();
    const numberId = useId();
    
     const handleSubmit = (values, actions) => {
         addContact({ id: nanoid(), ...values });
         actions.resetForm();
  };

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit} >
            <Form>
                <label htmlFor={nameId}>Name</label>
                <Field id={nameId}></Field>
                <label htmlFor={numberId}>Number</label>
                <Field id={nameId}></Field>
            </Form>
            
        </Formik>
    )
}