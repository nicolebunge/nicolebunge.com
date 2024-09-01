/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable camelcase */

import type { GatsbyConfig } from 'gatsby';
import startCase from 'lodash/startCase';
import type { Node } from './gatsby-node';

const config = {
  siteMetadata: {
    author: '@BungeNicole',
    description:
      'Schauspielerin & Theaterpädagogin. Schauspielerin am Berliner Kriminal Theater, sowie am Theater aus dem Koffer. Dozentin an der Reduta Schauspielschule Berlin.',
    siteUrl: 'https://nicolebunge.com',
    title: 'Nicole Bunge',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: ({ node }: { node: Node }) => startCase(node.name),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
  ],
} satisfies GatsbyConfig;

export default config;
