import { graphql, useStaticQuery } from 'gatsby';

interface DirectorsQuery {
  borlan: {
    name: string;
    url: string;
  };
  gold: {
    name: string;
  };
  jovanovic: {
    name: string;
    url: string;
  };
  rumpf: {
    name: string;
  };
  schloesser: {
    name: string;
  };
  schock: {
    name: string;
  };
  wien: {
    name: string;
  };
  wingrich: {
    name: string;
  };
}

function useDirectors(): DirectorsQuery {
  return useStaticQuery<DirectorsQuery>(graphql`
    {
      borlan: director(fields: { slug: { eq: "attila-borlan" } }) {
        name
        url
      }
      gold: director(fields: { slug: { eq: "abini-gold" } }) {
        name
      }
      jovanovic: director(fields: { slug: { eq: "aleksandar-jovanovic" } }) {
        name
        url
      }
      rumpf: director(fields: { slug: { eq: "wolfgang-rumpf" } }) {
        name
      }
      schloesser: director(fields: { slug: { eq: "christian-schloesser" } }) {
        name
      }
      schock: director(fields: { slug: { eq: "nadja-schock" } }) {
        name
      }
      wien: director(fields: { slug: { eq: "matti-wien" } }) {
        name
      }
      wingrich: director(fields: { slug: { eq: "thomas-wingrich" } }) {
        name
      }
    }
  `);
}

export { useDirectors, DirectorsQuery };
