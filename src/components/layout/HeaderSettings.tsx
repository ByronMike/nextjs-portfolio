'use client';

import { FunctionComponent } from 'react';
import { useTheme } from 'next-themes';
import { SiGithub } from 'react-icons/si';
import DarkmodeIcon from '@/components/DarkModeIcon';
import ButtonMail from '@/components/ButtonMail';
import { GITHUB_LINK, EMAIL_CONTACT } from '@/helpers/constants';

const ProfileNav: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="z-10 ml-auto flex gap-1 pl-4">
      <button
        type="button"
        aria-label="theme icon"
        className={
          'rounded p-2 text-gray-500 transition-colors d:text-gray-300 d:h:text-gray-50 md:h:text-gray-900'
        }
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <DarkmodeIcon />
      </button>
      <a
        target="_blank"
        rel="noreferrer"
        href={GITHUB_LINK}
        aria-label="github"
        className={
          'rounded p-2 text-gray-500 transition-colors d:text-gray-300 d:h:text-gray-50 md:h:text-gray-900'
        }
      >
        <SiGithub className="h-5 w-5" />
      </a>
      <ButtonMail label="Let's work" mailto={`mailto:${EMAIL_CONTACT}`} />
    </nav>
  );
};

export default ProfileNav;
