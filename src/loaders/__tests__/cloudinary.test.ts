import { describe, expect, it } from 'vitest';
import cloudinaryLoader from '../cloudinary';

describe('cloudinaryLoader', () => {
  it('uses q_auto when no quality is provided', () => {
    const result = cloudinaryLoader({ src: 'photo.jpg', width: 800 });

    expect(result).toBe(
      'https://res.cloudinary.com/nicolebunge/image/upload/c_limit,f_auto,q_auto,w_800/v1627923793/photo.jpg',
    );
  });

  it('reflects an explicit quality value in the URL', () => {
    const result = cloudinaryLoader({ src: 'photo.jpg', width: 800, quality: 80 });

    expect(result).toBe(
      'https://res.cloudinary.com/nicolebunge/image/upload/c_limit,f_auto,q_80,w_800/v1627923793/photo.jpg',
    );
  });

  it('reflects the width parameter in the URL', () => {
    const result = cloudinaryLoader({ src: 'photo.jpg', width: 1200 });

    expect(result).toBe(
      'https://res.cloudinary.com/nicolebunge/image/upload/c_limit,f_auto,q_auto,w_1200/v1627923793/photo.jpg',
    );
  });
});
