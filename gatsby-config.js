module.exports = {
  siteMetadata: {
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
        name: 'nicolebunge',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
  ],
};
