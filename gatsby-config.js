module.exports = {
  siteMetadata: {
    title: 'Nicole Bunge',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
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
        name: 'nicolebunge',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/nicole-bunge-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
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
      resolve: 'gatsby-plugin-sharp',
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
    {
      resolve: 'gatsby-transformer-sharp',
    },
  ],
};
