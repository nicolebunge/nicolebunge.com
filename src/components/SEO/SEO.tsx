import React from 'react';
import { Helmet } from 'react-helmet';
import { useSite } from '../../hooks/site';

/**
 * @link https://www.gatsbyjs.com/docs/add-seo-component/
 */

type Lang = 'de';
type Meta = {
  name: string;
  content: string;
};

export interface SEOProps {
  description?: string;
  lang?: Lang;
  keywords?: string[];
  meta?: Meta[];
  title: string;
}

function SEO(props: SEOProps): JSX.Element {
  const { description, lang = 'de', meta = [], title, ...otherProps } = props;

  const { site } = useSite();
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
      {...otherProps}
    />
  );
}

export default SEO;
