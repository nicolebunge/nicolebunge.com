import { graphql, PageProps } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React, { FC } from 'react';
import Gallery from '../components/Gallery';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

interface Image {
  node: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export interface GalleryPageProps {
  allFile: {
    images: Image[];
  };
}

const GalleryPage: FC<PageProps<GalleryPageProps>> = (props) => {
  const {
    data: {
      allFile: { images },
    },
  } = props;

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
          <Gallery images={images.map((image) => image.node.childImageSharp)} />
        </Grid>
      </Section>
    </Layout>
  );
};

export default GalleryPage;

export const pageQuery = graphql`
  query {
    allFile(
      filter: {
        relativePath: {
          in: [
            "alice.jpg"
            "berliner.jpg"
            "goth.jpg"
            "kompagnie-1.jpg"
            "kompagnie-2.jpg"
            "das-tote-maedchen.jpg"
          ]
        }
      }
    ) {
      images: edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;
