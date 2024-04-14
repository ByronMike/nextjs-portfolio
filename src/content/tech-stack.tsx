import { AiOutlineConsoleSql } from 'react-icons/ai';
import { IoLogoVercel } from 'react-icons/io5';
import { SiCss3 } from 'react-icons/si';
import { SiEslint } from 'react-icons/si';
import { SiFigma } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiFramer } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiJest } from 'react-icons/si';
import { SiMarkdown } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiNpm } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiPhp } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';
import { SiPrettier } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiRedis } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiWebpack } from 'react-icons/si';
import { SiWordpress } from 'react-icons/si';
import { SiYarn } from 'react-icons/si';

import Axios from '@/public/icons/tech-logos/axios.svg';
import Prisma from '@/public/icons/tech-logos/prisma.svg';
import ReactQuery from '@/public/icons/tech-logos/react_query.svg';
import NextJs from '@/public/icons/tech-logos/nextjs.svg';
import Express from '@/public/icons/tech-logos/express.svg';

type IconProps = {
  className: string;
};

export const TECH = {
  typescript: {
    name: 'TypeScript',
    Icon: ({ className }: IconProps) => <SiTypescript className={className} />,
  },
  vercel: {
    name: 'Vercel',
    Icon: ({ className }: IconProps) => <IoLogoVercel className={className} />,
  },
  nextjs: {
    name: 'Next.js',
    Icon: ({ className }: IconProps) => <NextJs className={className} />,
  },
  markdown: {
    name: 'Markdown',
    Icon: ({ className }: IconProps) => <SiMarkdown className={className} />,
  },
  graphql: {
    name: 'GraphQL',
    Icon: ({ className }: IconProps) => <SiGraphql className={className} />,
  },
  reactjs: {
    name: 'React.js',
    Icon: ({ className }: IconProps) => <SiReact className={className} />,
  },
  tailwind: {
    name: 'TailwindCSS',
    Icon: ({ className }: IconProps) => <SiTailwindcss className={className} />,
  },
  prisma: {
    name: 'Prisma',
    Icon: ({ className }: IconProps) => <Prisma className={className} />,
  },
  axios: {
    name: 'Axios',
    Icon: ({ className }: IconProps) => <Axios className={className} />,
  },
  css_3: {
    name: 'CSS',
    Icon: ({ className }: IconProps) => <SiCss3 className={className} />,
  },
  eslint: {
    name: 'Eslint',
    Icon: ({ className }: IconProps) => <SiEslint className={className} />,
    figma: {
      name: 'Figma',
      Icon: ({ className }: IconProps) => <SiFigma className={className} />,
    },
    firebase: {
      name: 'Firebase',
      Icon: ({ className }: IconProps) => <SiFirebase className={className} />,
    },
    framer: {
      name: 'Framer',
      Icon: ({ className }: IconProps) => <SiFramer className={className} />,
    },
    git: {
      name: 'Git',
      Icon: ({ className }: IconProps) => <SiGit className={className} />,
    },
    github: {
      name: 'Github',
      Icon: ({ className }: IconProps) => <SiGithub className={className} />,
    },
    html_5: {
      name: 'HTML',
      Icon: ({ className }: IconProps) => <SiHtml5 className={className} />,
    },
    javascript: {
      name: 'JavaScript',
      Icon: ({ className }: IconProps) => (
        <SiJavascript className={className} />
      ),
    },
    jest: {
      name: 'Jest',
      Icon: ({ className }: IconProps) => <SiJest className={className} />,
    },
    mysql: {
      name: 'MySQL',
      Icon: ({ className }: IconProps) => <SiMysql className={className} />,
    },
    nodejs: {
      name: 'Node.js',
      Icon: ({ className }: IconProps) => <SiNodedotjs className={className} />,
    },
    express: {
      name: 'Express',
      Icon: ({ className }: IconProps) => <Express className={className} />,
    },
    prettier: {
      name: 'Prettier',
      Icon: ({ className }: IconProps) => <SiPrettier className={className} />,
    },
    react: {
      name: 'React.js',
      Icon: ({ className }: IconProps) => <SiReact className={className} />,
    },
    react_query: {
      name: 'React Query',
      Icon: ({ className }: IconProps) => <ReactQuery className={className} />,
    },
    redis: {
      name: 'Redis',
      Icon: ({ className }: IconProps) => <SiRedis className={className} />,
    },
    tailwindcss: {
      name: 'Tailwindcss',
      Icon: ({ className }: IconProps) => (
        <SiTailwindcss className={className} />
      ),
    },
    webpack: {
      name: 'Webpack',
      Icon: ({ className }: IconProps) => <SiWebpack className={className} />,
    },
    yarn: {
      name: 'Yarn',
      Icon: ({ className }: IconProps) => <SiYarn className={className} />,
    },
    npm: {
      name: 'NPM',
      Icon: ({ className }: IconProps) => <SiNpm className={className} />,
    },
    sql: {
      name: 'SQL',
      Icon: ({ className }: IconProps) => (
        <AiOutlineConsoleSql className={className} />
      ),
    },
    php: {
      name: 'PHP',
      Icon: ({ className }: IconProps) => <SiPhp className={className} />,
    },
    postman: {
      name: 'Postman',
      Icon: ({ className }: IconProps) => <SiPostman className={className} />,
    },
    wordpress: {
      name: 'WordPress',
      Icon: ({ className }: IconProps) => <SiWordpress className={className} />,
    },
  },
} as const;
