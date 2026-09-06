import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'build/**', 'coverage/**', 'next-env.d.ts', 'out/**']),
  {
    settings: {
      react: {
        version: '19',
      },
    },
  },
]);

export default eslintConfig;
