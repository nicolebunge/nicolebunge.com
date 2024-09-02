/* eslint-disable import/prefer-default-export */

import productions from '../__fixtures__/productions.json';
import type { ProductionsQuery } from '../productions';

function useProductions(): ProductionsQuery {
  return productions.data;
}

export { useProductions };
