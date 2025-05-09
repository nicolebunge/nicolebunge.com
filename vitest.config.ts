import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    css: {
      include: /.+/,
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    environment: 'happy-dom',
    coverage: {
      include: ['src/**'],
    },
  },
});
