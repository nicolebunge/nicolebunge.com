/* eslint-disable import/no-extraneous-dependencies */

/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    css: {
      include: /.+/,
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    environment: 'happy-dom',
  },
});
