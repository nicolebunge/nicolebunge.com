import React from 'react';
import { Formik, Form, Field } from 'formik';
import Label from '../Label';
import styles from './style.module.css';

const ContactForm = () => (
  <Formik>
    <Form
      action="/kontakt/danke"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      method="post"
      name="contact"
    >
      <Field
        name="form-name"
        type="hidden"
        value="contact"
      />

      <div className={styles.form__field}>
        <Label htmlFor="name">Name</Label>
        <Field
          className={styles.form__input}
          name="name"
          required
          type="text"
        />
      </div>

      <div className={styles.form__field}>
        <Label htmlFor="email">E-Mail</Label>
        <Field
          className={styles.form__input}
          name="email"
          required
          type="email"
        />
      </div>

      <div className={styles.form__field}>
        <Label htmlFor="message">Nachricht</Label>
        <Field
          className={styles.form__input}
          component="textarea"
          required
          name="message"
        />
      </div>

      <div className={styles.form__field}>
        <button type="submit">Senden</button>
      </div>
    </Form>
  </Formik>
);

export default ContactForm;
