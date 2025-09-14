import 'server-only';

import { setupI18n, type I18n } from '@lingui/core';
import { setI18n } from '@lingui/react/server';
import Negotiator from 'negotiator';
import { headers } from 'next/headers';
import { cache } from 'react';

import linguiConfig from '../lingui.config';

const locales = linguiConfig.locales;
const defaultLocale = 'en';

export const getLocale = cache(async () => {
  const headersList = await headers();
  const preferredLanguage = new Negotiator({
    headers: {
      'Accept-Language': headersList.get('Accept-Language') || undefined,
    },
  }).language([...locales]);

  return preferredLanguage || defaultLocale;
});

const i18nCache = new Map<string, I18n>();

export const getI18nInstance = cache(async () => {
  const locale = await getLocale();

  const cachedI18N = i18nCache.get(locale);
  if (cachedI18N) return cachedI18N;

  const { messages } = await import(`./locales/${locale}.po`);
  const { messages: reactComponentsMessages } = await import(
    `@company/react-components/locales/${locale}`
  );
  const i18n = setupI18n({
    locale,
    messages: { [locale]: { ...messages, ...reactComponentsMessages } },
  });

  i18nCache.set(locale, i18n);

  return i18n;
});

export async function initI18n() {
  const i18n = await getI18nInstance();
  setI18n(i18n);
  return i18n;
}
