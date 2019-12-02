import React from 'react';
import Column from '../components/Column';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Row from '../components/Row';
import Section from '../components/Section';
import SEO from '../components/SEO';

const TheatrePedagogyPage: React.FC = () => (
  <Layout>
    <SEO title="Theaterpädagogik" />

    <Section>
      <Grid>
        <h1 id="theaterpaedagogik">Theaterpädagogik</h1>
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
            <h2 id="projekte">Projekte</h2>
          </Column>

          <Column span={6} start={6}>
            <h3>Unterstützung der Theaterpädagogen</h3>
            <p>
              Unterstützung der Theaterpädagogen in den jeweiligen Theaterprojekten an der
              Bismackschule Stuttgart Feuerbach
            </p>
          </Column>

          <Column span={6} start={6}>
            <h3>Theaterpädagogische Zwischenprüfung</h3>
            <p>
              Erarbeitung eines Stückes anhand eines Märchens mit Studenten des Grundlagenjahres
            </p>
          </Column>

          <Column span={6} start={6}>
            <h3>Workshopleitung der 13. Schultheatertage am Landestheater Tübingen</h3>
            <p>
              Workshoperarbeitung anhand eines Stücktitels im Rahmen der Schultheatertage gezeigten
              Inszenierungen. Zentrale Aufgabe war aus den gemischten Spielgruppen eine Gruppe zu
              formen. Das Arbeitsergebnis des Workshops wurde im LTT öffentlich präsentiert
            </p>
          </Column>

          <Column span={6} start={6}>
            <h3>Theaterpädagogisches Diplomabschlussprojekt</h3>
            <p>
              Theaterpädagogisches Diplomabschlussprojekt an der Steinenberg-Grundschule in
              Stuttgart Hedelfingen Theaterpädagogischer Unterricht mit Schülern der dritten Klasse.
              „Das Hexenstück – Wie sehe ich mich selbst? Wie sehen die anderen mich? Wie agieren
              wir gemeinsam und was können wir damit erreichen?“ Entwicklung und Aufführung eines
              Theaterstückes zum Projektthema, sowie schriftliche Reflexionsmappe
            </p>
          </Column>

          <Column span={6} start={6}>
            <h3>Theaterpädagogische Diplomabschlussprüfung im Fachbereich Regie</h3>
            <p>
              Erarbeitung eines Theaterstückes anhand der Stückvorlage „Leonce und Lena“ von Georg
              Büchner mit Studenten des Grundlagen- und zweiten Studienjahres
            </p>
          </Column>

          <Column span={6} start={6}>
            <h3>Theaterpädagogin an der Kita Matt Lamb Berlin</h3>
          </Column>
        </Row>
      </Grid>
    </Section>
  </Layout>
);

export default TheatrePedagogyPage;