import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Gallery from '../components/Gallery';

function GalleryPage(_props: PageProps): JSX.Element {
  return (
    <Layout>
      <SEO title="Galerie" />

      <Section>
        <Grid>
          <Gallery
            images={[
              {
                src: 'gallery/alice.jpg',
                alt: 'Rolle: Alice',
              },
              {
                src: 'gallery/berliner.jpg',
                alt: 'Rolle: Berliner',
              },
              {
                src: 'gallery/goth.jpg',
                alt: 'Rolle: Goth',
              },
              {
                src: 'gallery/kompagnie-1.jpg',
                alt: 'Theater Kompagnie Stuttgart',
              },
              {
                src: 'gallery/kompagnie-2.jpg',
                alt: 'Theater Kompagnie Stuttgart',
              },
              {
                src: 'gallery/das-tote-maedchen.jpg',
                alt: 'Rolle: Das tote Mädchen',
              },
            ]}
          />
        </Grid>
      </Section>
    </Layout>
  );
}

export default GalleryPage;
