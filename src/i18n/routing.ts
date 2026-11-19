import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // French is the default/primary locale; English is added for an
  // international audience. Both get stable, crawlable URLs (/fr, /en).
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];
