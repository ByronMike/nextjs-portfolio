import { SiNextdotjs } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';

import { IconProps } from '@/types/content/tech-stack';

export const Welcome = {
  pre: 'Bienvenue sur mon portfolio',
  heading: (
    <>
      Je suis <strong>&nbsp;Michaël Auger</strong> Front-end developer.
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
      Mon expertise se focalise sur{' '}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://nextjs.org/"
        className="relative cursor-pointer underline before:absolute b:bottom-0 b:-z-10 b:h-3 b:w-full b:-rotate-2 b:animate-hint-hint b:bg-pink-400/70 b:blur-sm d:b:bg-pink-600"
      >
        Next.js
      </a>{' '}
      et{' '}
      <a
        href="https://react.dev/"
        target="_blank"
        rel="noreferrer"
        className="relative cursor-pointer underline before:absolute b:bottom-0 b:-z-10 b:h-3 b:w-full b:-rotate-2 b:animate-hint-hint b:bg-pink-400/70 b:blur-sm d:b:bg-pink-600"
      >
        React.js
      </a>{' '}
      pour créer des solutions web dynamiques et efficaces. De la conception
      d'interfaces utilisateur interactives à l'optimisation des performances
      des sites web.
      <span className="mt-4 block" />
      Ma motivation principale réside dans l'amélioration de la qualité de mon
      code au profit de ses impacts sur le business. Enfin, je poursuis une
      démarche d'amélioration continue de mes connaissances afin d'utiliser des
      technologies modernes, pour mettre en oeuvre les meilleures pratiques
      ainsi que par pur plaisir d'apprendre.
    </>
  ),
  cta1: {
    href: 'mailto:auger.michaell@gmail.com',
    name: 'Contactez-moi',
  },
  cta2: {
    href: '/resume',
    name: 'CV',
  },
  code1: `import {`,
  code2: ` FunctionComponent `,
  code3: `} from 'react'; \n\ntype `,
  code4: `WelcomeProps`,
  code5: ` = {
  objectives:
    | 'experiment new tech'
    | 'show my skills'
    | 'find freelancing opportunities'
    | 'find a fulltime job';
  }; \n\n`,
  code6: `export const Welcome: `,
  code7: `FunctionComponent`,
  code8: `<WelcomeProps> = ({ objectives }) => {
  return (
    <>
      <h1>Bienvenue sur mon portfolio</h1>
      <p>Ce site me permet de <em>{objectives}</em></p>
    </>
  );
};`,
};
