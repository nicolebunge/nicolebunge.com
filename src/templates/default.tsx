import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';

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
      markdownRemark: { frontmatter, html },
    },
  } = props;

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Section>
        <Grid>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Grid>
      </Section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default DefaultTemplate;
