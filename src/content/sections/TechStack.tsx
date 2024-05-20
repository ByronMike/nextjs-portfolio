import { AiOutlineConsoleSql } from 'react-icons/ai';
import { FaFileExcel } from 'react-icons/fa';
import { FaGlideG } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { MdCodeOff } from 'react-icons/md';
import { SiApache } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiEslint } from 'react-icons/si';
import { SiExpo } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiFigma } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiFramer } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiJest } from 'react-icons/si';
import { SiLinux } from 'react-icons/si';
import { SiMarkdown } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiNestjs } from 'react-icons/si';
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
import { TbBrandReactNative } from 'react-icons/tb';

import Axios from '@/public/icons/tech-logos/axios.svg';
import Express from '@/public/icons/tech-logos/express.svg';
import NextJs from '@/public/icons/tech-logos/nextjs.svg';
import Prisma from '@/public/icons/tech-logos/prisma.svg';
import ReactQuery from '@/public/icons/tech-logos/react_query.svg';

import { Technology } from '@/types/content/techStack';

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
    name: 'Tailwind',
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
  framer_motion: {
    name: 'Framer-motion',
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
  expressJS: {
    name: 'Express',
    Icon: ({ className }) => <Express className={className} />,
  },
  prettier: {
    name: 'Prettier',
    Icon: ({ className }) => <SiPrettier className={className} />,
  },
  react_query: {
    name: 'React Query',
    Icon: ({ className }) => <ReactQuery className={className} />,
  },
  redis: {
    name: 'Redis',
    Icon: ({ className }) => <SiRedis className={className} />,
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
  linux: {
    name: 'Linux',
    Icon: ({ className }) => <SiLinux className={className} />,
  },
  apache: {
    name: 'Apache',
    Icon: ({ className }) => <SiApache className={className} />,
  },
  no_code: {
    name: 'No code',
    Icon: ({ className }) => <MdCodeOff className={className} />,
  },
  glide: {
    name: 'Glide',
    Icon: ({ className }) => <FaGlideG className={className} />,
  },
  excel: {
    name: 'Excel',
    Icon: ({ className }) => <FaFileExcel className={className} />,
  },
  react_native: {
    name: 'React Native',
    Icon: ({ className }) => <TbBrandReactNative className={className} />,
  },
  express: {
    name: 'Express',
    Icon: ({ className }) => <SiExpress className={className} />,
  },
  mongodb: {
    name: 'MongoDB',
    Icon: ({ className }) => <SiMongodb className={className} />,
  },
  expo: {
    name: 'Expo',
    Icon: ({ className }) => <SiExpo className={className} />,
  },
  nestjs: {
    name: 'Nest.js',
    Icon: ({ className }) => <SiNestjs className={className} />,
  },
} as const;
