import * as React from 'react';
import { SVGProps } from 'react';

const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M6 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm9 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm9 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
  </svg>
);

export default SvgMenu;
