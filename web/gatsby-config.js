module.exports = {
  siteMetadata: {
    title: `Alissa K. Doyle`,
    description: `Personal portfolio for actor and director Alissa K Doyle in Sacramento, CA.`,
    author: `@ryanmdoyle`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans:400, 700, 800']
        }
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '8n7w4ele',
        dataset: 'production',
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.MY_SANITY_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alissakdoyle`,
        short_name: `alissakdoyle`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/a-favi.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
