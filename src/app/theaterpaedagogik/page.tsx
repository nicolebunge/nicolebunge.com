import { Column, Grid, Link, Row, Section } from '@/components';
import { bismarckschule, reduta, steinenbergSchule } from '@/data/utils';
import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Theaterpädagogik',
};

function TheatrePedagogyPage() {
  return (
    <>
      <Section>
        <Grid>
          <h1 id="theaterpaedagogik">Theaterpädagogik</h1>
          <Row>
            <Column span={9}>
              <p>
                Theaterpädagogik bedeutet für mich die Kompetenzen des Einzelnen und der Gruppe
                durch praktisches Arbeiten zu fördern. In meiner theaterpädagogischen Arbeit geht es
                für mich nicht nur darum, etwas über Schauspiel zu erlernen, sondern auch etwas über
                sich selbst. Theaterspielen hilft uns dabei sich selbst und seine Umwelt wahrzunehem
                und zu verstehen.
              </p>
              <p>
                Als Theaterpädagogin ist es mir wichtig mit der Gruppe zu forschen und Themen zu be-
                und erarbeiten.
              </p>
              <p>
                Ich möchte die Möglichkeit bieten, den Alltag ablegen zu können und die eigene
                Persönlichkeit dadurch in Bewegung kommen zu lassen. Es soll miteinander ins Spiel
                und auf die Bühne gehen. Mir ist es ein Anliegen, spielerisch und theatralisch
                Themen zu vermitteln und zu bearbeiten sowie das Selbstbewusstsein der Teilnehmenden
                zu stärken und die Möglichkeit zum eigenen persönlichen Ausdruck zu geben.
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

            <Column span={4} start={5}>
              <h3>Dozentin für Gesellschaftstanz</h3>
              <p>
                Seit Mai 2020 an der <Link to={reduta.url}>{reduta.name}</Link> für Theater und Film
              </p>
            </Column>

            <Column span={4} start={9}>
              <h3>Unterstützung der Theaterpädagogen</h3>
              <p>
                Unterstützung der Theaterpädagogen in den jeweiligen Theaterprojekten an der{' '}
                <Link to={bismarckschule.url}>{bismarckschule.name}</Link>
              </p>
            </Column>

            <Column span={4} start={5}>
              <h3>Theaterpädagogische Zwischenprüfung</h3>
              <p>
                Erarbeitung eines Stückes anhand eines Märchens mit Studenten des Grundlagenjahres
              </p>
            </Column>

            <Column span={4} start={9}>
              <h3>Workshopleitung der 13. Schultheatertage am Landestheater Tübingen</h3>
              <p>
                Workshoperarbeitung anhand eines Stücktitels im Rahmen der Schultheatertage
                gezeigten Inszenierungen. Zentrale Aufgabe war aus den gemischten Spielgruppen eine
                Gruppe zu formen. Das Arbeitsergebnis des Workshops wurde im LTT öffentlich
                präsentiert
              </p>
            </Column>

            <Column span={4} start={5}>
              <h3>Theaterpädagogisches Diplomabschlussprojekt</h3>
              <p>
                Theaterpädagogisches Diplomabschlussprojekt an der{' '}
                <Link to={steinenbergSchule.url}>{steinenbergSchule.name}</Link> in Stuttgart
                Hedelfingen Theaterpädagogischer Unterricht mit Schülern der dritten Klasse. „Das
                Hexenstück – Wie sehe ich mich selbst? Wie sehen die anderen mich? Wie agieren wir
                gemeinsam und was können wir damit erreichen?“ Entwicklung und Aufführung eines
                Theaterstückes zum Projektthema, sowie schriftliche Reflexionsmappe
              </p>
            </Column>

            <Column span={4} start={9}>
              <h3>Theaterpädagogische Diplomabschlussprüfung im Fachbereich Regie</h3>
              <p>
                Erarbeitung eines Theaterstückes anhand der Stückvorlage „Leonce und Lena“ von Georg
                Büchner mit Studenten des Grundlagen- und zweiten Studienjahres
              </p>
            </Column>

            <Column span={4} start={5}>
              <h3>Theaterpädagogin an der Kita Matt Lamb Berlin</h3>
            </Column>
          </Row>
        </Grid>
      </Section>
    </>
  );
}

export { metadata };
export default TheatrePedagogyPage;
