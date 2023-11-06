/* eslint-disable import/prefer-default-export */

import type { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import Layout from './src/components/Layout';

/**
 * @link https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#wrapPageElement
 */

function wrapPageElement({ element, props }: WrapPageElementBrowserArgs): JSX.Element {
  return <Layout {...props}>{element}</Layout>;
}

export { wrapPageElement };
