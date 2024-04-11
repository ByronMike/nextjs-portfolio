'use client';

import { FunctionComponent } from 'react';
import LogoNext from '@/public/svg/tools/nextjs.svg';
import LogoFigma from '@/public/svg/tools/figma.svg';
import LogoStorybook from '@/public/svg/tools/storybook.svg';
import LogoCypress from '@/public/svg/tools/cypress.svg';
import LogoTailwind from '@/public/svg/tools/tailwind.svg';
import MongoDb from '@/public/svg/tools/mongodb.svg';
import NodeJs from '@/public/svg/tools/nodejs.svg';
import TypeScript from '@/public/svg/tools/typescript.svg';
import ReactNative from '@/public/svg/tools/react-native.svg';

export const TechStack: FunctionComponent = () => {
  return (
    <section>
      <h2 className="headline mt-24 text-center text-xl md:text-2xl lg:text-3xl">
        Some of my favourite tools
      </h2>

      <div className="mx-auto mt-8 flex max-w-6xl flex-wrap items-center justify-center gap-x-16 gap-y-8 px-4">
        <LogoNext className="w-32" aria-label="Next.js" />
        <LogoTailwind className="w-32 md:w-40" aria-label="Tailwind" />
        <LogoStorybook className="w-32 md:w-40" aria-label="Storybook" />
        <LogoFigma className="w-8" aria-label="Figma" />
        <LogoCypress className="w-32 md:w-32" aria-label="Cypress" />
        <TypeScript className="w-14" aria-label="TypeScript" />
        <NodeJs className="w-32 md:w-24" aria-label="NodeJs" />
        <MongoDb className="w-32 md:w-40" aria-label="MongoDb" />
        <ReactNative className="w-20 md:w-14" aria-label="ReactNative" />
      </div>
    </section>
  );
};
