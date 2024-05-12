import LogoAristid from '@/public/svg/partners/aristid.svg';
import LogoLP from '@/public/svg/partners/la-provence.svg';
import LogoProcivis from '@/public/svg/partners/procivis.svg';
import LogoReezocar from '@/public/svg/partners/reezocar.svg';
import LogoTCM from '@/public/svg/partners/the-coding-machine.svg';

export const PARTNERS = [
  {
    name: 'Aristid',
    url: 'https://www.aristid.com/',
    logo: (
      <LogoAristid className="w-32" aria-label="Logo de l'entreprise Aristid" />
    ),
  },
  {
    name: 'La Provence',
    url: 'https://www.laprovence.com/',
    logo: (
      <LogoLP className="w-32" aria-label="Logo de l'entreprise La Provence" />
    ),
  },
  {
    name: 'The Coding Machine',
    url: 'https://thecodingmachine.com/',
    logo: (
      <LogoTCM
        className="w-32"
        aria-label="Logo de l'entreprise The Coding Machine"
      />
    ),
  },
  {
    name: 'Procivis',
    url: 'https://procivis.fr/',
    logo: (
      <LogoProcivis
        className="mr-10 w-32"
        aria-label="Logo de l'entreprise Procivis"
      />
    ),
  },
  {
    name: 'Reezocar',
    url: 'https://www.reezocar.com/',
    logo: (
      <LogoReezocar
        className="ml-4 w-32"
        aria-label="Logo de l'entreprise Reezocar"
      />
    ),
  },
];
