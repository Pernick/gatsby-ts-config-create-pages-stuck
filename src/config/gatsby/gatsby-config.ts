import type { GatsbyConfig } from "gatsby";

export const siteMetadata: GatsbyConfig["siteMetadata"] = {
  title: `Test site`,
  description: `Test repo`,
  siteUrl: "https://test.com",
};

const fileSystemPlugins: GatsbyConfig["plugins"] = [
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: `${__dirname}/../../../static/img`,
      name: "uploads",
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: `${__dirname}/../../../content/pages`,
      name: "pages",
    },
  },
];

export const plugins: GatsbyConfig["plugins"] = [
  `gatsby-plugin-react-helmet`,
  ...fileSystemPlugins,
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-relative-images`,
          options: {
            staticFolderName: "static",
          },
        },
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1920,
          },
        },
      ],
    },
  },
  `gatsby-transformer-json`,
  `gatsby-plugin-image`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      defaults: {
        formats: [`auto`, `webp`],
        placeholder: `dominantColor`,
        quality: 50,
        breakpoints: [832, 1024, 1280, 1920],
        backgroundColor: `transparent`,
        tracedSVGOptions: {},
        blurredOptions: {},
        jpgOptions: {},
        pngOptions: {},
        webpOptions: {},
        avifOptions: {},
      },
    },
  },
  `gatsby-alias-imports`,
];
