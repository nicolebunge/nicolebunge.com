import React from 'react';
import Column from '../components/Column';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Link from '../components/Link';
import Row from '../components/Row';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { useOrganizations } from '../hooks/organizations';

function AboutPage(): JSX.Element {
  const { berlinerKriminalTheater, lka, reduta, theaterAkademieStuttgart, theaterAusDemKoffer } =
    useOrganizations();

  return (
    <Layout>
      <SEO title="Über Mich" />

      <Section>
        <Grid>
          <h1 id="ueber-mich">Über Mich</h1>
          <Row>
            <Column span={9}>
              <p>
                Mein Name ist Nicole Bunge, ich bin staatlich anerkannte Schauspielerin und
                Theaterpädagogin. Studiert habe ich an der{' '}
                <Link to={theaterAkademieStuttgart.url}>{theaterAkademieStuttgart.name}</Link>.
                Derzeit lebe und arbeite ich in Berlin und spiele unter anderem am{' '}
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
              <h2 id="persoenlichkeit">Persönlichkeit</h2>
            </Column>

            <Column span={4} start={5}>
              <h3>Herkunft</h3>
              <ul>
                <li>Geboren in Ludwigsburg</li>
                <li>Nationalität: deutsch</li>
              </ul>
            </Column>

            <Column span={4} start={9}>
              <h3>Wohnmöglichkeit</h3>
              <ul>
                <li>Berlin</li>
                <li>Stuttgart</li>
              </ul>
            </Column>

            <Column span={4} start={5}>
              <h3>Aussehen</h3>
              <ul>
                <li>Augenfarbe: grau-grün</li>
                <li>Haare: dunkelblond, sehr lang</li>
              </ul>
            </Column>

            <Column span={4} start={9}>
              <h3>Statur</h3>
              <ul>
                <li>165 cm groß</li>
                <li>Konfektion: xs</li>
              </ul>
            </Column>
          </Row>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Row>
            <Column span={4}>
              <h2 id="kenntnisseundfhigkeiten">Kenntnisse & Fähigkeiten</h2>
            </Column>

            <Column span={4} start={5}>
              <h3 id="sprachen">Sprachen & Dialekte</h3>
              <ul>
                <li>Deutsch (Muttersprache)</li>
                <li>Französisch (fließend)</li>
                <li>Spanisch (fließend)</li>
                <li>Englisch (fließend)</li>
                <li>Berlinerisch</li>
              </ul>
            </Column>

            <Column span={4} start={9}>
              <h3 id="musik">Musik</h3>
              <ul>
                <li>Blockflöte</li>
                <li>Altflöte</li>
                <li>E-Gitarre</li>
                <li>Akustik-Gitarre</li>
                <li>Trommeln (Djembé)</li>
              </ul>
            </Column>

            <Column span={4} start={5}>
              <h3 id="tanz">Tanz</h3>
              <ul>
                <li>10 Jahre Standard- und Latein-Turniertanz</li>
                <li>Ballett, Hip-Hop, Modern, Jazz, Stepptanz, Contemporary</li>
              </ul>
            </Column>

            <Column span={4} start={9}>
              <h3 id="sport">Sport</h3>
              <ul>
                <li>Schwimmen</li>
                <li>Reiten</li>
                <li>Fechten</li>
                <li>Jonglage</li>
              </ul>
            </Column>

            <Column span={4} start={5}>
              <h3 id="gesang">Gesang</h3>
              <ul>
                <li>Mezzosopran</li>
              </ul>
            </Column>

            <Column span={4} start={9}>
              <h3 id="fuhrerschein">Führerschein</h3>
              <ul>
                <li>Klasse B</li>
              </ul>
            </Column>
          </Row>
        </Grid>
      </Section>
    </Layout>
  );
}

export default AboutPage;
