import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import GridColumn from '../components/GridColumn';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import GridRow from '../components/GridRow';
import Section from '../components/Section';
import SEO from '../components/SEO';

const TheatrePedagogyPage = ({ data }) => (
  <Layout>
    <SEO title="Theaterpädagogik" />

    <Section>
      <Grid>
        <h1 id="theaterpaedagogik">Theaterpädagogik</h1>
        <GridRow>
          <GridColumn columnSpan={8}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nihil.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel molestias dolor earum
              reprehenderit. Quis rerum quae eius? Ad sequi quisquam reprehenderit officia eveniet?
              Et, quod eaque reiciendis in vel ab. Rerum labore expedita minima aut adipisci eum,
              fugit tempore aperiam voluptatum nisi maxime optio velit quo voluptatem illum quia?
            </p>
          </GridColumn>
        </GridRow>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <GridRow>
          <GridColumn columnSpan={4}>
            <h2 id="projekte">Projekte</h2>
          </GridColumn>

          <GridColumn columnSpan={6} columnStart={6}>
            <h3>Unterstützung der Theaterpädagogen</h3>
            <p>
              Unterstützung der Theaterpädagogen in den jeweiligen Theaterprojekten an der
              Bismackschule Stuttgart Feuerbach
            </p>
          </GridColumn>

          <GridColumn columnSpan={6} columnStart={6}>
            <h3>Theaterpädagogische Zwischenprüfung</h3>
            <p>
              Erarbeitung eines Stückes anhand eines Märchens mit Studenten des Grundlagenjahres
            </p>
          </GridColumn>

          <GridColumn columnSpan={6} columnStart={6}>
            <h3>Workshopleitung der 13. Schultheatertage am Landestheater Tübingen</h3>
            <p>
              Workshoperarbeitung anhand eines Stücktitels im Rahmen der Schultheatertage gezeigten
              Inszenierungen. Zentrale Aufgabe war aus den gemischten Spielgruppen eine Gruppe zu
              formen. Das Arbeitsergebnis des Workshops wurde im LTT öffentlich präsentiert
            </p>
          </GridColumn>

          <GridColumn columnSpan={6} columnStart={6}>
            <h3>Theaterpädagogisches Diplomabschlussprojekt</h3>
            <p>
              Theaterpädagogisches Diplomabschlussprojekt an der Steinenberg-Grundschule in
              Stuttgart Hedelfingen Theaterpädagogischer Unterricht mit Schülern der dritten Klasse.
              „Das Hexenstück – Wie sehe ich mich selbst? Wie sehen die anderen mich? Wie agieren
              wir gemeinsam und was können wir damit erreichen?“ Entwicklung und Aufführung eines
              Theaterstückes zum Projektthema, sowie schriftliche Reflexionsmappe
            </p>
          </GridColumn>

          <GridColumn columnSpan={6} columnStart={6}>
            <h3>Theaterpädagogische Diplomabschlussprüfung im Fachbereich Regie</h3>
            <p>
              Erarbeitung eines Theaterstückes anhand der Stückvorlage „Leonce und Lena“ von Georg
              Büchner mit Studenten des Grundlagen- und zweiten Studienjahres
            </p>
          </GridColumn>

          <GridColumn columnSpan={6} columnStart={6}>
            <h3>Theaterpädagogin an der Kita Matt Lamb Berlin</h3>
          </GridColumn>
        </GridRow>
      </Grid>
    </Section>
  </Layout>
);

export default TheatrePedagogyPage;

export const pageQuery = graphql`
  query {
    image3: file(relativePath: { eq: "image-03-large.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
