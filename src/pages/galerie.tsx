import React from 'react';
import { Gallery, Grid, SEO, Section } from '../components';

function GalleryPage(): JSX.Element {
  return (
    <Section>
      <Grid>
        <Gallery
          images={[
            {
              src: 'gallery/alice.jpg',
              alt: 'Rolle: Alice',
              width: 336,
              height: 224,
            },
            {
              src: 'gallery/berliner.jpg',
              alt: 'Rolle: Berliner',
              width: 459,
              height: 573,
            },
            {
              src: 'gallery/goth.jpg',
              alt: 'Rolle: Goth',
              width: 336,
              height: 420,
            },
            {
              src: 'gallery/kompagnie-1.jpg',
              alt: 'Theater Kompagnie Stuttgart',
              width: 213,
              height: 213,
            },
            {
              src: 'gallery/kompagnie-2.jpg',
              alt: 'Theater Kompagnie Stuttgart',
              width: 581,
              height: 465,
            },
            {
              src: 'gallery/das-tote-maedchen.jpg',
              alt: 'Rolle: Das tote Mädchen',
              width: 459,
              height: 573,
            },
          ]}
        />
      </Grid>
    </Section>
  );
}

export function Head(): JSX.Element {
  return <SEO title="Galerie" />;
}

export default GalleryPage;
