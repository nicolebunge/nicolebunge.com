import * as React from 'react';
import { SVGProps } from 'react';

const SvgXing = (props: SVGProps<SVGSVGElement>) => (
  <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.089 14.996l2.4-4.233-1.614-2.767h2.881l1.601 2.759-2.401 4.241zM16.939 19h-2.848l-3.105-5.639L15.694 5h2.877l-4.707 8.361z" />
  </svg>
);

export default SvgXing;
