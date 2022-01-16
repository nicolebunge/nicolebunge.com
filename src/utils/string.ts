/* eslint-disable import/prefer-default-export */

function isExternalUrl(url: string): boolean {
  return url.startsWith('http');
}

export { isExternalUrl };
