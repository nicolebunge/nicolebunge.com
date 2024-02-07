/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */

import slugify from '@sindresorhus/slugify';
import type { CreateNodeArgs, CreateSchemaCustomizationArgs } from 'gatsby';
import { resolve } from 'node:path';

const defaultTemplate = resolve('src/templates/default.tsx');

interface Edge {
  node: {
    frontmatter: {
      path: string;
    };
  };
}

interface Data {
  allMarkdownRemark: {
    edges: Edge[];
  };
}

// async function createPages(props: CreatePagesArgs): Promise<void> {
//   const { actions, graphql, reporter } = props;
//   const { createPage } = actions;

//   const { data, errors } = await graphql<Data>(`
//     {
//       allMarkdownRemark(limit: 1000) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `);

//   if (errors) {
//     reporter.panicOnBuild('There was an error loading your pages', errors);
//   }

//   const {
//     allMarkdownRemark: { edges },
//   } = data!;

//   edges.forEach((edge) => {
//     const {
//       node: {
//         frontmatter: { path },
//       },
//     } = edge;

//     createPage({
//       path,
//       component: defaultTemplate,
//       context: {
//         slug: path,
//       },
//     });
//   });
// }

function createSchemaCustomization(props: CreateSchemaCustomizationArgs): void {
  const { actions } = props;
  const { createTypes } = actions;

  const typeDefs = `
    type Director implements Node {
      productions: [Production] @link(by: "director.fields.slug", from: "fields.slug")
    }
    type Organization implements Node {
      productions: [Production] @link(by: "organization.fields.slug", from: "slug")
    }
    type Production implements Node {
      directors: [Director] @link(by: "fields.slug")
      organization: Organization @link(by: "fields.slug")
    }
  `;

  createTypes(typeDefs);
}

interface DirectorNode extends Record<string, unknown> {
  internal: {
    type: 'Director';
  };
  name: string;
}

interface OrganizationNode extends Record<string, unknown> {
  internal: {
    type: 'Organization';
  };
  name: string;
}

interface ContentfulProductionNode extends Record<string, unknown> {
  internal: {
    type: 'ContentfulProduction';
  };
  start: string;
}

type Node = DirectorNode | OrganizationNode | ContentfulProductionNode;

/**
 *
 * @link https://www.gatsbyjs.com/docs/creating-slugs-for-pages/
 */
function onCreateNode(props: CreateNodeArgs<Node>): void {
  const {
    node,
    actions: { createNodeField },
  } = props;
  const { internal } = node;

  if (['Director', 'Organization'].includes(internal.type)) {
    const { name } = node;

    createNodeField({
      name: 'slug',
      node,
      value: slugify(name, {
        decamelize: false,
      }),
    });
  }

  if (internal.type === 'ContentfulProduction') {
    const { start } = node;
    const date = new Date(start);
    const year = date.getFullYear();

    createNodeField({
      name: 'startYear',
      node,
      value: year.toString(),
    });
  }
}

export { createSchemaCustomization, onCreateNode };
export type { Node };

