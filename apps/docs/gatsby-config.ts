import { GatsbyConfig } from 'gatsby';

export default {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`,
  },
  jsxRuntime: `automatic`,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        formats: ['woff2', 'woff'],
        useMinify: true,
        usePreload: true,
        usePreconnect: true,
        fonts: {
          google: [
            {
              family: `RocknRoll One`,
              variants: [`400`, `700`],
              fontDisplay: 'swap',
              strategy: 'selfHosted', // 'base64' || 'cdn'
            },
            {
              family: `Fira Code`,
              variants: [`400`],
              fontDisplay: 'swap',
              strategy: 'selfHosted', // 'base64' || 'cdn'
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-graph`,
            options: {
              language: 'mermaid', // default
              theme: 'dark', // could also be dark, forest, or neutral
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              showLineNumbers: true,
              numberLines: true,
            },
          },
        ],
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
} as GatsbyConfig;
