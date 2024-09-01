/* eslint-disable import/prefer-default-export */

import site from '../__fixtures__/site.json';
import type { SiteQuery } from '../site';

function useSite(): SiteQuery {
  return site.data;
}

export { useSite };
