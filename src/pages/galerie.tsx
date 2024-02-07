import React from 'react';
import { Gallery, Grid, SEO, Section } from '../components';
import { useGallery } from '../hooks/galleries';

function GalleryPage(): JSX.Element {
  const { contentfulGallery } = useGallery();

  return (
    <Section>
      <Grid>
        <Gallery images={contentfulGallery.images} />
      </Grid>
    </Section>
  );
}

export function Head(): JSX.Element {
  return <SEO title="Galerie" />;
}

export default GalleryPage;
