import React from 'react';
import ContactForm from '../components/ContactForm';
import Layout from '../components/Layout';
import email from '../images/email.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkedin.svg';
import xing from '../images/xing.svg';

const ContactPage = () => (
  <Layout>
    <h1>Kontakt</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nam iure
      expedita suscipit alias optio est reprehenderit quisquam repellendus
      aliquid cumque nihil aperiam harum quis ea ab, vel dolores dicta.
    </p>
    <address>
      Nicole Bunge
      <br />
      <img src={email} alt="E-Mail Adresse" width="147.1" height="15" />
    </address>
    <ul>
      <li>
        <a
          href="https://www.instagram.com/nicole.bunge/"
          itemProp="sameAs"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="Nicole Bunge auf Instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/nicole-bunge-1b891415a/"
          itemProp="sameAs"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={linkedin} alt="Nicole Bunge auf LinkedIn" />
        </a>
      </li>
      <li>
        <a
          href="https://www.xing.com/profile/Nicole_Bunge3"
          itemProp="sameAs"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={xing} alt="Nicole Bunge auf Xing" />
        </a>
      </li>
    </ul>
    <ContactForm />
  </Layout>
);

export default ContactPage;
