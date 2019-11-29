import React from 'react';
import Column from '../components/Column';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Row from '../components/Row';
import Section from '../components/Section';
import SEO from '../components/SEO';

const ActingPage: React.FC = () => (
  <Layout>
    <SEO title="Schauspiel" />

    <Section>
      <Grid>
        <h1 id="schauspiel">Schauspiel</h1>
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
            <h2 id="rollenrepertoire">Rollenrepertoire</h2>
          </Column>

          <Column span={3} start={6}>
            <p>
              <strong>„Ein idealer Gatte“</strong>, Das junge Mädchen <br />
              Oscar Wilde
            </p>
          </Column>

          <Column span={3} start={10}>
            <p>
              <strong>„Der Tor und der Tod“</strong>, Mabel Chiltern <br />
              Hugo von Hofmannsthal
            </p>
          </Column>

          <Column span={3} start={6}>
            <p>
              <strong>„Alice im Wunderland“</strong>, Alice <br />
              Roland Schimmelpfennig
            </p>
          </Column>

          <Column span={3} start={10}>
            <p>
              <strong>„Emilia Galotti“</strong>, Gräfin Orsina <br />
              Gotthold Ephraim Lessing
            </p>
          </Column>

          <Column span={3} start={6}>
            <p>
              <strong>„La Double Inconstance“</strong>, Silvia <br />
              Pierre Carlet de Marivaux
            </p>
          </Column>

          <Column span={3} start={10}>
            <p>
              <strong>„Merlin oder das wüste Land“</strong>, Mordred <br />
              Tankred Dorst
            </p>
          </Column>

          <Column span={3} start={6}>
            <p>
              <strong>„Bier für Frauen“</strong>, Eine Frau <br />
              Felicia Zeller
            </p>
          </Column>
        </Row>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <Row>
          <Column span={4}>
            <h2 id="film">Film</h2>
          </Column>

          <Column span={3} start={6}>
            <h3>2017</h3>
            <p>
              <strong>„Crossing Borders“</strong>, Leonie <br />
              Regie: Abini Gold, <br />
              <a href="https://www.filmakademie.de/" rel="noopener noreferrer" target="_blank">
                Filmakademie Baden-Württemberg
              </a>
            </p>
          </Column>
        </Row>
      </Grid>
    </Section>

    <Section>
      <Grid>
        <Row>
          <Column span={4}>
            <h2 id="studium">Studium</h2>
          </Column>

          <Column span={3} start={6}>
            <h3>2013 - 2015, 2017 & 2018</h3>
            <p>
              <strong>Camera Acting</strong>, Workshop <br />
              <a href="http://aleksandarjovanovic.com/" rel="noopener noreferrer" target="_blank">
                Aleksandar Jovanovic
              </a>
            </p>
          </Column>

          <Column span={3} start={10}>
            <h3>2018</h3>
            <p>
              <strong>Camera Acting</strong>, Workshop <br />
              <a href="http://www.attila-borlan.de" rel="noopener noreferrer" target="_blank">
                Attila Borlan
              </a>
            </p>
          </Column>

          <Column span={3} start={6}>
            <h3>09.2013 - 09.2018</h3>
            <p>
              <strong>Ausbildung zur staatlich anerkannten Schauspielerin (ZAV)</strong> <br />
              <strong>Ausbildung zur staatlich anerkannten Theaterpädagogin (BuT)</strong> <br />
              <a
                href="https://www.theater-akademie-stuttgart.de"
                rel="noopener noreferrer"
                target="_blank"
              >
                TheaterAkademieStuttgart
              </a>
            </p>
          </Column>

          <Column span={3} start={10}>
            <h3>2017 - 2018</h3>
            <p>
              <strong>„Was Ihr Wollt“</strong>, Olivia <br />
              Regie: Christian Schlösser,{' '}
              <a
                href="https://www.theater-akademie-stuttgart.de"
                rel="noopener noreferrer"
                target="_blank"
              >
                TheaterKompagnieStuttgart
              </a>
            </p>
          </Column>

          <Column span={3} start={6}>
            <h3>2017 - 2018</h3>
            <p>
              <strong>„Ein Mittsommernachtstraum“</strong>, Spinnweb & Krankenschwester <br />
              Regie: Christian Schlösser,{' '}
              <a
                href="https://www.theater-akademie-stuttgart.de"
                rel="noopener noreferrer"
                target="_blank"
              >
                TheaterKompagnieStuttgart
              </a>
            </p>
          </Column>
        </Row>
      </Grid>
    </Section>
  </Layout>
);

export default ActingPage;
