require('dotenv').config({
  path: `.ENV`
});

module.exports = {
  pathPrefix: '/zoning-atlas',
  siteMetadata: {
    title: `MAPC Zoning Atlas - Staging`,
    description: `Staging and experimental site for MAPC Zoning Atlas`,
    author: `@mapcmetroboston`,
  },
  
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-pg",
      options: {
        connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.HOST}/zoningatlas_testing`,
        schema: "public",
        refetchInterval: 60, // Refetch data every 60 seconds
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
