require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Cassia Lacê Psicologa`,
    description: `A profissional Cassia Lacê realiza atendimentos de psicoterapia, nas modalidades presencial e online.`,
    author: `@gcassiapsicologa`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // ssr: false
        // displayName: false,
        // minify: false
        // see docs
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        schemas: {
          my_deleted_schema: {}
        }
      }
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
      },
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
