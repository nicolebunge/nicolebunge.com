/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */

import '@fontsource/source-sans-pro/latin-400.css';
import '@fontsource/source-sans-pro/latin-600.css';
import React from 'react';
import Layout from './src/components/Layout';
import './build/css/variables.css';
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

function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export { wrapPageElement };
