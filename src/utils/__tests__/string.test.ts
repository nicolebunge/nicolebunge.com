import { describe, expect, it } from 'vitest';
import { formatList, isExternalUrl } from '../string';

describe('formatList', () => {
  it('should return the item itself for a single item', () => {
    expect.assertions(1);

    expect(formatList(['Alice'])).toStrictEqual('Alice');
  });

  it('should join two items with " & "', () => {
    expect.assertions(1);

    expect(formatList(['Alice', 'Bob'])).toStrictEqual('Alice & Bob');
  });

  it('should join three or more items with commas and " & " before the last', () => {
    expect.assertions(1);

    expect(formatList(['Alice', 'Bob', 'Carol'])).toStrictEqual('Alice, Bob & Carol');
  });
});

describe('isExternalUrl', () => {
  it('should check if URL is external', () => {
    expect.assertions(3);

    expect(isExternalUrl('/about')).toStrictEqual(false);
    expect(isExternalUrl('http://example.com')).toStrictEqual(true);
    expect(isExternalUrl('https://example.com')).toStrictEqual(true);
  });
});
