import { graphql, Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import Button from '../components/Button';
import Column from '../components/Column';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Row from '../components/Row';
import Section from '../components/Section';
import SEO from '../components/SEO';
import * as routes from '../constants/routes';

export interface IndexPageProps {
  data: {
    image1: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    image2: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    image3: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Section full>
      <Grid>
        <Row>
          <Column span={4} rowAlign="center">
            <h2>Über mich</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae magnam voluptas
              doloribus vero cumque voluptatum beatae aperiam autem inventore, vitae aspernatur,
              consequatur dicta. Veritatis, repudiandae non voluptate repellat eos at odit, nobis
              magni explicabo officiis beatae, officia rerum vero ipsa ipsam? Vitae, mollitia
              dolorem! Obcaecati sint neque non delectus soluta!
            </p>
            <Button to={routes.ABOUT.path}>Mehr über mich</Button>
          </Column>

          <Column span={5} start={6}>
            <Link to={routes.ABOUT.path}>
              <Img fluid={data.image1.childImageSharp.fluid} />
            </Link>
          </Column>
        </Row>
      </Grid>
    </Section>

    <Section full>
      <Grid>
        <Row>
          <Column span={4} start={7} rowAlign="center">
            <h2>Schauspiel</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae magnam voluptas
              doloribus vero cumque voluptatum beatae aperiam autem inventore, vitae aspernatur,
              consequatur dicta. Veritatis, repudiandae non voluptate repellat eos at odit, nobis
              magni explicabo officiis beatae, officia rerum vero ipsa ipsam? Vitae, mollitia
              dolorem! Obcaecati sint neque non delectus soluta!
            </p>
            <Button to={routes.ACTING.path}>Mehr zu Schauspiel</Button>
          </Column>
          <Column span={4} start={3}>
            <Link to={routes.ACTING.path}>
              <Img fluid={data.image2.childImageSharp.fluid} />
            </Link>
          </Column>
        </Row>
      </Grid>
    </Section>

    <Section full>
      <Grid>
        <Row>
          <Column span={4} start={2} rowAlign="center">
            <h2>Theaterpädagogik</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae magnam voluptas
              doloribus vero cumque voluptatum beatae aperiam autem inventore, vitae aspernatur,
              consequatur dicta. Veritatis, repudiandae non voluptate repellat eos at odit, nobis
              magni explicabo officiis beatae, officia rerum vero ipsa ipsam? Vitae, mollitia
              dolorem! Obcaecati sint neque non delectus soluta!
            </p>
            <Button to={routes.THEATRE_PEDAGOGY.path}>Mehr zu Theaterpädagogik</Button>
          </Column>

          <Column span={5} start={8}>
            <Link to={routes.THEATRE_PEDAGOGY.path}>
              <Img fluid={data.image3.childImageSharp.fluid} />
            </Link>
          </Column>
        </Row>
      </Grid>
    </Section>

    <Section full>
      <Grid>
        <Row>
          <Column span={6} start={3}>
            <h2>Kontakt</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae magnam voluptas
              doloribus vero cumque voluptatum beatae aperiam autem inventore, vitae aspernatur,
              consequatur dicta. Veritatis, repudiandae non voluptate repellat eos at odit, nobis
              magni explicabo officiis beatae, officia rerum vero ipsa ipsam? Vitae, mollitia
              dolorem! Obcaecati sint neque non delectus soluta!
            </p>
            <Button to={routes.CONTACT.path}>Kontakt aufnehmen</Button>
          </Column>
        </Row>
      </Grid>
    </Section>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "image-01.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    image2: file(relativePath: { eq: "image-02.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    image3: file(relativePath: { eq: "image-03.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
