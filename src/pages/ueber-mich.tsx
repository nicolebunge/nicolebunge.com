import React from 'react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Column from '../components/Column';
import Link from '../components/Link';
import { useOrganizations } from '../hooks/organizations';

function AboutPage(): JSX.Element {
  const { berlinerKriminalTheater, lka, reduta, theaterAkademieStuttgart, theaterAusDemKoffer } =
    useOrganizations();

  return (
    <>
      <Section>
        <Grid>
          <h1 id="ueber-mich">Über Mich</h1>
          <Row>
            <Column span={9}>
              <p>
                Mein Name ist <span itemProp="name">Nicole Bunge</span>, ich bin staatlich
                anerkannte Schauspielerin und Theaterpädagogin. Studiert habe ich an der{' '}
                <Link to={theaterAkademieStuttgart.url}>{theaterAkademieStuttgart.name}</Link>.
                Derzeit lebe und arbeite ich in <span itemProp="addressLocality">Berlin</span> und
                spiele unter anderem am{' '}
                <Link to={berlinerKriminalTheater.url}>{berlinerKriminalTheater.name}</Link> in
                Friedrichshain, sowie am{' '}
                <Link to={theaterAusDemKoffer.url}>{theaterAusDemKoffer.name}</Link>, Berlin. Zudem
                doziere ich an der <Link to={reduta.url}>{reduta.name}</Link>.
              </p>
              <p>
                In Baden Württemberg bin ich seit vier Jahren jeden Sommer als leitende
                Theaterpädagogin für das Theaterferienprogramm am{' '}
                <Link to={lka.url}>{lka.name}</Link> zuständig. Schon im frühen Kindesalter begann
                ich Instrumente zu spielen, Turniere zu tanzen und zu schauspielern.
              </p>
              <p>
                Tanz und Bewegung sind für mich wichtige Ausdrucksmittel am Theater, in meiner
                schauspielerischen, als auch in meiner theaterpädagogischen Arbeit. Dies gehört mit
                der Musik zu meinen großen Leidenschaften. Ich habe zehn Jahre Standard- und
                Latein-Turnier getanzt, ebenso Ballett und Hip-Hop. Seit meiner Kindheit spiele ich
                Block-, Altflöte, als auch E-Gitarre. Die Sprache nicht allein als Mittel zu nutzen,
                um etwas zu erzählen, sondern als ein Ausdrucksmittel für Bewegung, Rhythmus und
                Klang, sind für mich wichtige Aspekte in meiner Arbeit.
              </p>
            </Column>
          </Row>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Row>
            <Column span={4}>
              <h2>Was Sie von mir und meiner Arbeit erwarten können</h2>
            </Column>

            <Column span={7} start={5}>
              <ul>
                <li>Gut strukturierte und klare Vorbereitung</li>
                <li>Tiefgründige und gut fundierte künstlerische Arbeit</li>
                <li>Prozess- und zielorientiert</li>
                <li>Gruppendynamische Prozesse – Die Erkenntniss des Individuums für die Gruppe</li>
                <li>Teamorientiertes Arbeiten</li>
                <li>Abholen und Leiten einer Gruppe</li>
              </ul>
            </Column>
          </Row>
        </Grid>
      </Section>
    </>
  );
}

export function Head(): JSX.Element {
  return <SEO title="Über Mich" />;
}

export default AboutPage;
