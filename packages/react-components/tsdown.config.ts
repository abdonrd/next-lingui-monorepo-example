import { defineConfig } from 'tsdown';
import { lingui } from '@lingui/vite-plugin';

export default defineConfig([
  {
    entry: ['./src/index.ts', './src/locales/*.ts'],
    platform: 'neutral',
    dts: true,
    fromVite: true,
    plugins: [lingui()],
  },
]);
