import React, { ReactNode } from 'react';
import { useSite } from '../../hooks/site';

/**
 * @link https://www.gatsbyjs.com/docs/add-seo-component/
 */
type Lang = 'de';

interface SEOProps {
  children?: ReactNode;
  description?: string;
  lang?: Lang;
  title: string;
}

function SEO(props: SEOProps): JSX.Element {
  const { children, description, lang = 'de', title } = props;

  const { site } = useSite();
  const metaDescription = description || site.siteMetadata.description;

  return (
    <>
      <html lang={lang} />
      <title>
        {title} | {site.siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:title" content={title} />
      {children}
    </>
  );
}

export type { SEOProps };
export default SEO;
