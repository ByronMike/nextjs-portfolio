'use client';

import { FunctionComponent, useState } from 'react';
import Link from 'next/link';
import { DesktopNav } from '@/components/layout/header.desktop-nav';
import { MobileNav } from '@/components/layout/header-mobile-nav';
import { ProfileNav } from '@/components/layout/header.settings';
import { HEADER } from '@/content/layout/header';

export const Header: FunctionComponent = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-20 w-full border-b border-gray-800/10 bg-white/50 backdrop-blur d:border-gray-100/10 d:bg-gray-900/40 print:hidden">
        <div className="mx-auto flex h-full max-w-6xl grid-cols-[80px_1fr_210px] items-center gap-1 px-4 md:grid md:px-8">
          <Link
            href="/"
            className="z-10 w-min"
            data-tip={
              "Bonjour, je m'appelle Michaël. Bienvenue sur mon portfolio."
            }
            data-delay-show={2000}
          >
            <span className="sr-only">Logo Professionnel</span>
            {HEADER.logo.title}
          </Link>
          <DesktopNav />
          <ProfileNav />
          <MobileNav showNav={showNav} setShowNav={setShowNav} />
        </div>
        <div className="background pointer-events-none absolute inset-0 z-0 select-none "></div>
      </header>
      <div className="pointer-events-none h-20 select-none transition print:hidden" />
    </>
  );
};
