import { FunctionComponent } from 'react';
import Link from 'next/link';
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid';
import { Badge } from '@/components/molecules/badge';
import { CodeEditor } from '@/components/organisms/code-editor';
import { Profile } from '@/components/molecules/profile';
import { Welcome } from '@/content/introduction';

export const Introduction: FunctionComponent = () => {
  return (
    <section>
      <div className="relative mx-auto flex max-w-6xl grid-cols-3 flex-col gap-8 gap-y-16 px-4 py-16 md:px-8 md:py-32 lg:grid">
        <section className="col-span-2">
          <header>
            <div className="heading-pre">{Welcome.pre}</div>
            <h1 className="heading-Welcome ">{Welcome.heading}</h1>
            <ul className="sm:scrollbar-none -mx-4 mb-2 flex items-center gap-6 overflow-x-auto px-4 pb-2 text-[15px] font-medium">
              {Welcome.tech.map(({ name, Icon }) => (
                <li
                  className="d:text-gray-400 flex items-center gap-2 text-gray-500"
                  key={name}
                >
                  <Icon className="d:text-gray-300/80 h-7 w-7 text-gray-400" />
                  {name}
                </li>
              ))}
            </ul>
          </header>
          <main>
            <p className="d:text-gray-400 mb-3 max-w-prose font-normal text-gray-500 md:text-lg md:tracking-tight">
              {Welcome.body}
            </p>

            <p className="mb-3 max-w-xl font-normal text-gray-500 md:text-lg md:tracking-tight"></p>
          </main>
          <footer className="mt-6 flex flex-wrap gap-4 md:gap-8">
            {Welcome.cta1 ? (
              <Link
                href={Welcome.cta1.href}
                className="button-rainbow hfa:border-gray-300/90 hfa:bg-gray-900 hfa:text-white d:hfa:border-gray-700/30 inline-flex whitespace-nowrap bg-gray-800 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-50 md:px-12"
              >
                {Welcome.cta1.name}
              </Link>
            ) : null}

            {Welcome.cta2 ? (
              <Link
                href={Welcome.cta2.href}
                className="button-border hfa:border-gray-900/70 hfa:bg-white/90 hfa:text-gray-900 d:border-gray-700/80 d:bg-transparent d:text-gray-300 d:hfa:border-gray-200/30 d:hfa:bg-gray-900/80 d:hfa:text-gray-50 inline-flex whitespace-nowrap bg-white/90 px-10 py-2.5 text-sm font-medium tracking-tight text-gray-500 transition-all md:px-12"
              >
                {Welcome.cta2.name}
              </Link>
            ) : null}
          </footer>
        </section>
        <section className="relative md:h-[420px]">
          <div className="relative flex h-full min-w-[460px] flex-col gap-4 sm:min-w-[660px] lg:absolute lg:left-6 lg:left-8 lg:top-16 lg:top-24 lg:min-w-[460px]">
            <div className="relative z-20 flex justify-end gap-1.5">
              <Badge style="info">TS Developer</Badge>
              <Badge style="success">Watersport Blogger</Badge>
              <Badge style="warning">Surfer</Badge>
              <Badge style="accent">Ukuleleist</Badge>
              <Badge style="plain">Ginger tea aficionado</Badge>
            </div>
            <div className="relative flex h-full flex-col">
              <CodeEditor code={Welcome.code} language="jsx" />
              <div className="d:border-gray-700/20 d:bg-gray-900/40 absolute -bottom-5 -right-5 -z-10 h-[calc(100%+1.25rem)] w-[calc(100%+1.25rem)] rounded-lg border border-gray-400/20 bg-gray-100/70 [mask-image:linear-gradient(-30deg,#fff_16.35%,rgb(255_255_255_/_0%)_61.66%)]"></div>
            </div>
            <div className="z-10 mt-1 flex gap-2 lg:-mt-2 lg:ml-16">
              <Link
                target="_blank"
                href="https://www.buymeacoffee.com/felixtellmann"
                className="hfa:border-rose-500/30 hfa:bg-rose-500 hfa:text-white d:bg-gray-700 d:text-gray-50 d:hfa:bg-rose-500 group flex items-center justify-center rounded-full border-2 border-gray-400/50 bg-gray-100 bg-clip-padding px-3 py-1.5 text-sm font-medium text-gray-600 transition-all"
                data-tip="Buy me a coffee"
              >
                <HeartIcon className="animate-heartbeat group-hfa:text-white mr-1 h-4 w-4 text-red-600 transition-all" />
                Support
              </Link>
              <Link
                target="_blank"
                href="https://github.com/FelixTellmann/flext/stargazers"
                className="hfa:border-yellow-500/30 hfa:bg-yellow-500 hfa:text-white d:bg-gray-700 d:text-gray-50 d:hfa:bg-yellow-500 group flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-400/50 bg-gray-100 bg-clip-padding text-sm font-medium text-gray-600 transition-all"
                data-tip="Star on Github"
              >
                <span className="sr-only">Star on Github</span>
                <StarIcon className="group-hfa:text-white h-4 w-4 text-yellow-500" />
              </Link>
            </div>
          </div>
          <div className="absolute hidden sm:-right-5 sm:top-24 sm:block lg:-left-64 lg:top-full">
            <Profile
              profile_image_url=""
              name="Michael"
              username="Auger"
              description="Je m'appelle Michael"
              public_metrics={{ following_count: 3, followers_count: 10 }}
            />
          </div>
        </section>
        <div className="background pointer-events-none absolute inset-0 -z-30 z-0 select-none">
          <div className="relative left-1/2 top-1/2  h-2/3 w-1/2 -translate-y-[30%] rounded-full bg-gradient-radial from-emerald-600/30 to-sky-600/5 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};
