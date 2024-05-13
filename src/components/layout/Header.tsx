'use client';

import { FunctionComponent, useState } from 'react';
import Link from 'next/link';
import DesktopNav from '@/components/layout/HeaderDesktopNav';
import MobileNav from '@/components/layout/HeaderMobileNav';
import ProfileNav from '@/components/layout/HeaderSettings';
import { HEADER } from '@/content/layout/Header';

const Header: FunctionComponent = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 h-20 w-full border-b border-gray-800/10 bg-white/50 backdrop-blur d:border-gray-100/10 d:bg-gray-900/40">
        <div className="mx-auto flex h-full max-w-6xl grid-cols-[80px_1fr_210px] items-center gap-1 px-4 md:grid md:px-8">
          <Link href="/" className="z-10 w-min">
            {HEADER.logo.title}
          </Link>
          <DesktopNav />
          <ProfileNav />
          <MobileNav showNav={showNav} setShowNav={setShowNav} />
        </div>
      </header>
      {/* Manage the separation between the header and main */}
      <div className="h-20" />
    </>
  );
};

export default Header;
