import React from 'react';
import { Formik, Form, Field } from 'formik';
import GridColumn from '../GridColumn';
import Label from '../Label';
import GridRow from '../GridRow';
import styles from './style.module.css';

const ContactForm = () => (
  <Formik>
    <Form
      action="/kontakt/danke"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      className={styles.form}
      method="post"
      name="contact"
    >
      <Field name="form-name" type="hidden" value="contact" />

      <GridRow>
        <GridColumn columnSpan={6}>
          <div className={styles.form__field}>
            <Field
              autoComplete="name"
              className={styles.form__input}
              name="name"
              placeholder="Name"
              required
              type="text"
            />
            <Label className={styles.form__label} htmlFor="name">
              Name
            </Label>
          </div>
        </GridColumn>

        <GridColumn columnSpan={6} columnStart={7}>
          <div className={styles.form__field}>
            <Field
              autoComplete="email"
              className={styles.form__input}
              name="email"
              placeholder="E-Mail"
              required
              type="email"
            />
            <Label className={styles.form__label} htmlFor="email">
              E-Mail
            </Label>
          </div>
        </GridColumn>

        <GridColumn columnSpan={12}>
          <div className={styles.form__field}>
            <Field
              className={styles.form__input}
              component="textarea"
              name="message"
              placeholder="Nachricht"
              required
            />
            <Label className={styles.form__label} htmlFor="message">
              Nachricht
            </Label>
          </div>
        </GridColumn>
      </GridRow>

      <div className={styles.form__field}>
        <button type="submit">Senden</button>
      </div>
    </Form>
  </Formik>
);

export default ContactForm;
