import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "../ContactForm/ContactForm.module.css"


const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .required("Required!"),
        number: Yup.string()
      .min(3, "Too short!")
    .required("Required!"),
    }); 



export default function ContactForm({ addContact }) {
    const nameId = useId();
    const numberId = useId();

    const initialValues = {
        name: "",
        number: "",
  
};
    
     const handleSubmit = (values, actions) => {
         addContact({ id: nanoid(), name: values.name, number: values.number });
         actions.resetForm();
  };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={ContactFormSchema} >
            <Form className={css.form}>
                <label htmlFor={nameId}>Name</label>
                <Field className={css.field} type="text" name="name" id={nameId}/>
                <ErrorMessage
                    className={css.error}
                    name="name"
                    component="span"
                />
                <label htmlFor={numberId}>Number</label>
                <Field className={css.field} type="number" name="number" id={numberId}/>
                <ErrorMessage
                    className={css.error}
                    name="number"
                    component="span"
                />

                <button className={css.button} type="submit">Add contact</button>
            </Form>
            
        </Formik>
    );
}