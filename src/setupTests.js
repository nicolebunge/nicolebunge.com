/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const { toHaveNoViolations } = require('jest-axe');

expect.extend(toHaveNoViolations);
