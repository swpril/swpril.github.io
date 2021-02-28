/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Swpril Ahuja`,
    description: `Personal Portfolio of Swpril`,
    author: `swpril`
  },

  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `swpril.github.io`,
        short_name: `swpril`,
        start_url: `https://swpril.github.io`,
        background_color: `#FFF`,
        theme_color: `#111827`,
        display: `standalone`,
        icons: [
          {
            src: `${__dirname}/src/images`,
            sizes: `512x512`,
            type: 'image/svg'
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`src/components/*`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-smoothscroll`
  ]
};
