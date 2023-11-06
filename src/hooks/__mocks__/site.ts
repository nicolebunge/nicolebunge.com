/* eslint-disable import/prefer-default-export */

import type { SiteQuery } from '../site';

function useSite(): SiteQuery {
  return {
    site: {
      siteMetadata: {
        author: 'Site Author',
        description: 'Site Description',
        title: 'Site Title',
      },
    },
  };
}

export { useSite };
