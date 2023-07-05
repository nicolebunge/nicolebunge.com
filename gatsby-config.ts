/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable camelcase */

import type { GatsbyConfig } from 'gatsby';
import startCase from 'lodash/startCase';
import type { Node } from './gatsby-node';

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
      /**
       * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/
       * @link https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/#anonymize
       */
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        anonymize: true,
        enableWebVitalsTracking: true,
        trackingId: 'UA-126642580-1',
      },
    },
    {
      resolve: '@sentry/gatsby',
      options: {
        tracesSampleRate: 0.2,
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
