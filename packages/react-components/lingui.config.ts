import { defineConfig } from '@lingui/cli';
import baseLinguiConfig from '../../lingui.config';

export default defineConfig({
  ...baseLinguiConfig,
  compileNamespace: 'ts',
  catalogs: [
    {
      path: 'src/locales/{locale}',
      include: ['src/'],
    },
  ],
});
