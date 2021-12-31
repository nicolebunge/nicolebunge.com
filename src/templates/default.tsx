import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

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
