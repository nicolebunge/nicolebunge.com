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

interface Edge {
  node: {
    directors: Director[];
    id: string;
    name: string;
    organization: Organization;
    role: string;
  };
}

interface Group {
  fieldValue: string;
  edges: Edge[];
}

interface ProductionsQuery {
  allProduction: {
    group: Group[];
  };
}

function useProductions(): ProductionsQuery {
  return useStaticQuery<ProductionsQuery>(graphql`
    {
      allProduction {
        group(field: { organization: { fields: { slug: SELECT } } }) {
          fieldValue
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
    }
  `);
}

export { useProductions };
export type { ProductionsQuery };
