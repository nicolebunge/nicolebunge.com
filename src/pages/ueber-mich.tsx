import React from 'react';
import Column from '../components/Column';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Row from '../components/Row';
import Section from '../components/Section';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => (
  <Layout>
    <SEO title="Über Mich" />

    <Section>
      <Grid>
        <h1 id="bermich">Über Mich</h1>
        <Row>
          <Column span={8}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nihil.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel molestias dolor earum
              reprehenderit. Quis rerum quae eius? Ad sequi quisquam reprehenderit officia eveniet?
              Et, quod eaque reiciendis in vel ab. Rerum labore expedita minima aut adipisci eum,
              fugit tempore aperiam voluptatum nisi maxime optio velit quo voluptatem illum quia?
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
              <li>spanisch (fließend)</li>
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

export default AboutPage;
