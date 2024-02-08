import React from 'react';
import { Button, CloudinaryImage, Column, Grid, Link, Row, SEO, Section } from '../components';
import { ABOUT, ACTING, DANCING, THEATRE_PEDAGOGY } from '../constants/routes';
import { useOrganizations } from '../hooks/organizations';

function IndexPage(): JSX.Element {
  const { berlinerKriminalTheater, longo, theaterAkademieStuttgart, theaterAusDemKoffer } =
    useOrganizations();

  return (
    <>
      <Section isFull>
        <Grid>
          <Row align="center">
            <Column span={4}>
              <h2>Über mich</h2>
              <p>
                Mein Name ist <span itemProp="name">Nicole Bunge</span>, ich bin staatlich
                anerkannte Schauspielerin und Theaterpädagogin. Studiert habe ich an der{' '}
                {theaterAkademieStuttgart.name}. Derzeit lebe und arbeite ich in Berlin und spiele
                unter anderem am {berlinerKriminalTheater.name} in Friedrichshain, Berlin. Zudem
                unterrichte ich als Tanz- und Schauspielcoach am {longo.name}.
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
                  src="gallery/portrait/10_kqpbxw.jpg"
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
                  src="home/theaterpaedagogik.jpg"
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
            <Column span={4} start={5}>
              <h2>Tanz</h2>
              <p>
                Tanz bedeutet für mich den Einklang von Körper und Seele. Es ist eine zeitlose
                Interpretation des Lebens. Es ist mehr, es ist das Leben. Jede Bewegung im Tanz ist
                eine Geschichte, ein Gedicht. Mein Körper erzählt eine Geschichte in einer Ästhetik,
                die in meinen Augen in dieser Kunstform so berührend ist, wie in keiner anderen.
              </p>
              <Button to={DANCING.path}>Mehr zu Tanz</Button>
            </Column>
            <Column span={4} start={1}>
              <Link to={DANCING.path}>
                <CloudinaryImage src="tanz-rumba.jpg" alt="Rumba Tanz" width={464} height={464} />
              </Link>
            </Column>
          </Row>
        </Grid>
      </Section>
    </>
  );
}

export function Head(): JSX.Element {
  return <SEO title="Home" />;
}

export default IndexPage;
