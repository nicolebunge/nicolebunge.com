import { graphql, useStaticQuery } from 'gatsby';

interface Publication {
  date: string;
  id: string;
  title: string;
  url: string;
}

interface PublicationsQuery {
  allPublication: {
    edges: [
      {
        node: Publication;
      },
    ];
  };
}

function usePublications(): PublicationsQuery {
  return useStaticQuery<PublicationsQuery>(graphql`
    {
      allPublication(sort: { date: DESC }) {
        edges {
          node {
            date(formatString: "DD.MM.YYYY")
            id
            title
            url
          }
        }
      }
    }
  `);
}

export { usePublications };
export type { PublicationsQuery };
