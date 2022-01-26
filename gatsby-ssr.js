/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import Layout from './src/components/Layout';

/**
 * @link https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#wrapPageElement
 */

function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export { wrapPageElement };
