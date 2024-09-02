/* eslint-disable import/prefer-default-export */

import publications from '../__fixtures__/publications.json';
import type { PublicationsQuery } from '../publications';

function usePublications(): PublicationsQuery {
  return publications.data;
}

export { usePublications };
