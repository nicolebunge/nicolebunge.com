/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable camelcase */

import dotenv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';
import startCase from 'lodash/startCase';
import type { Node } from './gatsby-node';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    author: '@BungeNicole',
    description:
      'Schauspielerin & Theaterpädagogin. Schauspielerin am Berliner Kriminal Theater, sowie am Theater aus dem Koffer. Dozentin an der Reduta Schauspielschule Berlin.',
    siteUrl: 'https://nicolebunge.com',
    title: 'Nicole Bunge',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-image',
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'joqlngd4kbcg',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        enableTags: true,
      },
    },
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
};

export default config;
