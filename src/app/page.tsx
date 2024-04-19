import { About } from '@/components/sections/about';
import { Introduction } from '@/components/sections/introduction';
import { TechStack } from '@/components/sections/tech-stack';
import { Timeline } from '@/components/sections/timeline';
import { Projects } from '@/components/sections/projects';
import { Partners } from '@/components/sections/partners';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <Introduction />
      <TechStack />
      <About />
      <Timeline />
      <Projects />
      <Partners />
      <Contact />
    </main>
  );
}
