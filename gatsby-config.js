require('dotenv').config({
  path: '.ENV',
});

module.exports = {
  siteMetadata: {
    title: 'MAPC Zoning Atlas',
    description: 'MAPC Zoning Atlas',
    author: '@mapcmetroboston',
    url: 'https://zoningatlas.mapc.org',
  },

  plugins: [
    'gatsby-plugin-anchor-links',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `${process.env.GOOGLE_ANALYTICS_ID}`
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-pg',
      options: {
        connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.HOST}/gisdata`,
        schema: 'mapc',
        refetchInterval: 60, // Refetch data every 60 seconds
        appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.svg',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
