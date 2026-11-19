'use client';

import { FunctionComponent } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { HEADER } from '@/content/layout/Header';

const DesktopNav: FunctionComponent = () => {
  const t = useTranslations('nav');

  return (
    <>
      <nav className="sm:scrollbar-none relative hidden justify-center md:flex">
        {HEADER.nav
          .filter(({ desktop }) => desktop)
          .map((link) => {
            return (
              <div className="flex px-2" key={link.key}>
                <Link
                  href={link.href}
                  className={`relative flex cursor-pointer px-4 py-1.5 text-gray-500 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-blue-400 after:transition-all after:duration-500 hover:text-gray-900 hover:after:w-full d:text-gray-300/90 d:hfa:text-gray-300`}
                >
                  <span className="text-sm font-medium">
                    {t(`items.${link.key}.title`)}
                  </span>
                </Link>
              </div>
            );
          })}
      </nav>
    </>
  );
};

export default DesktopNav;
