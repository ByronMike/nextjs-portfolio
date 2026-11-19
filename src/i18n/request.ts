import { getRequestConfig } from 'next-intl/server';
import { routing, type Locale } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // `requestLocale` corresponds to the [locale] segment. Validate it and fall
  // back to the default — no cookies/headers are read here so pages stay
  // statically rendered (SSG), which we need for Lighthouse.
  const requested = await requestLocale;
  const locale: Locale = routing.locales.includes(requested as Locale)
    ? (requested as Locale)
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.ts`)).default,
  };
});
