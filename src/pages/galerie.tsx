import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Gallery from '../components/Gallery';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const GalleryPage: FC<PageProps> = (props) => {
  return (
    <Layout>
      <SEO title="Galerie" />

      <Section>
        <Grid>
          <h1 id="galerie">Galerie</h1>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Gallery />
        </Grid>
      </Section>
    </Layout>
  );
};

export default GalleryPage;
