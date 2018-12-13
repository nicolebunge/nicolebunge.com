import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';

const Template = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
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
