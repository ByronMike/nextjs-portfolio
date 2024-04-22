'use client';

import { FunctionComponent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { HEADER } from '@/content/layout/header';

export const DesktopNav: FunctionComponent = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="sm:scrollbar-none header-nav group relative isolate mt-auto hidden h-full justify-center overflow-auto px-2 md:flex">
        {HEADER.nav
          .filter(({ desktop }) => desktop)
          .map((link, i) => {
            const isActive = pathname.split(/[#?]/)[0] === link.href;
            return (
              <div
                className="my-auto flex h-full items-center px-2"
                key={link.href + link.title + i}
              >
                <Link
                  href={link.href}
                  className={clsx(
                    'relative z-10 flex rounded-md border-2 border-transparent px-4 py-1.5 text-gray-500 outline-none transition-all hfa:text-gray-900 hfa:outline-none d:text-gray-300 d:hfa:text-gray-50',
                    isActive &&
                      'border-gray-700/5 bg-gray-100 bg-clip-padding d:border-gray-50/10 d:bg-gray-800 group-hfa:bg-gray-200/30'
                  )}
                >
                  <span className="text-sm font-medium ">{link.title}</span>
                </Link>
              </div>
            );
          })}
      </nav>
    </>
  );
};
