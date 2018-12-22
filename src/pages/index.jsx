import React from 'react';
import Gallery from '../components/Gallery';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <h2>Lorem ipsum dolor sit.</h2>
      <Gallery
        images={[
          'https://via.placeholder.com/800x1600',
          'https://via.placeholder.com/800x600',
          'https://via.placeholder.com/800x600',
          'https://via.placeholder.com/800x600',
          'https://via.placeholder.com/800x600',
        ]}
      />
    </Section>
  </Layout>
);

export default IndexPage;
