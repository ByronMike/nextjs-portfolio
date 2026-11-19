'use client';

import { FunctionComponent, ReactNode } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import Badge from '@/components/Badge';
import CodeEditor from '@/components/CodeEditor';
import Profile from '@/components/Profile';
import { useGitHubUserData } from '@/hooks/useGitHubUserData';
import { GITHUB_TOKEN, GITHUB_USER } from '@/helpers/constants';
import {
  leftVariants,
  displayVariants,
} from '@/helpers/framer-motion/animationVariants';
import { WELCOME } from '@/content/sections/Introduction';
import TechList from '@/components/TechList';

const linkClass =
  'relative cursor-pointer underline before:absolute b:bottom-0 b:-z-10 b:h-3 b:w-full b:-rotate-2 b:animate-hint-hint b:bg-pink-400/70 b:blur-sm d:b:bg-pink-600';

const Introduction: FunctionComponent = () => {
  const t = useTranslations('hero');
  const locale = useLocale();
  const cvHref = locale === 'en' ? '/documents/cv-en.pdf' : '/documents/cv.pdf';
  const { user } = useGitHubUserData(GITHUB_USER, GITHUB_TOKEN);
  const codeSnippets: string[] = [];
  for (let i = 1; i <= 8; i++) {
    // @ts-expect-error: dynamic access of code1..code8
    codeSnippets.push(WELCOME[`code${i}`]);
  }

  return (
    <Section
      id="introduction"
      isMotion
      className="relative mx-auto flex w-[85%] max-w-6xl grid-cols-3 flex-col gap-8 gap-y-16 px-4 pb-16 pt-6 md:w-[100%] md:px-8 md:pt-16 lg:grid"
    >
      <div className="col-span-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={leftVariants}
        >
          <div className="heading-pre">{t('pre')}</div>
          <h1 className="heading-hero">
            {t.rich('heading', {
              name: (chunks: ReactNode) => <strong>&nbsp;{chunks}</strong>,
            })}
          </h1>
          <TechList tech={WELCOME.tech} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={leftVariants}
        >
          <p className="mb-3 max-w-prose font-normal text-gray-500 d:text-gray-400 md:text-lg md:tracking-tight">
            {t.rich('body', {
              react: (chunks: ReactNode) => (
                <a
                  href={WELCOME.links.react}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  {chunks}
                </a>
              ),
              next: (chunks: ReactNode) => (
                <a
                  href={WELCOME.links.next}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  {chunks}
                </a>
              ),
              node: (chunks: ReactNode) => (
                <a
                  href={WELCOME.links.node}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClass}
                >
                  {chunks}
                </a>
              ),
              break: () => <span className="mt-4 block" />,
            })}
          </p>

          <p className="mb-3 max-w-xl font-normal text-gray-500 md:text-lg md:tracking-tight"></p>
        </motion.div>
        <motion.div
          className="mt-6 flex flex-wrap gap-4 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={leftVariants}
        >
          <Link
            href={WELCOME.cta.contact}
            className="button-rainbow inline-flex whitespace-nowrap bg-gray-800 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-50 hfa:border-gray-300/90 hfa:bg-gray-900 hfa:text-white d:hfa:border-gray-700/30 md:px-12"
          >
            {t('ctaContact')}
          </Link>

          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="button-border inline-flex whitespace-nowrap bg-white/90 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-500 transition-all hfa:border-gray-900/70 hfa:bg-white/90 hfa:text-gray-900 d:border-gray-700/80 d:bg-transparent d:text-gray-300 d:hfa:border-gray-200/30 d:hfa:bg-gray-900/80 d:hfa:text-gray-50 md:px-12"
          >
            {t('ctaCv')}
          </a>
        </motion.div>
      </div>
      <div className="relative sm:overflow-visible md:h-[420px] md:w-[460px]">
        <motion.div
          className="relative flex h-full w-full flex-col gap-4 md:min-w-[460px] lg:absolute lg:left-6 lg:top-16 lg:w-full lg:min-w-[460px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          variants={displayVariants}
        >
          <div className="relative z-20 flex justify-start gap-1.5">
            <Badge style="info">{t('badges.role')}</Badge>
            <Badge style="warning">{t('badges.surfer')}</Badge>
            <div className="hidden md:contents">
              <Badge style="accent">{t('badges.ukulele')}</Badge>
              <Badge style="plain">{t('badges.tea')}</Badge>
            </div>
          </div>
          <div className="relative flex h-full flex-col">
            <CodeEditor code={codeSnippets} language="tsx" />
          </div>
        </motion.div>
        <motion.div
          className="absolute hidden w-[60%] sm:-right-5 sm:top-24 md:block lg:-left-[270px] lg:top-[105%] lg:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          variants={displayVariants}
        >
          {user && (
            <Profile
              profile_image_url="/logo.svg"
              name={user.name}
              username={user.login}
              description={user.bio}
              public_metrics={{
                following_count: user.following,
                followers_count: user.followers,
              }}
            />
          )}
        </motion.div>
      </div>
      <div className="background pointer-events-none absolute inset-0 -z-0 select-none">
        <div className="relative left-1/2 top-1/2  h-2/3 w-1/2 -translate-y-[30%] rounded-full bg-gradient-radial from-emerald-600/30 to-sky-600/5 blur-2xl"></div>
      </div>
    </Section>
  );
};

export default Introduction;
