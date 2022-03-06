import { resolve } from 'path';
import type { GatsbyNode } from 'gatsby';
import slugify from '@sindresorhus/slugify';

const defaultTemplate = resolve('src/templates/default.tsx');

interface Data {
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          path: string;
        };
      };
    }[];
  };
}

interface Node {
  name: string;
}

const createPages: GatsbyNode['createPages'] = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild('There was an error loading your pages', errors);

    return;
  }

  const {
    allMarkdownRemark: { edges },
  } = data as Data;

  edges.forEach((edge) => {
    const { node } = edge;

    createPage({
      path: node.frontmatter.path,
      component: defaultTemplate,
      context: {},
    });
  });
};

const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
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
};

/**
 *
 * @link https://www.gatsbyjs.com/docs/creating-slugs-for-pages/
 */

const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions }) => {
  const { internal } = node;

  if (['Director', 'Organization'].includes(internal.type)) {
    const { name } = node as unknown as Node;
    const { createNodeField } = actions;

    createNodeField({
      name: 'slug',
      node,
      value: slugify(name, {
        decamelize: false,
      }),
    });
  }
};

export { createPages, createSchemaCustomization, onCreateNode };
