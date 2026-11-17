import { SiNextdotjs } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';

import { IconProps } from '@/types/content/techStack';

export const WELCOME = {
  pre: 'Disponible pour des missions en remote',
  heading: (
    <>
      Je suis <strong>&nbsp;Michaël Auger</strong> Product Engineer.
    </>
  ),
  tech: [
    {
      name: 'Next.js',
      Icon: ({ className }: IconProps) => <SiNextdotjs className={className} />,
    },
    {
      name: 'React',
      Icon: ({ className }: IconProps) => <SiReact className={className} />,
    },
    {
      name: 'Tailwind',
      Icon: ({ className }: IconProps) => (
        <SiTailwindcss className={className} />
      ),
    },
    {
      name: 'Node.js',
      Icon: ({ className }: IconProps) => <SiNodedotjs className={className} />,
    },
  ] as const,
  body: (
    <>
      Je conçois et je livre des solutions web de bout en bout — marketplaces,
      tunnels de paiement et outils internes — avec{' '}
      <a
        href="https://react.dev/"
        target="_blank"
        rel="noreferrer"
        className="relative cursor-pointer underline before:absolute b:bottom-0 b:-z-10 b:h-3 b:w-full b:-rotate-2 b:animate-hint-hint b:bg-pink-400/70 b:blur-sm d:b:bg-pink-600"
      >
        React.js
      </a>
      ,{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://nextjs.org/"
        className="relative cursor-pointer underline before:absolute b:bottom-0 b:-z-10 b:h-3 b:w-full b:-rotate-2 b:animate-hint-hint b:bg-pink-400/70 b:blur-sm d:b:bg-pink-600"
      >
        Next.js
      </a>
      ,{' '}
      <a
        href="https://nodejs.org/en/"
        target="_blank"
        rel="noreferrer"
        className="relative cursor-pointer underline before:absolute b:bottom-0 b:-z-10 b:h-3 b:w-full b:-rotate-2 b:animate-hint-hint b:bg-pink-400/70 b:blur-sm d:b:bg-pink-600"
      >
        {' '}
        Node.js
      </a>{' '}
      et PostgreSQL. En full remote, partout dans le monde.
      <span className="mt-4 block" />
      Un état d'esprit produit, forgé en construisant mes propres produits, et
      la rigueur de 8 ans de recherche et de finance avant de passer au code.
      Mon objectif : améliorer la qualité du code au service de son impact
      business.
    </>
  ),
  cta1: {
    href: 'mailto:auger.michaell@gmail.com',
    name: 'Me contacter',
  },
  cta2: {
    href: '/documents/cv.pdf',
    name: 'CV',
  },
  code1: `import {`,
  code2: ` FunctionComponent `,
  code3: `} from 'react'; \n\ntype `,
  code4: `EngineerProps`,
  code5: ` = {
  helps:
    | 'ship marketplaces & payments'
    | 'build internal tools'
    | 'automate with AI'
    | 'find a long-term remote mission';
  }; \n\n`,
  code6: `export const Engineer: `,
  code7: `FunctionComponent`,
  code8: `<EngineerProps> = ({ helps }) => {
  return (
    <>
      <h1>Fullstack Product Engineer</h1>
      <p>I help teams <em>{helps}</em></p>
    </>
  );
};`,
};
