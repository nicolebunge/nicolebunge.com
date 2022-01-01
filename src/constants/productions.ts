import { GOLD, RUMPF, SCHOCK, WIEN, WINGRICH } from './directors';
import { BERLINER_KRIMINAL_THEATER, FILMAKADEMIE, THEATER_AUS_DEM_KOFFER } from './organizations';

const PRODUCTIONS = [
  {
    name: 'Erbarmen',
    role: 'Lis Sørensen',
    organization: BERLINER_KRIMINAL_THEATER,
    directors: [RUMPF],
  },
  {
    name: 'Arsen und Spitzenhäubchen',
    role: 'Elaine Harper',
    organization: BERLINER_KRIMINAL_THEATER,
    directors: [RUMPF],
  },
  {
    name: 'Inspektor Campbells letzter Fall 23',
    role: 'Jennifer',
    organization: BERLINER_KRIMINAL_THEATER,
    directors: [RUMPF, WIEN],
  },
  {
    name: 'Die zwölf Geschworenen',
    role: 'Nr. 5',
    organization: BERLINER_KRIMINAL_THEATER,
    directors: [RUMPF],
  },
  {
    name: 'Passagier 23',
    role: 'Lisa',
    organization: BERLINER_KRIMINAL_THEATER,
    directors: [WINGRICH],
  },
  {
    name: 'Die Liedfee und das Liedwettsingen',
    role: 'Liedfee',
    organization: THEATER_AUS_DEM_KOFFER,
    directors: [SCHOCK],
  },
  {
    name: 'Die Liedfee und der Drehschwungtanz',
    role: 'Liedfee',
    organization: THEATER_AUS_DEM_KOFFER,
    directors: [SCHOCK],
  },
  {
    name: 'Toni und die Urwaldparty',
    role: 'Toni',
    organization: THEATER_AUS_DEM_KOFFER,
    directors: [SCHOCK],
  },
  {
    name: 'Toni und das große Durcheinander',
    role: 'Toni',
    organization: THEATER_AUS_DEM_KOFFER,
    directors: [SCHOCK],
  },
  {
    name: 'Toni und das Gewitter im Zwergenwald',
    role: 'Toni',
    organization: THEATER_AUS_DEM_KOFFER,
    directors: [SCHOCK],
  },
  {
    name: 'Toni und die Gute-Laune-Geräusche',
    role: 'Toni',
    organization: THEATER_AUS_DEM_KOFFER,
    directors: [SCHOCK],
  },
  {
    name: 'Toni und die Klapperschlangenbande',
    role: 'Toni',
    organization: THEATER_AUS_DEM_KOFFER,
    directors: [SCHOCK],
  },
  {
    name: 'Toni und die bunten Ostereier',
    role: 'Toni',
    organization: THEATER_AUS_DEM_KOFFER,
    directors: [SCHOCK],
  },
  {
    name: 'Toni und das geheimnisvolle Klingelingeling',
    role: 'Toni',
    organization: THEATER_AUS_DEM_KOFFER,
    directors: [SCHOCK],
  },
  {
    name: 'Crossing Borders',
    role: 'Leonie',
    organization: FILMAKADEMIE,
    directors: [GOLD],
  },
];

export default PRODUCTIONS;
