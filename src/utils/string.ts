function isExternalUrl(url: string): boolean {
  return url.startsWith('http');
}

export { isExternalUrl };
