import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Column from '../components/Column';
import Icons from '../components/Icons';
import ContactForm from '../components/ContactForm';

function ContactPage(_props: PageProps): JSX.Element {
  return (
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
                  <img src="/email.svg" alt="E-Mail Adresse" width="147.1" height="15" />
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
}

export default ContactPage;
