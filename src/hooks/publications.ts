import { graphql, useStaticQuery } from 'gatsby';

interface Publication {
  date: string;
  id: string;
  title: string;
  url: string;
}

interface PublicationsQuery {
  allContentfulPublication: {
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
      allContentfulPublication(sort: { date: DESC }) {
        edges {
          node {
            id
            title
            date(formatString: "DD.MM.YYYY")
            url
          }
        }
      }
    }
  `);
}

export { usePublications };
export type { PublicationsQuery };
