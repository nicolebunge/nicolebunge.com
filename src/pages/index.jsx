import { Link } from 'gatsby';
import React from 'react';
import Gallery from '../components/Gallery';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';
import * as routes from '../constants/routes';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Section>
      <h2>Über Mich</h2>
      <Gallery
        images={[
          'https://via.placeholder.com/800x1600',
          'https://via.placeholder.com/800x600',
          'https://via.placeholder.com/800x600',
          'https://via.placeholder.com/800x600',
          'https://via.placeholder.com/800x600',
        ]}
      />
      <Link to={routes.ABOUT.path}>
        {routes.ABOUT.name}
      </Link>
    </Section>

    <Section>
      <h2>Schauspiel</h2>
      <Link to={routes.ACTING.path}>
        {routes.ACTING.name}
      </Link>
    </Section>

    <Section>
      <h2>Theaterpädagogik</h2>
      <Link to={routes.THEATRE_PEDAGOGY.path}>
        {routes.THEATRE_PEDAGOGY.name}
      </Link>
    </Section>

    <Section>
      <h2>Kontakt</h2>
      <Link to={routes.CONTACT.path}>
        {routes.CONTACT.name}
      </Link>
    </Section>
  </Layout>
);

export default IndexPage;
