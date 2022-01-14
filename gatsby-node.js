/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */

const { resolve } = require('path');
const slugify = require('@sindresorhus/slugify');

const defaultTemplate = resolve('src/templates/default.tsx');

async function createPages({ actions, graphql, reporter }) {
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
    reporter.panicBuild('There was an error loading your pages', errors);

    return;
  }

  const {
    allMarkdownRemark: { edges },
  } = data;

  edges.forEach((edge) => {
    const { node } = edge;

    createPage({
      path: node.frontmatter.path,
      component: defaultTemplate,
      context: {},
    });
  });
}

function createSchemaCustomization({ actions }) {
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

function onCreateNode({ node, actions }) {
  const { internal } = node;

  if (['Director', 'Organization'].includes(internal.type)) {
    const { name } = node;
    const { createNodeField } = actions;

    createNodeField({
      name: 'slug',
      node,
      value: slugify(name, {
        decamelize: false,
      }),
    });
  }
}

module.exports = {
  createPages,
  createSchemaCustomization,
  onCreateNode,
};
