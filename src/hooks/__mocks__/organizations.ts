/* eslint-disable import/prefer-default-export */

import organizations from '../__fixtures__/organizations.json';
import type { OrganizationsQuery } from '../organizations';

function useOrganizations(): OrganizationsQuery {
  return organizations.data;
}

export { useOrganizations };
