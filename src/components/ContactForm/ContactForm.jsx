import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css'; 

const ContactForm = ({ onAddContact }) => {
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
          <Form autoComplete="off" className={styles.contact_form}>
        <div>
          <label>
            Name:
            <Field name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
        </div>

        <div>
          <label>
            Number:
            <Field name="number" />
            <ErrorMessage name="number" component="div" />
          </label>
        </div>

              <button type="submit" className={styles.form_button}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
