import React from 'react';
import Gallery from '../components/Gallery';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

function GalleryPage(): JSX.Element {
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
