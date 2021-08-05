/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

module.exports = {
  siteMetadata: {
    title: 'Nicole Bunge',
    description:
      'Schauspielerin & Theaterpädagogin. Schauspielerin am Berliner Kriminal Theater, sowie am Theater aus dem Koffer. Dozentin an der Reduta Schauspielschule Berlin.',
    author: '@BungeNicole',
    siteUrl: 'https://nicolebunge.com',
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
        name: 'Nicole Bunge',
        short_name: 'Nicole Bunge',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#000',
        display: 'minimal-ui',
        icon: 'src/images/nicole-bunge-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://0e535dcfe7544f5f9bcbe979d0a5f181@sentry.io/1400930',
        environment: process.env.NODE_ENV,
        enabled: (() => ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
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
