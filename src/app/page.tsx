import About from '@/components/sections/About';
import Introduction from '@/components/sections/Introduction';
import TechStack from '@/components/sections/TechStack';
import Timeline from '@/components/sections/Timeline';
import Projects from '@/components/sections/Projects';
import Partners from '@/components/sections/Partners';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Introduction />
      <TechStack />
      <About />
      <Timeline />
      <Projects />
      <Partners />
      <Contact />
    </>
  );
}
