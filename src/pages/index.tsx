import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Column from '../components/Column';
import Button from '../components/Button';
import Link from '../components/Link';
import CloudinaryImage from '../components/CloudinaryImage';
import { ABOUT, ACTING, THEATRE_PEDAGOGY } from '../constants/routes';
import { useOrganizations } from '../hooks/organizations';

function IndexPage(): JSX.Element {
  const { berlinerKriminalTheater, reduta, theaterAkademieStuttgart, theaterAusDemKoffer } =
    useOrganizations();

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
                Theaterpädagogin. Studiert habe ich an der {theaterAkademieStuttgart.name} in
                Stuttgart. Derzeit lebe und arbeite ich in Berlin und spiele unter anderem am{' '}
                {berlinerKriminalTheater.name} in Friedrichshain, sowie am{' '}
                {theaterAusDemKoffer.name}, Berlin. Zudem doziere ich an der {reduta.name}.
              </p>
              <Button to={ABOUT.path}>Mehr über mich</Button>
            </Column>

            <Column span={5} start={6}>
              <Link to={ABOUT.path}>
                <CloudinaryImage
                  src="gallery/image-01.jpg"
                  alt="Nicole Bunge"
                  width={464}
                  height={464}
                />
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
                Derzeit bin ich deutschlandweit und in Österreich und der Schweiz mit dem{' '}
                {berlinerKriminalTheater.name} auf Tournee und in Berlin zu sehen. Zudem spiele ich
                am {theaterAusDemKoffer.name} Berlin, welches in jedem Stück das Spielen mehrerer
                Instrumente und Gesangseinlagen beinhaltet.
              </p>
              <Button to={ACTING.path}>Mehr zu Schauspiel</Button>
            </Column>
            <Column span={4} start={3}>
              <Link to={ACTING.path}>
                <CloudinaryImage
                  src="gallery/image-02.jpg"
                  alt="Nicole Bunge"
                  width={451}
                  height={602}
                />
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
                <CloudinaryImage
                  src="gallery/image-03.jpg"
                  alt="Nicole Bunge"
                  width={464}
                  height={464}
                />
              </Link>
            </Column>
          </Row>
        </Grid>
      </Section>
    </Layout>
  );
}

export default IndexPage;
