import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Column from '../components/Column';

function AboutPage(_props: PageProps): JSX.Element {
  return (
    <Layout>
      <SEO title="Über Mich" />

      <Section>
        <Grid>
          <h1 id="bermich">Über Mich</h1>
          <Row>
            <Column span={8}>
              <p>
                Mein Name ist Nicole Bunge, ich bin staatlich anerkannte Schauspielerin und
                Theaterpädagogin. Studiert habe ich an der Theater Akademie in Stuttgart. Derzeit
                lebe und arbeite ich in Berlin und spiele unter anderem am Berliner Kriminal Theater
                in Friedrichshain, sowie am „Theater aus dem Koffer“, Berlin. Zudem doziere ich an
                der Reduta Schauspielschule Berlin.{' '}
              </p>
              <p>
                In Baden Württemberg bin ich seit vier Jahren jeden Sommer als leitende
                Theaterpädagogin für das Theaterferienprogramm am Landeskriminalamt zuständig. Schon
                im frühen Kindesalter begann ich Instrumente zu spielen,Turniere zu tanzen und zu
                schauspielern.
              </p>
              <p>
                Tanz und Bewegung sind für mich wichtige Ausdrucksmittel am Thea- ter, in meiner
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

            <Column span={3} start={6}>
              <h3>Herkunft</h3>
              <ul>
                <li>Geboren in Ludwigsburg</li>
                <li>Nationalität: deutsch</li>
              </ul>
            </Column>

            <Column span={3} start={10}>
              <h3>Wohnmöglichkeit</h3>
              <ul>
                <li>Berlin</li>
                <li>Stuttgart</li>
              </ul>
            </Column>

            <Column span={3} start={6}>
              <h3>Aussehen</h3>
              <ul>
                <li>Augenfarbe: grau-grün</li>
                <li>Haare: dunkelblond, sehr lang</li>
              </ul>
            </Column>

            <Column span={3} start={10}>
              <h3>Statur</h3>
              <ul>
                <li>165cm groß</li>
                <li>Konfektion: XS</li>
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

            <Column span={3} start={6}>
              <h3 id="sprachen">Sprachen & Dialekte</h3>
              <ul>
                <li>Deutsch (Muttersprache)</li>
                <li>Französisch (fließend)</li>
                <li>Spanisch (fließend)</li>
                <li>Englisch (fließend)</li>
                <li>Berlinerisch</li>
              </ul>
            </Column>

            <Column span={3} start={10}>
              <h3 id="musik">Musik</h3>
              <ul>
                <li>Blockflöte</li>
                <li>Altflöte</li>
                <li>E-Gitarre</li>
                <li>Akustik-Gitarre</li>
                <li>Trommeln (Djembé)</li>
              </ul>
            </Column>

            <Column span={3} start={6}>
              <h3 id="tanz">Tanz</h3>
              <ul>
                <li>10 Jahre Standard- und Latein-Turniertanz</li>
                <li>Ballett, Hip-Hop, Modern, Jazz, Stepptanz, Contemporary</li>
              </ul>
            </Column>

            <Column span={3} start={10}>
              <h3 id="sport">Sport</h3>
              <ul>
                <li>Schwimmen</li>
                <li>Reiten</li>
                <li>Fechten</li>
                <li>Jonglage</li>
              </ul>
            </Column>

            <Column span={3} start={6}>
              <h3 id="gesang">Gesang</h3>
              <ul>
                <li>Mezzosopran</li>
              </ul>
            </Column>

            <Column span={3} start={10}>
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
