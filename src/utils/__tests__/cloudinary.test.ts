import { buildQuery } from '../cloudinary';

describe('buildQuery', () => {
  it('should build a query string', () => {
    const query = buildQuery({
      width: 100,
      height: 200,
    });

    expect(query).toBe('c_fill,f_auto,h_200,q_auto,w_100');
  });

  it('should remove `undefined` values', () => {
    const query = buildQuery({
      width: undefined,
      height: 200,
    });

    expect(query).toBe('c_fill,f_auto,h_200,q_auto');
  });
});
