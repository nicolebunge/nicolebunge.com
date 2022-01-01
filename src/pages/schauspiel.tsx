import React from 'react';
import Column from '../components/Column';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Link from '../components/Link';
import Productions from '../components/Productions';
import Row from '../components/Row';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { BORLAN, JOVANOVIC, SCHLOESSER } from '../constants/directors';
import {
  BERLINER_KRIMINAL_THEATER,
  BUT,
  THEATER_AKADEMIE_STUTTGART,
  THEATER_AUS_DEM_KOFFER,
  THEATER_KOMPAGNIE_STUTTGART,
  ZAV,
} from '../constants/organizations';
import PRODUCTIONS from '../constants/productions';

function ActingPage(): JSX.Element {
  return (
    <Layout>
      <SEO title="Schauspiel" />

      <Section>
        <Grid>
          <h1 id="schauspiel">Schauspiel</h1>
          <Row>
            <Column span={9}>
              <p>
                Derzeit bin ich deutschlandweit und in Österreich und der Schweiz mit dem{' '}
                <Link to={BERLINER_KRIMINAL_THEATER.url}>{BERLINER_KRIMINAL_THEATER.name}</Link> auf
                Tournee und in Berlin zu sehen. Zudem spiele ich am{' '}
                <Link to={THEATER_AUS_DEM_KOFFER.url}>{THEATER_AUS_DEM_KOFFER.name}</Link> Berlin,
                welches in jedem Stück das Spielen mehrerer Instrumente und Gesangseinlagen
                beinhaltet.
                <br /> Mein Diplomstudium absolvierte ich an der{' '}
                <Link to={THEATER_AKADEMIE_STUTTGART.url}>
                  {THEATER_AKADEMIE_STUTTGART.name}
                </Link>{' '}
                mit Schwerpunkt Schauspiel (<Link to={ZAV.url}>{ZAV.name}</Link>) und
                Theaterpädagogik (<Link to={BUT.url}>{BUT.name}</Link>
                ). Dort spielte ich an der{' '}
                <Link to={THEATER_KOMPAGNIE_STUTTGART.url}>
                  {THEATER_KOMPAGNIE_STUTTGART.name}
                </Link>{' '}
                Shakespeares „Mittsommernachtstraum“ und „Was Ihr Wollt“.
              </p>
              <p>
                Im frühen Kindesalter begann ich Instrumente zu spielen, Turniere zu tanzen und zu
                schauspielern. Tanzen gehört mit der Musik zu meinen großen Leidenschaften. Ich habe
                zehn Jahre Standard- und Latein-Turnier getanzt, ebenso Ballett und Hip-Hop. Ich
                spiele seit meiner Kindheit Block- und Altflöte, später lernte ich E-Gitarre,
                wodurch ich auch klassische Akustik-Gitarre spiele. Bewegung und Rhythmus sind für
                mich wichtige Ausdrucksmittel in meiner Arbeit.
              </p>
              <p>
                Als Schauspielerin möchte ich zeigen, dass sich der Alltag ablegen lassen kann, die
                eigene Persönlichkeit in Bewegung kommt und somit die Kreativität und Phantasie des
                Publikums wecken, wodurch diesem der Blick für die Kunst, seine Mitmenschen und sein
                Umfeld geöffnet werden kann.
              </p>
            </Column>
          </Row>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Row>
            <Column span={3}>
              <h2 id="theater">Theater</h2>
            </Column>

            <Column span={8} start={5}>
              <Row>
                <Column span={12}>
                  <h3>Seit 2020</h3>

                  <div
                    style={{
                      display: 'grid',
                      gap: '1em',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                    }}
                  >
                    <Productions
                      productions={PRODUCTIONS.filter(
                        (production) =>
                          production.organization.slug === 'berliner-kriminal-theater',
                      )}
                    />
                  </div>
                </Column>

                <Column span={12}>
                  <h3>Seit 2019</h3>

                  <div
                    style={{
                      display: 'grid',
                      gap: '1em',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                    }}
                  >
                    <Productions
                      productions={PRODUCTIONS.filter(
                        (production) => production.organization.slug === 'theater-aus-dem-koffer',
                      )}
                    />
                  </div>
                </Column>
              </Row>
            </Column>
          </Row>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Row>
            <Column span={3}>
              <h2 id="film">Film</h2>
            </Column>

            <Column span={8} start={5}>
              <Row>
                <Column span={12}>
                  <h3>2017</h3>
                  <div
                    style={{
                      display: 'grid',
                      gap: '1em',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                    }}
                  >
                    <Productions
                      productions={PRODUCTIONS.filter(
                        (production) =>
                          production.organization.slug === 'filmakademie-baden-wuerttemberg',
                      )}
                    />
                  </div>
                </Column>
              </Row>
            </Column>
          </Row>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Row>
            <Column span={3}>
              <h2 id="rollenrepertoire">Rollenrepertoire</h2>
            </Column>

            <Column span={8} start={5}>
              <Row>
                <Column span={12}>
                  <div
                    style={{
                      display: 'grid',
                      gap: '1em',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                    }}
                  >
                    <p>
                      <strong>„Ein idealer Gatte“</strong>, Das junge Mädchen <br />
                      Oscar Wilde
                    </p>
                    <p>
                      <strong>„Alice im Wunderland“</strong>, Alice <br />
                      Roland Schimmelpfennig
                    </p>
                    <p>
                      <strong>„La Double Inconstance“</strong>, Silvia <br />
                      Pierre Carlet de Marivaux
                    </p>
                    <p>
                      <strong>„Bier für Frauen“</strong>, Eine Frau <br />
                      Felicia Zeller
                    </p>
                    <p>
                      <strong>„Der Tor und der Tod“</strong>, Mabel Chiltern <br />
                      Hugo von Hofmannsthal
                    </p>
                    <p>
                      <strong>„Emilia Galotti“</strong>, Gräfin Orsina <br />
                      Gotthold Ephraim Lessing
                    </p>
                    <p>
                      <strong>„Merlin oder das wüste Land“</strong>, Mordred <br />
                      Tankred Dorst
                    </p>
                  </div>
                </Column>
              </Row>
            </Column>
          </Row>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Row>
            <Column span={3}>
              <h2 id="studium">Studium</h2>
            </Column>

            <Column span={8} start={5}>
              <Row>
                <Column span={6}>
                  <h3>2013 – 2015, 2017 & 2018</h3>
                  <div>
                    <p>
                      <strong>Camera Acting</strong>, Workshop <br />
                      <Link to={JOVANOVIC.url}>{JOVANOVIC.name}</Link>
                    </p>
                  </div>

                  <h3>09.2013 – 09.2018</h3>
                  <div>
                    <p>
                      <strong>Ausbildung zur staatlich anerkannten Schauspielerin (ZAV)</strong>{' '}
                      <br />
                      <strong>
                        Ausbildung zur staatlich anerkannten Theaterpädagogin (BuT)
                      </strong>{' '}
                      <br />
                      <Link to={THEATER_AKADEMIE_STUTTGART.url}>
                        {THEATER_AKADEMIE_STUTTGART.name}
                      </Link>
                    </p>
                  </div>

                  <h3>2017 – 2018</h3>
                  <div>
                    <p>
                      <strong>„Ein Mittsommernachtstraum“</strong>, Spinnweb & Krankenschwester{' '}
                      <br />
                      Regie: {SCHLOESSER.name},{' '}
                      <Link to={THEATER_AKADEMIE_STUTTGART.url}>
                        {THEATER_KOMPAGNIE_STUTTGART.name}
                      </Link>
                    </p>
                  </div>
                </Column>

                <Column span={6} start={7}>
                  <h3>2018</h3>
                  <div>
                    <p>
                      <strong>Camera Acting</strong>, Workshop <br />
                      <Link to={BORLAN.url}>{BORLAN.name}</Link>
                    </p>
                  </div>

                  <h3>2017 – 2018</h3>
                  <div>
                    <p>
                      <strong>„Was Ihr Wollt“</strong>, Olivia <br />
                      Regie: {SCHLOESSER.name},{' '}
                      <Link to={THEATER_AKADEMIE_STUTTGART.url}>
                        {THEATER_KOMPAGNIE_STUTTGART.name}
                      </Link>
                    </p>
                  </div>
                </Column>
              </Row>
            </Column>
          </Row>
        </Grid>
      </Section>
    </Layout>
  );
}

export default ActingPage;
