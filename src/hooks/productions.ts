import { graphql, useStaticQuery } from 'gatsby';

interface Director {
  name: string;
  url?: string;
}

interface Organization {
  fields: {
    slug: string;
  };
  name: string;
  url: string;
}

interface ProductionsQuery {
  allProduction: {
    edges: [
      {
        node: {
          directors: Director[];
          id: string;
          name: string;
          organization: Organization;
          role: string;
        };
      },
    ];
  };
}

function useProductions(): ProductionsQuery {
  return useStaticQuery<ProductionsQuery>(graphql`
    {
      allProduction {
        edges {
          node {
            directors {
              name
              url
            }
            id
            name
            organization {
              fields {
                slug
              }
              name
              url
            }
            role
          }
        }
      }
    }
  `);
}

export { useProductions, ProductionsQuery };
