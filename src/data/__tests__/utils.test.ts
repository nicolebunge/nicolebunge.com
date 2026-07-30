import { describe, expect, it } from 'vitest';
import { getProductions } from '../utils';

describe('getProductions', () => {
  it('returns an array of resolved productions', () => {
    const result = getProductions();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it('resolves organization slugs into full organization objects', () => {
    const result = getProductions();

    for (const production of result) {
      expect(production.organization).toMatchObject({
        id: expect.any(String),
        name: expect.any(String),
        slug: expect.any(String),
        url: expect.any(String),
      });
    }
  });

  it('resolves director slugs into full director objects', () => {
    const result = getProductions();

    for (const production of result) {
      expect(Array.isArray(production.directors)).toBe(true);
      expect(production.directors.length).toBeGreaterThan(0);

      for (const director of production.directors) {
        expect(director).toMatchObject({
          id: expect.any(String),
          name: expect.any(String),
          slug: expect.any(String),
        });
      }
    }
  });

  it('preserves production fields such as id, slug, name, role', () => {
    const result = getProductions();
    const first = result[0];

    expect(first).toMatchObject({
      id: expect.any(String),
      slug: expect.any(String),
      name: expect.any(String),
      role: expect.any(String),
    });
  });

  it('includes a berliner-kriminal-theater production resolved correctly', () => {
    const result = getProductions();
    const bkt = result.find((p) => p.organization.slug === 'berliner-kriminal-theater');

    expect(bkt).toBeDefined();
    expect(bkt!.organization.name).toBe('Berliner Kriminal Theater');
    expect(bkt!.organization.url).toBe('https://www.kriminaltheater.de');
  });
});
