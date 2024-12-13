import { Column, Grid, Row, Section } from '@/components';
import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Tanz',
};

function DancingPage() {
  return (
    <Section>
      <Grid>
        <h1 id="tanz">Tanz</h1>
        <Row>
          <Column span={9}>
            <p>
              Seit meinem vierten Lebensjahr tanze ich, lernte Ballett und Standard- und Lateintanz.
              Zehn Jahre tanzte ich Standard- und Latein-Turniertanz, ebenso Ballett, Contemporary,
              Modern, Jazz und Hip-Hop und sammelte so schon ab dem sechsten Lebensjahr Erfahrungen
              auf der Bühne. Seit 2023 bin ich Tanz- und Schauspielcoach an der Tanzschule Longo und
              unterrichte Kinder und Jugendliche unter anderem in Pré-Ballett, tänzerischer und
              musikalischer Früherziehung, Ballett Level1, Latein-und Standardtanz sowie Schauspiel.
              An der Reduta Schauspielschule für Theater und Film, war sie 2021 und 2022 Dozentin
              für Gesellschaftstanz und Gruppendynamik.
            </p>
          </Column>
        </Row>
      </Grid>
    </Section>
  );
}

export { metadata };
export default DancingPage;
