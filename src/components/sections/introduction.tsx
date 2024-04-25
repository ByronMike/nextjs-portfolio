'use client';

import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/badge';
import { CodeEditor } from '@/components/code-editor';
import { Profile } from '@/components/profile';
import { Welcome } from '@/content/sections/introduction';
import { useGitHubUserData } from '@/hooks/useGitHubUserData';
import {
  NEXT_PUBLIC_GITHUB_TOKEN,
  NEXT_PUBLIC_GITHUB_USER,
} from '@/helpers/constants';

export const Introduction: FunctionComponent = () => {
  const { user } = useGitHubUserData(
    NEXT_PUBLIC_GITHUB_USER,
    NEXT_PUBLIC_GITHUB_TOKEN
  );
  return (
    <section
      id="introduction"
      className="relative mx-auto flex max-w-6xl grid-cols-3 flex-col gap-8 gap-y-16 px-4 py-16 md:px-8 md:py-32 lg:grid"
    >
      <div className="col-span-2">
        <div>
          <div className="heading-pre">{Welcome.pre}</div>
          <h1 className="heading-hero ">{Welcome.heading}</h1>
          <div className="group inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="group-hover:paused flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-8">
              {Welcome.tech.map(({ name, Icon }) => (
                <li
                  className="flex items-center gap-2 text-gray-500 d:text-gray-400"
                  key={name}
                >
                  <Icon className="h-7 w-7 text-gray-400 d:text-gray-300/80" />
                  {name}
                </li>
              ))}
            </ul>
            <ul
              className="group-hover:paused flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-8"
              aria-hidden="true"
            >
              {Welcome.tech.map(({ name, Icon }) => (
                <li
                  className="flex items-center gap-2 text-gray-500 d:text-gray-400"
                  key={name}
                >
                  <Icon className="h-7 w-7 text-gray-400 d:text-gray-300/80" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className="mb-3 max-w-prose font-normal text-gray-500 d:text-gray-400 md:text-lg md:tracking-tight">
            {Welcome.body}
          </p>

          <p className="mb-3 max-w-xl font-normal text-gray-500 md:text-lg md:tracking-tight"></p>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 md:gap-8">
          {Welcome.cta1 ? (
            <Link
              href={Welcome.cta1.href}
              className="button-rainbow inline-flex whitespace-nowrap bg-gray-800 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-50 hfa:border-gray-300/90 hfa:bg-gray-900 hfa:text-white d:hfa:border-gray-700/30 md:px-12"
            >
              {Welcome.cta1.name}
            </Link>
          ) : null}

          {Welcome.cta2 ? (
            <Link
              href={Welcome.cta2.href}
              className="button-border inline-flex whitespace-nowrap bg-white/90 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-500 transition-all hfa:border-gray-900/70 hfa:bg-white/90 hfa:text-gray-900 d:border-gray-700/80 d:bg-transparent d:text-gray-300 d:hfa:border-gray-200/30 d:hfa:bg-gray-900/80 d:hfa:text-gray-50 md:px-12"
            >
              {Welcome.cta2.name}
            </Link>
          ) : null}
        </div>
      </div>
      <div className="relative md:h-[420px]">
        <div className="relative flex h-full min-w-[460px] flex-col gap-4 sm:min-w-[660px] lg:absolute lg:left-6 lg:top-16 lg:min-w-[460px]">
          <div className="relative z-20 flex justify-end gap-1.5">
            <Badge style="info">TS Developer</Badge>
            <Badge style="success">Watersport Blogger</Badge>
            <Badge style="warning">Surfer</Badge>
            <Badge style="accent">Ukuleleist</Badge>
            <Badge style="plain">Ginger tea aficionado</Badge>
          </div>
          <div className="relative flex h-full flex-col">
            <CodeEditor code={Welcome.code} language="jsx" />
            <div className="absolute -bottom-5 -right-5 -z-10 h-[calc(100%+1.25rem)] w-[calc(100%+1.25rem)] rounded-lg border border-gray-400/20 bg-gray-100/70 [mask-image:linear-gradient(-30deg,#fff_16.35%,rgb(255_255_255_/_0%)_61.66%)] d:border-gray-700/20 d:bg-gray-900/40"></div>
          </div>
        </div>
        <div className="absolute hidden sm:-right-5 sm:top-24 sm:block lg:-left-64 lg:top-full">
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
        </div>
      </div>
      <div className="background pointer-events-none absolute inset-0 -z-0 select-none">
        <div className="relative left-1/2 top-1/2  h-2/3 w-1/2 -translate-y-[30%] rounded-full bg-gradient-radial from-emerald-600/30 to-sky-600/5 blur-2xl"></div>
      </div>
    </section>
  );
};
