import { About } from '@/components/sections/about';
import { Introduction } from '@/components/sections/introduction';
import { Timeline } from '@/components/sections/timeline';

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <Introduction />
      <About />
      <Timeline />
    </main>
  );
}
