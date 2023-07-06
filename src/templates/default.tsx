import type { HeadProps, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import React from 'react';
import { Grid, SEO, Section } from '../components';

interface DataType {
  markdownRemark: {
    frontmatter: {
      title: string;
    };
    html: string;
  };
}

export type DefaultTemplateProps = PageProps<DataType>;

function DefaultTemplate(props: DefaultTemplateProps): JSX.Element {
  const {
    data: {
      markdownRemark: { html },
    },
  } = props;

  return (
    <Section>
      <Grid>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Grid>
    </Section>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export function Head(props: HeadProps<DataType>): JSX.Element {
  const {
    data: {
      markdownRemark: { frontmatter },
    },
  } = props;

  return <SEO title={frontmatter.title} />;
}

export default DefaultTemplate;
