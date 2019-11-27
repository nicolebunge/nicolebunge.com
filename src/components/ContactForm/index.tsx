import { Field, Form, Formik } from 'formik';
import React from 'react';
import GridColumn from '../GridColumn';
import Label from '../Label';
import Row from '../Row';
import styles from './style.module.css';

const ContactForm: React.FC = () => (
  <Formik
    initialValues={{ name: '', email: '', message: '' }}
    onSubmit={(_values, { setSubmitting }): void => {
      setSubmitting(false);
    }}
  >
    {({ isSubmitting }): JSX.Element => (
      <Form
        action="/kontakt/danke"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        className={styles.form}
        method="post"
        name="contact"
      >
        <Field name="form-name" type="hidden" value="contact" />

        <Row>
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
        </Row>

        <div className={styles.form__field}>
          <button type="submit" disabled={isSubmitting}>
            Senden
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
