import Link from 'next/link';
import { SiNextdotjs } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';

import { IconProps } from '@/types/content/tech-stack';

export const Welcome = {
  pre: 'Welcome to my site.',
  heading: (
    <>
      I'm <strong>Michaël Auger</strong>, a Front-end developer.
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
      My expertise lies in leveraging React and Next.js to create dynamic and
      efficient web solutions. From crafting interactive user interfaces to
      optimizing website performance, I excel in harnessing the power of these
      technologies..{' '}
      <em className="relative cursor-pointer before:absolute b:bottom-0 b:-z-10 b:h-3 b:w-full b:-rotate-2 b:animate-hint-hint b:bg-pink-400/70 b:blur-sm d:b:bg-pink-600">
        WOW!
      </em>
      .<span className="mt-4 block" />
      Continuously expanding my knowledge, I'm deeply engaged in exploring the
      latest features and best practices within React and Next.js, constantly
      striving to push the boundaries of what's achievable{' '}
      <Link
        target="_blank"
        href="https://astro.build/"
        className="underline hfa:text-sky-500"
      >
        Next.js
      </Link>{' '}
      and{' '}
      <Link
        href="https://react.dev/"
        target="_blank"
        className="underline hfa:text-sky-500"
      >
        React
      </Link>
      .
    </>
  ),
  cta1: {
    href: 'mailto:auger.michaell@gmail.com',
    name: "Let's Work",
  },
  cta2: {
    href: '/resume',
    name: 'Resume',
  },
  code: `const App = props => {
    return (
      <div>
        <h1> React App </h1>
        <div>Awesome code</div>
      </div>
    );
  };
  `,
};
