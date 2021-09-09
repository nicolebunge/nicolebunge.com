/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const environment = process.env.NODE_ENV;

module.exports = {
  siteMetadata: {
    author: '@BungeNicole',
    description:
      'Schauspielerin & Theaterpädagogin. Schauspielerin am Berliner Kriminal Theater, sowie am Theater aus dem Koffer. Dozentin an der Reduta Schauspielschule Berlin.',
    siteUrl: 'https://nicolebunge.com',
    title: 'Nicole Bunge',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-126642580-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/nicole-bunge-icon.png',
        name: 'Nicole Bunge',
        short_name: 'Nicole Bunge',
        start_url: '/',
        theme_color: '#000',
      },
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://0e535dcfe7544f5f9bcbe979d0a5f181@sentry.io/1400930',
        environment,
        enabled: ['production', 'stage'].includes(environment),
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
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
      resolve: 'gatsby-transformer-remark',
    },
  ],
};
