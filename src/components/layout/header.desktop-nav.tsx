'use client';

import { FunctionComponent } from 'react';
import Link from 'next/link';
import { HEADER } from '@/content/layout/header';

export const DesktopNav: FunctionComponent = () => {
  return (
    <>
      <nav className="sm:scrollbar-none header-nav group relative isolate mt-auto hidden h-full justify-center overflow-auto px-2 md:flex">
        {HEADER.nav
          .filter(({ desktop }) => desktop)
          .map((link, i) => {
            return (
              <div
                className="my-auto flex h-full items-center px-2"
                key={link.href + link.title + i}
              >
                <Link
                  href={link.href}
                  className={`relative flex cursor-pointer bg-clip-padding px-4 py-1.5 text-gray-500 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-blue-400 after:transition-all after:duration-500 hover:text-gray-900 hover:after:w-full d:text-gray-300/90 d:hfa:text-gray-300`}
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
