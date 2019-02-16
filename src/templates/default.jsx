import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SEO from '../components/SEO';

const Template = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

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
};

Template.propTypes = {
  data: PropTypes.shape(),
};

Template.defaultProps = {
  data: null,
};

export default Template;
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
