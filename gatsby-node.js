/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */

const { resolve } = require('path');

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

module.exports = {
  createPages,
};
