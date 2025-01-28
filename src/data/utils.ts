import directors from '@/data/directors.json';
import organizations from '@/data/organizations.json';

function findDirectorByName(name: string) {
  return directors.find((director) => director.name === name);
}

function findDirectorBySlug(slug: string) {
  return directors.find((director) => director.slug === slug);
}

function findOrganizationByName(name: string) {
  return organizations.find((organization) => organization.name === name);
}

function findOrganizationBySlug(slug: string) {
  return organizations.find((organization) => organization.slug === slug);
}

const berlinerKriminalTheater = findOrganizationByName('Berliner Kriminal Theater')!;
const bismarckschule = findOrganizationByName('Bismackschule Stuttgart Feuerbach')!;
const but = findOrganizationByName('BuT')!;
const lka = findOrganizationByName('Landeskriminalamt Baden-Württemberg')!;
const longo = findOrganizationByName('Tanzraum Longo')!;
const reduta = findOrganizationByName('Reduta-Berlin Schauspielschule')!;
const steinenbergSchule = findOrganizationByName('Steinenberg-Grundschule')!;
const theaterAkademieStuttgart = findOrganizationByName('Theater Akademie Stuttgart')!;
const theaterAusDemKoffer = findOrganizationByName('Theater aus dem Koffer')!;
const theaterKompagnieStuttgart = findOrganizationByName('Theater Kompagnie Stuttgart')!;
const zav = findOrganizationByName('ZAV')!;

const akkaya = findDirectorByName('Ben Akkaya')!;
const borlan = findDirectorByName('Attila Borlan')!;
const jovanovic = findDirectorByName('Aleksandar Jovanovic')!;
const schloesser = findDirectorByName('Christian Schlösser')!;

export {
  akkaya,
  berlinerKriminalTheater,
  bismarckschule,
  borlan,
  but,
  findDirectorByName,
  findDirectorBySlug,
  findOrganizationByName,
  findOrganizationBySlug,
  jovanovic,
  lka,
  longo,
  reduta,
  schloesser,
  steinenbergSchule,
  theaterAkademieStuttgart,
  theaterAusDemKoffer,
  theaterKompagnieStuttgart,
  zav,
};
