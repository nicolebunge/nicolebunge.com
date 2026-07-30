import { describe, expect, it } from 'vitest';
import { getProductions } from '../utils';

describe('getProductions', () => {
  it('returns a non-empty list', () => {
    expect(getProductions().length).toBeGreaterThan(0);
  });

  it('resolves an organization slug into a full organization object', () => {
    const production = getProductions().find((p) => p.slug === 'ausser-kontrolle')!;

    expect(production.organization).toEqual({
      id: 'e7b7ac63-8b3f-401a-a389-0d501e9fcf75',
      name: 'Berliner Kriminal Theater',
      slug: 'berliner-kriminal-theater',
      url: 'https://www.kriminaltheater.de',
    });
  });

  it('resolves director slugs into full director objects', () => {
    const production = getProductions().find((p) => p.slug === 'ausser-kontrolle')!;

    expect(production.directors).toEqual([
      {
        id: '624a318c-57d6-4839-9da7-eb90f9956bce',
        name: 'Wolfgang Rumpf',
        slug: 'wolfgang-rumpf',
        url: 'http://www.wolfgangrumpf.de',
      },
    ]);
  });

  it('preserves the raw production fields alongside resolved relations', () => {
    const production = getProductions().find((p) => p.slug === 'ausser-kontrolle')!;

    expect(production).toMatchObject({
      id: 'e18ec8cb-abe1-4d08-85f2-cc84addf481b',
      slug: 'ausser-kontrolle',
      name: 'Außer Kontrolle',
      role: 'Ein Körper',
    });
  });

  it('resolves a production with multiple directors', () => {
    const production = getProductions().find((p) => p.slug === 'tod-auf-dem-nil')!;

    expect(production.directors.map((d) => d.slug)).toEqual(['matti-wien', 'wolfgang-rumpf']);
  });
});
