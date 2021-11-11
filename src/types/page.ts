export interface PageNode {
  id: string;
  body: string;
  frontmatter: {
    locale: 'en' | 'de';
    title: string;
    description: string;
    slug: string;
    alternateSlug: string;
    footerLink: boolean;
  };
}
