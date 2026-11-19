'use client';

import { FunctionComponent, useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { TbWorld } from 'react-icons/tb';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const LocaleSwitcher: FunctionComponent = () => {
  const t = useTranslations('localeSwitcher');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const nextLocale =
    routing.locales.find((loc) => loc !== locale) ?? routing.defaultLocale;

  const toggle = () => {
    startTransition(() => {
      // Preserve the current path (and hash) while swapping the locale prefix.
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={isPending}
      aria-label={t('label')}
      title={t('label')}
      className="flex items-center gap-1 rounded p-2 text-sm font-medium uppercase text-gray-500 transition-colors d:text-gray-300 d:h:text-gray-50 md:h:text-gray-900"
    >
      <TbWorld className="h-5 w-5" />
      {locale}
    </button>
  );
};

export default LocaleSwitcher;
