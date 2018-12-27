import React from 'react';
import ContactForm from '../components/ContactForm';
import Icons from '../components/Icons';
import Layout from '../components/Layout';
import email from '../images/email.svg';

const ContactPage = () => (
  <Layout>
    <h1>Kontakt</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nam iure
      expedita suscipit alias optio est reprehenderit quisquam repellendus
      aliquid cumque nihil aperiam harum quis ea ab, vel dolores dicta.
    </p>
    <div itemScope itemType="http://schema.org/Person">
      <address>
        <span itemProp="name">Nicole Bunge</span>
        <br />
        <img src={email} alt="E-Mail Adresse" width="147.1" height="15" />
      </address>
      <Icons />
    </div>
    <ContactForm />
  </Layout>
);

export default ContactPage;
