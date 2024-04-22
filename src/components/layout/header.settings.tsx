import { FunctionComponent } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { SiGithub } from 'react-icons/si';
import DarkmodeIcon from '@/components/darkmode-icon';

export const ProfileNav: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="z-10 ml-auto flex gap-1 pl-4">
      <button
        type="button"
        className={
          'rounded p-2 text-gray-500 transition-colors d:text-gray-300 d:h:text-gray-50 md:h:text-gray-900'
        }
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <span className="sr-only">Switch Color Theme</span>
        <DarkmodeIcon />
      </button>
      <Link
        href="https://github.com/byronmike/"
        className={
          'rounded p-2 text-gray-500 transition-colors d:text-gray-300 d:h:text-gray-50 md:h:text-gray-900'
        }
      >
        <span className="sr-only">Github</span>
        <SiGithub className="h-5 w-5" />
      </Link>
      <Link
        target="_blank"
        href="mailto:auger.michaell@gmail.com"
        className="button-rainbow ml-4 hidden whitespace-nowrap px-4 py-1.5 text-sm font-medium tracking-tight text-gray-500 md:flex"
      >
        Lets work
      </Link>
    </nav>
  );
};
