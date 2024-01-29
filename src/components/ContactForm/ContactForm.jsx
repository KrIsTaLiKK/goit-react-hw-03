import { Field, Formik, Form } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short name!')
    .max(50, 'Too long name!')
    .required('Required field!'),
  number: Yup.string()
    .min(3, 'Incorrect number!')
    .max(50, 'Incorrect number!')
    .required('Required field!'),
});

export const ContactForm = ({ addContact }) => {
  const userId = useId();
  const numderId = useId();

  const handleSubmit = (value, actions) => {
    addContact(value.name, value.number);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldWrap}>
          <label htmlFor={userId}>Name</label>
          <Field
            name="name"
            id={userId}
            className={css.formInput}
            placeholder="Enter name..."
          ></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div>
          <label htmlFor={numderId}>Number</label>
          <Field
            name="number"
            id={numderId}
            className={css.formInput}
            placeholder="Enter number..."
          ></Field>
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
