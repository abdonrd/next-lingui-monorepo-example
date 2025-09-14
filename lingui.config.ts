import { defineConfig } from '@lingui/cli';

export default defineConfig({
  locales: ['en', 'es', 'pseudo'],
  pseudoLocale: 'pseudo',
  sourceLocale: 'en',
  fallbackLocales: {
    default: 'en',
  },
});
