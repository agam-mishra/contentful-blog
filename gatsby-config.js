var dotenv = require("dotenv").config()

// if (process.env.NODE_ENV !='production') {
//   dotenv.config()
// }
module.exports = {
  siteMetadata: {
    title: `Fitslash Blog`,
    author: {
      name: `Agam Mishra`,
      summary: `who is developing it with utmost sincerity.`,
    },
    description: `A starter blog demonstrating what Fitslash is.`,
    siteUrl: `https://www.fitslash.com/`,
    social: {
      instagram: `agam_mishra`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    //`gatsby-plugin-feed`,
    {
      resolve: "gatsby-plugin-feed",
      options: {
        setup(ref) {
          const metaInfo = ref.query.site.siteMetadata

          metaInfo.generator = "GatsbyJS test"
          return metaInfo
        },
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
  `,
        feeds: [
          {
            serialize(value) {
              const rssMetadata = value.query.site.siteMetadata
              return value.query.allContentfulPost.edges.map(node => ({
                description: node.title,

                url: rssMetadata.siteUrl + node.slug,
                guid: rssMetadata.siteUrl + node.slug,

              }))
            },
            query: `
            {
              allContentfulPost {
                edges {
                  node {
                    slug
                    title
                  }
                }
              }
            }
      `,
            output: "index.js",
            title: "Agam",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `jryk3myqup57`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        //accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        accessToken: 'Yqo2SHb5FO6tmmFgagJN7Qb6LoUm0pEWrwSrCztU0kA',
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
