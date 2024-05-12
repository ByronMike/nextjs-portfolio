import { FunctionComponent } from 'react';
import Section from '@/components/layout/Section';
import LogoReact from '@/public/svg/tools/reactjs.svg';
import LogoNext from '@/public/svg/tools/nextjs.svg';
import LogoFigma from '@/public/svg/tools/figma.svg';
import LogoStorybook from '@/public/svg/tools/storybook.svg';
import LogoCypress from '@/public/svg/tools/cypress.svg';
import LogoTailwind from '@/public/svg/tools/tailwind.svg';
import LogoMongoDb from '@/public/svg/tools/mongodb.svg';
import LogoNodeJs from '@/public/svg/tools/nodejs.svg';
import LogoTypeScript from '@/public/svg/tools/typescript.svg';
import LogoReactNative from '@/public/svg/tools/react-native.svg';

export const TechStack: FunctionComponent = () => {
  return (
    <Section
      id="tech-stack"
      className="mx-auto max-w-6xl px-4 pb-16 md:px-8 lg:pt-24"
    >
      <h2 className="headline text-center text-xl font-bold md:text-2xl lg:mt-24 lg:text-3xl">
        Mes outils préférés pour le Développement Web
      </h2>
      <div className="mx-auto mt-8 flex  flex-wrap items-center justify-center gap-x-16 gap-y-8">
        <LogoNext className="w-32" aria-label="Next.js" />
        <LogoReact className="w-32" aria-label="React.js" />
        <LogoTailwind className="w-32 md:w-40" aria-label="Tailwind" />
        <LogoStorybook className="w-32 md:w-40" aria-label="Storybook" />
        <LogoCypress className="w-32 md:w-32" aria-label="Cypress" />
        <LogoTypeScript className="w-14" aria-label="TypeScript" />
        <LogoNodeJs className="w-32 md:w-24" aria-label="NodeJs" />
        <LogoReactNative className="w-20 md:w-14" aria-label="ReactNative" />
        <LogoFigma className="w-8" aria-label="Figma" />
        <LogoMongoDb className="w-32 md:w-40" aria-label="MongoDb" />
      </div>
    </Section>
  );
};
