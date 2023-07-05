import React from 'react';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Column from '../components/Column';
import Link from '../components/Link';
import Productions from '../components/Productions';
import { useDirectors } from '../hooks/directors';
import { useOrganizations } from '../hooks/organizations';
import { useProductions } from '../hooks/productions';
import { usePublications } from '../hooks/publications';

function ActingPage(): JSX.Element {
  const { akkaya, borlan, jovanovic, schloesser } = useDirectors();
  const {
    berlinerKriminalTheater,
    but,
    theaterAkademieStuttgart,
    theaterAusDemKoffer,
    theaterKompagnieStuttgart,
    zav,
  } = useOrganizations();
  const { allProduction } = useProductions();
  const { allPublication } = usePublications();

  return (
    <>
      <Section>
        <Grid>
          <h1 id="schauspiel">Schauspiel</h1>
          <Row>
            <Column span={9}>
              <p>
                Derzeit bin ich deutschlandweit und in Österreich und der Schweiz mit dem{' '}
                <Link to={berlinerKriminalTheater.url}>{berlinerKriminalTheater.name}</Link> auf
                Tournee und in Berlin zu sehen. Zudem spiele ich am{' '}
                <Link to={theaterAusDemKoffer.url}>{theaterAusDemKoffer.name}</Link> Berlin, welches
                in jedem Stück das Spielen mehrerer Instrumente und Gesangseinlagen beinhaltet.
                <br /> Mein Diplomstudium absolvierte ich an der{' '}
                <Link to={theaterAkademieStuttgart.url}>{theaterAkademieStuttgart.name}</Link> mit
                Schwerpunkt Schauspiel (<Link to={zav.url}>{zav.name}</Link>) und Theaterpädagogik (
                <Link to={but.url}>{but.name}</Link>
                ). Dort spielte ich an der{' '}
                <Link to={theaterKompagnieStuttgart.url}>
                  {theaterKompagnieStuttgart.name}
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
          <h1>Vita</h1>
          <Row>
            <Column span={4}>
              <h2 id="persoenlichkeit">Persönlichkeit</h2>
            </Column>

            <Column span={4} start={5}>
              <h3>Aussehen</h3>
              <ul>
                <li>Augenfarbe: grau-grün</li>
                <li>Haare: dunkelblond, sehr lang</li>
              </ul>
            </Column>

            <Column span={4} start={9}>
              <h3>Herkunft</h3>
              <ul>
                <li>Geboren in Ludwigsburg</li>
                <li>Nationalität: deutsch</li>
              </ul>
            </Column>

            <Column span={4} start={5}>
              <h3>Statur</h3>
              <ul>
                <li>165 cm groß</li>
                <li>Konfektion: xs</li>
              </ul>
            </Column>

            <Column span={4} start={9}>
              <h3>Wohnmöglichkeit</h3>
              <ul>
                <li>Berlin</li>
                <li>Stuttgart</li>
              </ul>
            </Column>
          </Row>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Row>
            <Column span={4}>
              <h2 id="kenntnisse-und-faehigkeiten">Kenntnisse & Fähigkeiten</h2>
            </Column>

            <Column span={4} start={5}>
              <h3 id="sprachen">Sprachen & Dialekte</h3>
              <ul>
                <li>Deutsch (Muttersprache)</li>
                <li>Französisch (fließend)</li>
                <li>Spanisch (fließend)</li>
                <li>Englisch (fließend)</li>
                <li>Schwäbisch</li>
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
              <h3 id="fuehrerschein">Führerschein</h3>
              <ul>
                <li>Klasse B</li>
              </ul>
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
                      productions={
                        allProduction.group
                          .find((group) => group.fieldValue === 'berliner-kriminal-theater')
                          ?.edges.map((edge) => edge.node) || []
                      }
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
                      productions={
                        allProduction.group
                          .find((group) => group.fieldValue === 'theater-aus-dem-koffer')
                          ?.edges.map((edge) => edge.node) || []
                      }
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
                      productions={
                        allProduction.group
                          .find((group) => group.fieldValue === 'filmakademie-baden-wuerttemberg')
                          ?.edges.map((edge) => edge.node) || []
                      }
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
              <h2 id="bildung">Bildung</h2>
            </Column>

            <Column span={8} start={5}>
              <Row>
                <Column span={7}>
                  <h3>2018</h3>
                  <div>
                    <p>
                      <strong>
                        Diplomabschluss zur staatlich anerkannten Schauspielerin (ZAV)
                      </strong>{' '}
                      <br />
                      <strong>
                        Diplomabschluss zur staatlich anerkannten Theaterpädagogin (BuT)
                      </strong>{' '}
                      <br />
                      <Link to={theaterAkademieStuttgart.url}>{theaterAkademieStuttgart.name}</Link>
                    </p>
                  </div>

                  <h3>2013 – 2018</h3>
                  <div>
                    <p>
                      <strong>Studium an der</strong>{' '}
                      <Link to={theaterAkademieStuttgart.url}>{theaterAkademieStuttgart.name}</Link>
                    </p>
                  </div>

                  <h3>2013 – 2018</h3>
                  <div>
                    <p>
                      <strong>Camera Acting</strong>, Workshop mit{' '}
                      <Link to={jovanovic.url}>{jovanovic.name}</Link>
                    </p>
                  </div>

                  <h3>2018</h3>
                  <div>
                    <p>
                      <strong>Camera Acting</strong>, Workshop mit{' '}
                      <Link to={borlan.url}>{borlan.name}</Link>
                    </p>
                  </div>

                  <h3>2017 / 2018</h3>
                  <div>
                    <p>
                      <strong>Camera Acting</strong>, Workshop mit{' '}
                      <Link to={akkaya.url}>{akkaya.name}</Link>
                    </p>
                  </div>

                  <h3>2017 / 2018</h3>
                  <div>
                    <p>
                      <strong>„Ein Mittsommernachtstraum“</strong>, Spinnweb & Krankenschwester{' '}
                      <br />
                      Regie: {schloesser.name},{' '}
                      <Link to={theaterKompagnieStuttgart.url}>
                        {theaterKompagnieStuttgart.name}
                      </Link>
                    </p>
                  </div>

                  <h3>2017 / 2018</h3>
                  <div>
                    <p>
                      <strong>„Was Ihr Wollt“</strong>, Olivia <br />
                      Regie: {schloesser.name},{' '}
                      <Link to={theaterKompagnieStuttgart.url}>
                        {theaterKompagnieStuttgart.name}
                      </Link>
                    </p>
                  </div>

                  <h3>2012</h3>
                  <div>
                    <p>
                      <strong>Abitur</strong>
                      <br />
                      Friedrich-Schiller-Gymnasium, Ludwigsburg
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
              <h2 id="publikationen">Publikationen</h2>
            </Column>

            <Column span={8} start={5}>
              <ul>
                {allPublication.edges.map((edge) => {
                  const { date, id, title, url } = edge.node;

                  return (
                    <li key={id}>
                      <Link to={url}>„{title}“</Link> – {date}
                    </li>
                  );
                })}
              </ul>
            </Column>
          </Row>
        </Grid>
      </Section>
    </>
  );
}

export function Head(): JSX.Element {
  return <SEO title="Schauspiel" />;
}

export default ActingPage;
