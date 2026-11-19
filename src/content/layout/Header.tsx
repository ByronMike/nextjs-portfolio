import Logo from 'public/logo.svg';

// Locale-invariant nav structure; titles/alt labels live in messages under
// `nav.items.<key>`. The in-page hash is kept; the locale prefix is added by
// the next-intl <Link> wrapper.
export const HEADER = {
  logo: {
    href: '/',
    img: <Logo />,
    alt: 'Logo',
  },
  nav: [
    { key: 'about', href: '/#about', desktop: true },
    { key: 'projects', href: '/#projects', desktop: true },
    { key: 'partners', href: '/#partners', desktop: true },
    { key: 'contact', href: '/#contact', desktop: true },
  ],
  profileNav: [],
} as const;
