import type { GatsbyNode } from 'gatsby';
import path from 'path';
import { PageNode } from '../../../types/page';

export const createPages: GatsbyNode['createPages'] = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  return graphql<{ allMdx: { edges: { node: PageNode }[] } }>(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/pages/" } }) {
        edges {
          node {
            id
            frontmatter {
              slug
              locale
            }
          }
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors || !data) {
      (errors ?? []).forEach(e => console.error(e.toString()));
      reporter.panicOnBuild('🚨ERROR: Query returned errors');
      throw new Error('Query returned errors');
    }

    const pages = data.allMdx.edges.map(({ node }) => node);
    const pageTemplate = path.resolve('src/templates/pages/Page.tsx');
    pages.forEach(page => {
      createPage({
        path: page.frontmatter.slug,
        component: pageTemplate,
        context: {
          id: page.id,
          locale: page.frontmatter.locale,
        },
      });
    });
  });
};
