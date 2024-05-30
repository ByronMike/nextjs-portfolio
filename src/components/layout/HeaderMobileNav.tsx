import Link from 'next/link';
import clsx from 'clsx';
import { HEADER } from '@/content/layout/Header';
import { FunctionComponent, MouseEventHandler, useCallback } from 'react';

type HeaderMobileNavProps = {
  // eslint-disable-next-line no-unused-vars
  setShowNav: (value: ((prevState: boolean) => boolean) | boolean) => void;
  showNav: boolean;
};

const MobileNavButton = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      type="button"
      aria-label="burger"
      onClick={onClick}
      className="relative z-50 p-1"
      // @ts-expect-error: type inference doesn't work
      style={{ '--nav-icon-size': '24px', '--nav-icon-border': '2px' }}
    >
      <span className="sr-only">Mobile Navigation</span>
      <i className={clsx('burger-menu', active && 'active')}>
        <div></div>
      </i>
    </button>
  );
};

const MobileNav: FunctionComponent<HeaderMobileNavProps> = ({
  showNav,
  setShowNav,
}) => {
  const toggleNav = useCallback(() => {
    setShowNav((current) => !current);
  }, [setShowNav]);

  return (
    <div className="md:hidden">
      <MobileNavButton onClick={toggleNav} active={showNav} />
      <div
        className={clsx(
          ' fixed left-0 top-0 h-screen w-full',
          showNav
            ? 'nav-active opacity-100'
            : 'pointer-events-none select-none opacity-0 delay-[800ms]'
        )}
      >
        <div className="absolute inset-0 -z-30 bg-[#0F172A]"></div>
        {/* <div className="absolute inset-0 -z-50 grid grid-cols-[1rem_repeat(16,minmax(0,1fr))_1rem]">
          {[...new Array(18)].map((_, index) => {
            return (
              <div
                className={clsx(
                  'pointer-events-none relative h-full -translate-y-full select-none bg-slate-900 transition-all duration-300 ease-linear',
                  index === 0 &&
                    'relative before:absolute b:right-0 b:top-0 b:h-full b:w-[1px] b:bg-[linear-gradient(180deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] b:bg-[length:1px_8px] b:opacity-20',
                  index === 17 &&
                    'relative before:absolute b:left-0 b:top-0 b:h-full b:w-[1px] b:bg-[linear-gradient(180deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] b:bg-[length:1px_8px] b:opacity-20'
                )}
                style={{
                  transitionDelay: showNav
                    ? `${index * 0.01}s`
                    : `${index * 0.025}s`,
                  // @ts-expect-error: type inference doesn't work
                  '--tw-translate-y': showNav ? '0%' : '-100%',
                }}
                key={index}
              />
            );
          })}
        </div> */}
        <section className="spacing-24 mt-28 p-8">
          <nav className="spacing-6 relative text-white">
            {HEADER.nav.map((navItem, index) => {
              return (
                <Link
                  key={navItem.href}
                  href={navItem.href}
                  className="flex justify-between py-2 text-gray-300 transition-opacity delay-200 hfa:text-sky-400 [.nav-active_&]:opacity-100"
                  onClick={() => setShowNav(false)}
                >
                  <span
                    className="-translate-x-[200%] text-[17px] font-medium [.nav-active_&]:translate-x-0"
                    style={{
                      transition: showNav
                        ? `transform 0.15s ${0.4 + 0.05 * index}s`
                        : `transform 0.15s ${0.05 * index}s`,
                    }}
                  >
                    {navItem.title}
                  </span>
                  <div className="mx-2 h-px flex-1 bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] opacity-0 transition-opacity [.nav-active_&]:opacity-40 [.nav-active_&]:delay-500"></div>
                  <small
                    className="translate-x-[200%] text-gray-400 [.nav-active_&]:translate-x-0"
                    style={{
                      transition: showNav
                        ? `transform 0.15s ${0.4 + 0.05 * index}s`
                        : `transform 0.15s ${0.05 * index}s`,
                    }}
                  >
                    {navItem.alt}
                  </small>
                </Link>
              );
            })}
          </nav>
          <div
            className="flex translate-y-8 items-center justify-center opacity-0 [.nav-active_&]:translate-y-0 [.nav-active_&]:opacity-100 [.nav-active_&]:delay-500"
            style={{
              transition: showNav
                ? `transform 0.15s 0.35s, opacity 0.2s 0.35s`
                : `transform 0.15s ${0.05}s, opacity 0.2s 0.05s`,
            }}
          >
            <button
              type="button"
              aria-label="contact"
              className="button-rainbow  whitespace-nowrap border-[4px] border-opacity-40 px-10 py-3 font-medium tracking-tight text-gray-900 "
            >
              Let's work
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MobileNav;
