function isExternalUrl(url: string): boolean {
  return url.startsWith('http');
}

function formatList(list: string[]): string {
  return list.reduce(
    (text, value, i, array) => text + (i < array.length - 1 ? ', ' : ' & ') + value,
  );
}

export { formatList, isExternalUrl };
