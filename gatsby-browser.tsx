/* eslint-disable import/prefer-default-export */

/**
 * @link https://www.gatsbyjs.com/docs/how-to/styling/using-web-fonts/#self-host-google-fonts-with-fontsource
 */

import '@fontsource/source-sans-pro/latin-400.css';
import '@fontsource/source-sans-pro/latin-600.css';
import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import Layout from './src/components/Layout';
import './src/styles/all.css';
import './src/styles/anchor.css';
import './src/styles/body.css';
import './src/styles/button.css';
import './src/styles/figure.css';
import './src/styles/headline.css';
import './src/styles/html.css';
import './src/styles/image.css';
import './src/styles/list.css';
import './src/styles/paragraph.css';
import './src/styles/selection.css';
import './src/styles/svg.css';
import './src/styles/variables.css';

/**
 * @link https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
 */

function wrapPageElement({ element, props }: WrapPageElementBrowserArgs): JSX.Element {
  return <Layout {...props}>{element}</Layout>;
}

export { wrapPageElement };
