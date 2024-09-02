/* eslint-disable import/prefer-default-export */

import directors from '../__fixtures__/directors.json';
import { DirectorsQuery } from '../directors';

function useDirectors(): DirectorsQuery {
  return directors.data;
}

export { useDirectors };
