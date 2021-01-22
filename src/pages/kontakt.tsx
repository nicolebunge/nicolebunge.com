import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Column from '../components/Column';
import ContactForm from '../components/ContactForm';
import Grid from '../components/Grid';
import Icons from '../components/Icons';
import Layout from '../components/Layout';
import Row from '../components/Row';
import Section from '../components/Section';
import SEO from '../components/SEO';
import email from '../images/email.svg';

const ContactPage: FC<PageProps> = () => (
  <Layout>
    <SEO title="Kontakt" />

    <Section>
      <Grid>
        <h1>Kontakt</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nam iure expedita
          suscipit alias optio est reprehenderit quisquam repellendus aliquid cumque nihil aperiam
          harum quis ea ab, vel dolores dicta.
        </p>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <Row align="end">
          <Column span={3}>
            <div itemScope itemType="http://schema.org/Person">
              <address>
                <h5 itemProp="name">Nicole Bunge</h5>
                Schauspielerin & Theaterpädagogin
                <h5>E-Mail</h5>
                <img src={email} alt="E-Mail Adresse" width="147.1" height="15" />
                <h5>Webseite</h5>
                <a href="https://nicolebunge.com">www.nicolebunge.com</a>
              </address>
              <Icons />
            </div>
          </Column>

          <Column span={8} start={5}>
            <ContactForm />
          </Column>
        </Row>
      </Grid>
    </Section>
  </Layout>
);

export default ContactPage;
