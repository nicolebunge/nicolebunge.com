import React from 'react';
import { Gallery, Grid, SEO, Section } from '../components';

function GalleryPage(): JSX.Element {
  return (
    <Section>
      <Grid>
        <Gallery
          images={[
            {
              src: 'gallery/portrait/1_ww2edw.jpg',
              alt: 'Rolle: Alice',
              width: 336,
              height: 224,
            },
            {
              src: 'gallery/portrait/2_jqk1et.jpg',
              alt: 'Rolle: Berliner',
              width: 459,
              height: 573,
            },
            {
              src: 'gallery/portrait/3_xsaoiy.jpg',
              alt: 'Rolle: Goth',
              width: 336,
              height: 420,
            },
            {
              src: 'gallery/portrait/4_gooylu.jpg',
              alt: 'Theater Kompagnie Stuttgart',
              width: 213,
              height: 213,
            },
            {
              src: 'gallery/portrait/5_sydsip.jpg',
              alt: 'Theater Kompagnie Stuttgart',
              width: 581,
              height: 465,
            },
            {
              src: 'gallery/portrait/6_rcczgv.jpg',
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
