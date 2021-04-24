module.exports = {
  siteMetadata: {
    title: `Declarative CSS-in-JS library`,
    titleTemplate: `%s | Booleon`,
    description: `DX focused declarative runtime CSS-in-JS library`,
    keywords: `css, css-in-js, declarative, dx`,
    siteName: `booleon`,
    siteUrl: `http://www.booleon.com.br`,
    author: `Vinícius Victorino`,
    locale: `en-US`,
    image: {
      path: 'icons/icon-512x512.png',
      type: 'image/png',
      size: '512',
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `docs`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#d55901`,
        theme_color: `#d55901`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/assets/svg/logo.svg`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `RocknRoll One`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/svg/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
      __key: `pages`,
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-minify-html',
      options: {
        debug: true,
        config: {
          caseSensitive: true,
          collapseBooleanAttributes: true,
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          continueOnParseError: true,
          decodeEntities: true,
          html5: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
          preventAttributesEscaping: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          removeTagWhitespace: true,
          trimCustomFragments: true,
          useShortDoctype: true,
        },
      },
    },
  ],
};
