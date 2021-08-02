import { PageProps } from 'gatsby';
import React from 'react';
import Column from '../components/Column';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Row from '../components/Row';
import Section from '../components/Section';
import SEO from '../components/SEO';

function ActingPage(_props: PageProps): JSX.Element {
  return (
    <Layout>
      <SEO title="Schauspiel" />

      <Section>
        <Grid>
          <h1 id="schauspiel">Schauspiel</h1>
          <Row>
            <Column span={8}>
              <p>
                Derzeit bin ich deutschlandweit und in Österreich und der Schweiz mit dem Berliner
                Kriminal Theater auf Tournee und in Berlin zu sehen. Zudem spiele ich am „Theater
                aus dem Koffer“ Berlin, welches in jedem Stück das Spielen mehrerer Instrumente und
                Gesangseinlagen beinhaltet.
                <br /> Mein Diplomstudium absolvierte ich an der Theater Akademie Stuttgart mit
                Schwerpunkt Schauspiel (ZAV) und Theaterpädagogik (BUT). Dort spielte ich an der
                Theater Kompagnie Stuttgart Shakespeares “Mittsommernachtstraum” und “Was Ihr
                Wollt”.
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
              <h3>Seit 2020</h3>

              <Row>
                <Column span={6}>
                  <p>
                    <strong>„Inspektor Campbells letzter Fall 23“</strong>, Jennifer <br />
                    Regie: Wolfgang Rumpf & Matti Wien <br />
                    <a
                      href="https://www.kriminaltheater.de/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Berliner Kriminal Theater
                    </a>
                  </p>
                  <p>
                    <strong>„Die zwölf Gescchworenen“</strong>, Nr. 5 <br />
                    Regie: Wolfgang Rumpf <br />
                    <a
                      href="https://www.kriminaltheater.de/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Berliner Kriminal Theater
                    </a>
                  </p>
                </Column>
                <Column span={6} start={7}>
                  <p>
                    <strong>„Passagier 23“</strong>, Lisa <br />
                    Regie: Thomas Wingrich, <br />
                    <a
                      href="https://www.kriminaltheater.de/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Berliner Kriminal Theater
                    </a>
                  </p>
                </Column>
              </Row>

              <h3>Seit 2019</h3>

              <Row>
                <Column span={6}>
                  <p>
                    <strong>„Die Liedfee und der Drehschwungtanz“</strong>, Liedfee
                    <br />
                    Regie: Nadja Schock,{' '}
                    <a
                      href="https://theater-aus-dem-koffer.de/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Theater aus dem Koffer
                    </a>
                  </p>
                  <p>
                    <strong>„Toni und die Urwaldparty“</strong>, Toni
                    <br />
                    Regie: Nadja Schock,{' '}
                    <a
                      href="https://theater-aus-dem-koffer.de/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Theater aus dem Koffer
                    </a>
                  </p>
                  <p>
                    <strong>„Toni und das große Durcheinander“</strong>, Toni
                    <br />
                    Regie: Nadja Schock,{' '}
                    <a
                      href="https://theater-aus-dem-koffer.de/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Theater aus dem Koffer
                    </a>
                  </p>
                  <p>
                    <strong>„Toni und das Gewitter im Zwergenwald“</strong>, Toni
                    <br />
                    Regie: Nadja Schock,{' '}
                    <a
                      href="https://theater-aus-dem-koffer.de/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Theater aus dem Koffer
                    </a>
                  </p>
                </Column>
                <Column span={6} start={7}>
                  <p>
                    <strong>„Toni und die Gute-Laune-Geräusche“</strong>, Toni
                    <br />
                    Regie: Nadja Schock,{' '}
                    <a
                      href="https://theater-aus-dem-koffer.de/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Theater aus dem Koffer
                    </a>
                  </p>
                  <p>
                    <strong>„Toni und die Klapperschlangenbande“</strong>, Toni
                    <br />
                    Regie: Nadja Schock,{' '}
                    <a
                      href="https://theater-aus-dem-koffer.de/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Theater aus dem Koffer
                    </a>
                  </p>
                  <p>
                    <strong>„Toni und das geheimnisvolle Klingelingeling“</strong>, Toni
                    <br />
                    Regie: Nadja Schock,{' '}
                    <a
                      href="https://theater-aus-dem-koffer.de/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Theater aus dem Koffer
                    </a>
                  </p>
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
            <Column span={3}>
              <h2 id="rollenrepertoire">Rollenrepertoire</h2>
            </Column>

            <Column span={8} start={5}>
              <Row>
                <Column span={6}>
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
                </Column>

                <Column span={6} start={7}>
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
                  <h3>2013 - 2015, 2017 & 2018</h3>
                  <p>
                    <strong>Camera Acting</strong>, Workshop <br />
                    <a
                      href="http://aleksandarjovanovic.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Aleksandar Jovanovic
                    </a>
                  </p>

                  <h3>09.2013 - 09.2018</h3>
                  <p>
                    <strong>Ausbildung zur staatlich anerkannten Schauspielerin (ZAV)</strong>{' '}
                    <br />
                    <strong>
                      Ausbildung zur staatlich anerkannten Theaterpädagogin (BuT)
                    </strong>{' '}
                    <br />
                    <a
                      href="https://www.theater-akademie-stuttgart.de"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      TheaterAkademieStuttgart
                    </a>
                  </p>

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

                <Column span={6} start={7}>
                  <h3>2018</h3>
                  <p>
                    <strong>Camera Acting</strong>, Workshop <br />
                    <a href="http://www.attila-borlan.de" rel="noopener noreferrer" target="_blank">
                      Attila Borlan
                    </a>
                  </p>

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
              </Row>
            </Column>
          </Row>
        </Grid>
      </Section>
    </Layout>
  );
}

export default ActingPage;
