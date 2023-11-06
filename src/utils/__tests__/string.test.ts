import { describe, expect, it } from 'vitest';
import { isExternalUrl } from '../string';

describe('isExternalUrl', () => {
  it('should check if URL is external', () => {
    expect.assertions(3);

    expect(isExternalUrl('/about')).toStrictEqual(false);
    expect(isExternalUrl('http://example.com')).toStrictEqual(true);
    expect(isExternalUrl('https://example.com')).toStrictEqual(true);
  });
});
