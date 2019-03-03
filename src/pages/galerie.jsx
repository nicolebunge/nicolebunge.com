import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Gallery from '../components/Gallery';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const GalleryPage = ({ data }) => (
  <Layout>
    <SEO title="Galerie" />

    <Section>
      <Grid>
        <h1 id="galerie">Galerie</h1>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <Gallery images={data.allFile.images.map((image) => image.node.childImageSharp)} />
      </Grid>
    </Section>
  </Layout>
);

GalleryPage.propTypes = {
  data: PropTypes.shape(),
};

GalleryPage.defaultProps = {
  data: null,
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
