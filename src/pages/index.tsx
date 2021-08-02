import { Link, PageProps } from 'gatsby';
import React from 'react';
import Button from '../components/Button';
import CloudinaryImage from '../components/CloudinaryImage';
import Column from '../components/Column';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Row from '../components/Row';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { ABOUT, ACTING, CONTACT, THEATRE_PEDAGOGY } from '../constants/routes';

function IndexPage(_props: PageProps): JSX.Element {
  return (
    <Layout>
      <SEO title="Home" />

      <Section full>
        <Grid>
          <Row align="center">
            <Column span={4}>
              <h2>Über mich</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae magnam voluptas
                doloribus vero cumque voluptatum beatae aperiam autem inventore, vitae aspernatur,
                consequatur dicta. Veritatis, repudiandae non voluptate repellat eos at odit, nobis
                magni explicabo officiis beatae, officia rerum vero ipsa ipsam? Vitae, mollitia
                dolorem! Obcaecati sint neque non delectus soluta!
              </p>
              <Button to={ABOUT.path}>Mehr über mich</Button>
            </Column>

            <Column span={5} start={6}>
              <Link to={ABOUT.path}>
                <CloudinaryImage src="gallery/image-01.jpg" alt="Nicole Bunge" />
              </Link>
            </Column>
          </Row>
        </Grid>
      </Section>

      <Section full>
        <Grid>
          <Row align="center">
            <Column span={4} start={7}>
              <h2>Schauspiel</h2>
              <p>
                Derzeit bin ich deutschlandweit und in Österreich und der Schweiz mit dem Berliner
                Kriminal Theater auf Tournee und in Berlin zu sehen. Zudem spiele ich am „Theater
                aus dem Koffer“ Berlin, welches in jedem Stück das Spielen mehrerer Instrumente und
                Gesangseinlagen beinhaltet.
              </p>
              <Button to={ACTING.path}>Mehr zu Schauspiel</Button>
            </Column>
            <Column span={4} start={3}>
              <Link to={ACTING.path}>
                <CloudinaryImage src="gallery/image-02.jpg" alt="Nicole Bunge" />
              </Link>
            </Column>
          </Row>
        </Grid>
      </Section>

      <Section full>
        <Grid>
          <Row align="center">
            <Column span={4} start={2}>
              <h2>Theaterpädagogik</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae magnam voluptas
                doloribus vero cumque voluptatum beatae aperiam autem inventore, vitae aspernatur,
                consequatur dicta. Veritatis, repudiandae non voluptate repellat eos at odit, nobis
                magni explicabo officiis beatae, officia rerum vero ipsa ipsam? Vitae, mollitia
                dolorem! Obcaecati sint neque non delectus soluta!
              </p>
              <Button to={THEATRE_PEDAGOGY.path}>Mehr zu Theaterpädagogik</Button>
            </Column>

            <Column span={5} start={8}>
              <Link to={THEATRE_PEDAGOGY.path}>
                <CloudinaryImage src="gallery/image-03.jpg" alt="Nicole Bunge" />
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
              <Button to={CONTACT.path}>Kontakt aufnehmen</Button>
            </Column>
          </Row>
        </Grid>
      </Section>
    </Layout>
  );
}

export default IndexPage;
