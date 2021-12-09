import { Link } from 'gatsby';
import React from 'react';
import Button from '../components/Button';
import CloudinaryImage from '../components/CloudinaryImage';
import Column from '../components/Column';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Row from '../components/Row';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { ABOUT, ACTING, THEATRE_PEDAGOGY } from '../constants/routes';

function IndexPage(): JSX.Element {
  return (
    <Layout>
      <SEO title="Home" />

      <Section isFull>
        <Grid>
          <Row align="center">
            <Column span={4}>
              <h2>Über mich</h2>
              <p>
                Mein Name ist Nicole Bunge, ich bin staatlich anerkannte Schauspielerin und
                Theaterpädagogin. Studiert habe ich an der Theater Akademie in Stuttgart. Derzeit
                lebe und arbeite ich in Berlin und spiele unter anderem am Berliner Kriminal Theater
                in Friedrichshain, sowie am „Theater aus dem Koffer“, Berlin. Zudem doziere ich an
                der Reduta Schauspielschule Berlin.
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

      <Section isFull>
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

      <Section isFull>
        <Grid>
          <Row align="center">
            <Column span={4} start={2}>
              <h2>Theaterpädagogik</h2>
              <p>
                Theaterpädagogik bedeutet für mich die Kompetenzen des Einzelnen und der Gruppe
                durch praktisches Arbeiten zu fördern. In meiner theaterpädagogischen Arbeit geht es
                für mich nicht nur darum, etwas über Schauspiel zu erlernen, sondern auch etwas über
                sich selbst. Theaterspielen hilft uns dabei sich selbst und seine Umwelt wahrzunehem
                und zu verstehen.
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
    </Layout>
  );
}

export default IndexPage;
