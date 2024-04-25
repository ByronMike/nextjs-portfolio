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
import Express from '@/public/icons/tech-logos/express.svg';
import NextJs from '@/public/icons/tech-logos/nextjs.svg';
import Prisma from '@/public/icons/tech-logos/prisma.svg';
import ReactQuery from '@/public/icons/tech-logos/react_query.svg';

import { Technology } from '@/types/content/tech-stack';

export const TECH: Record<string, Technology> = {
  typescript: {
    name: 'TypeScript',
    Icon: ({ className }) => <SiTypescript className={className} />,
  },
  vercel: {
    name: 'Vercel',
    Icon: ({ className }) => <IoLogoVercel className={className} />,
  },
  nextjs: {
    name: 'Next.js',
    Icon: ({ className }) => <NextJs className={className} />,
  },
  markdown: {
    name: 'Markdown',
    Icon: ({ className }) => <SiMarkdown className={className} />,
  },
  graphql: {
    name: 'GraphQL',
    Icon: ({ className }) => <SiGraphql className={className} />,
  },
  reactjs: {
    name: 'React.js',
    Icon: ({ className }) => <SiReact className={className} />,
  },
  tailwind: {
    name: 'TailwindCSS',
    Icon: ({ className }) => <SiTailwindcss className={className} />,
  },
  prisma: {
    name: 'Prisma',
    Icon: ({ className }) => <Prisma className={className} />,
  },
  axios: {
    name: 'Axios',
    Icon: ({ className }) => <Axios className={className} />,
  },
  css_3: {
    name: 'CSS',
    Icon: ({ className }) => <SiCss3 className={className} />,
  },
  eslint: {
    name: 'Eslint',
    Icon: ({ className }) => <SiEslint className={className} />,
  },
  figma: {
    name: 'Figma',
    Icon: ({ className }) => <SiFigma className={className} />,
  },
  firebase: {
    name: 'Firebase',
    Icon: ({ className }) => <SiFirebase className={className} />,
  },
  framer: {
    name: 'Framer',
    Icon: ({ className }) => <SiFramer className={className} />,
  },
  git: {
    name: 'Git',
    Icon: ({ className }) => <SiGit className={className} />,
  },
  github: {
    name: 'Github',
    Icon: ({ className }) => <SiGithub className={className} />,
  },
  html_5: {
    name: 'HTML',
    Icon: ({ className }) => <SiHtml5 className={className} />,
  },
  javascript: {
    name: 'JavaScript',
    Icon: ({ className }) => <SiJavascript className={className} />,
  },
  jest: {
    name: 'Jest',
    Icon: ({ className }) => <SiJest className={className} />,
  },
  mysql: {
    name: 'MySQL',
    Icon: ({ className }) => <SiMysql className={className} />,
  },
  nodejs: {
    name: 'Node.js',
    Icon: ({ className }) => <SiNodedotjs className={className} />,
  },
  express: {
    name: 'Express',
    Icon: ({ className }) => <Express className={className} />,
  },
  prettier: {
    name: 'Prettier',
    Icon: ({ className }) => <SiPrettier className={className} />,
  },
  react: {
    name: 'React.js',
    Icon: ({ className }) => <SiReact className={className} />,
  },
  react_query: {
    name: 'React Query',
    Icon: ({ className }) => <ReactQuery className={className} />,
  },
  redis: {
    name: 'Redis',
    Icon: ({ className }) => <SiRedis className={className} />,
  },
  tailwindcss: {
    name: 'Tailwindcss',
    Icon: ({ className }) => <SiTailwindcss className={className} />,
  },
  webpack: {
    name: 'Webpack',
    Icon: ({ className }) => <SiWebpack className={className} />,
  },
  yarn: {
    name: 'Yarn',
    Icon: ({ className }) => <SiYarn className={className} />,
  },
  npm: {
    name: 'NPM',
    Icon: ({ className }) => <SiNpm className={className} />,
  },
  sql: {
    name: 'SQL',
    Icon: ({ className }) => <AiOutlineConsoleSql className={className} />,
  },
  php: {
    name: 'PHP',
    Icon: ({ className }) => <SiPhp className={className} />,
  },
  postman: {
    name: 'Postman',
    Icon: ({ className }) => <SiPostman className={className} />,
  },
  wordpress: {
    name: 'WordPress',
    Icon: ({ className }) => <SiWordpress className={className} />,
  },
} as const;
