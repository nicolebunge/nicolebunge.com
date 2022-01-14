import { graphql, useStaticQuery } from 'gatsby';

interface Organization {
  name: string;
  url: string;
}

interface OrganizationsQuery {
  berlinerKriminalTheater: Organization;
  bismarckschule: Organization;
  but: Organization;
  lka: Organization;
  reduta: Organization;
  steinenbergSchule: Organization;
  theaterAkademieStuttgart: Organization;
  theaterAusDemKoffer: Organization;
  theaterKompagnieStuttgart: Organization;
  zav: Organization;
}

function useOrganizations(): OrganizationsQuery {
  return useStaticQuery<OrganizationsQuery>(graphql`
    {
      berlinerKriminalTheater: organization(fields: { slug: { eq: "berliner-kriminal-theater" } }) {
        name
        url
      }
      bismarckschule: organization(fields: { slug: { eq: "bismackschule-stuttgart-feuerbach" } }) {
        name
        url
      }
      but: organization(fields: { slug: { eq: "but" } }) {
        name
        url
      }
      lka: organization(fields: { slug: { eq: "landeskriminalamt-baden-wuerttemberg" } }) {
        name
        url
      }
      reduta: organization(fields: { slug: { eq: "reduta-berlin-schauspielschule" } }) {
        name
        url
      }
      steinenbergSchule: organization(fields: { slug: { eq: "steinenberg-grundschule" } }) {
        name
        url
      }
      theaterAkademieStuttgart: organization(
        fields: { slug: { eq: "theater-akademie-stuttgart" } }
      ) {
        name
        url
      }
      theaterAusDemKoffer: organization(fields: { slug: { eq: "theater-aus-dem-koffer" } }) {
        name
        url
      }
      theaterKompagnieStuttgart: organization(
        fields: { slug: { eq: "theater-kompagnie-stuttgart" } }
      ) {
        name
        url
      }
      zav: organization(fields: { slug: { eq: "zav" } }) {
        name
        url
      }
    }
  `);
}

export { useOrganizations, OrganizationsQuery };
