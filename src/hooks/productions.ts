import { graphql, useStaticQuery } from 'gatsby';

interface Director {
  id: string;
  name: string;
  url?: string;
}

interface Organization {
  id: string;
  name: string;
  url: string;
}

interface Edge {
  node: {
    directors: Director[];
    id: string;
    name: string;
    organization?: Organization;
    role: string;
  };
}

interface Group {
  fieldValue: string;
  edges: Edge[];
}

interface ProductionsQuery {
  theater: {
    group: Group[];
  };
  film: {
    group: Group[];
  };
  rollenrepertoire: {
    group: Group[];
  };
}

function useProductions(): ProductionsQuery {
  return useStaticQuery<ProductionsQuery>(graphql`
    {
      theater: allContentfulProduction(
        filter: { metadata: { tags: { elemMatch: { name: { eq: "Theater" } } } } }
        sort: { start: DESC }
      ) {
        group(field: { fields: { startYear: SELECT } }) {
          fieldValue
          edges {
            node {
              id
              name
              role
              organization {
                id
                name
                url
              }
              directors {
                id
                name
                url
              }
            }
          }
        }
      }
      film: allContentfulProduction(
        filter: { metadata: { tags: { elemMatch: { name: { eq: "Film" } } } } }
        sort: { start: DESC }
      ) {
        group(field: { fields: { startYear: SELECT } }) {
          fieldValue
          edges {
            node {
              id
              name
              role
              organization {
                id
                name
                url
              }
              directors {
                id
                name
                url
              }
            }
          }
        }
      }
      rollenrepertoire: allContentfulProduction(
        filter: { metadata: { tags: { elemMatch: { name: { eq: "Rollenrepertoire" } } } } }
        sort: { start: DESC }
      ) {
        group(field: { fields: { startYear: SELECT } }) {
          fieldValue
          edges {
            node {
              id
              name
              role
              directors {
                id
                name
                url
              }
            }
          }
        }
      }
    }
  `);
}

export { useProductions };
export type { ProductionsQuery };
