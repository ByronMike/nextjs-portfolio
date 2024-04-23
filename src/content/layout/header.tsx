import Logo from 'public/logo.svg';

export const HEADER = {
  logo: {
    href: '/',
    title: <Logo />,
    alt: 'Logo',
  },
  nav: [
    {
      href: '/#about',
      title: 'Présentation',
      alt: 'Ma présentation professionnelle et personnelle',
      desktop: true,
    },
    {
      href: '/#projects',
      title: 'Projets',
      alt: 'Mes meilleurs projets',
      desktop: true,
    },
    {
      href: '/#partners',
      title: 'Partenaires',
      alt: 'Mes partenaires de confiance',
      desktop: true,
    },
    {
      href: '/#contact',
      title: 'Contact',
      alt: 'Me contacter',
      desktop: true,
    },
  ],
  profileNav: [],
};
