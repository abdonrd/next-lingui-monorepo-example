import { defineConfig } from '@lingui/cli';
import baseLinguiConfig from '../../lingui.config';

export default defineConfig({
  ...baseLinguiConfig,
  catalogs: [
    {
      path: 'src/locales/{locale}',
      include: ['src/'],
    },
  ],
});
