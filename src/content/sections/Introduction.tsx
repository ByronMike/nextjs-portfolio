import { SiNextdotjs } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';

import { IconProps } from '@/types/content/techStack';

// Locale-invariant hero data: tech marquee icons, outbound link targets, the
// contact CTA target and the code-editor snippet. All copy lives in messages
// under the `hero` namespace; the CV link is resolved per locale.
export const WELCOME = {
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
  links: {
    react: 'https://react.dev/',
    next: 'https://nextjs.org/',
    node: 'https://nodejs.org/en/',
  },
  cta: {
    contact: 'mailto:auger.michaell@gmail.com',
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
