import {
  CodeBracketIcon,
  CodeBracketSquareIcon,
  ComputerDesktopIcon,
  WifiIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/solid';

import { AiOutlineFund } from 'react-icons/ai';
import { BiGame } from 'react-icons/bi';
import { CiKeyboard } from 'react-icons/ci';
import { FaBaby } from 'react-icons/fa';
import { IoBookOutline } from 'react-icons/io5';
import { PiLeafThin } from 'react-icons/pi';
import { TbMathIntegrals } from 'react-icons/tb';

import { Timeline } from '@/types/content/timeline';

// Locale-invariant structure: year slots, dates, icons and a stable `id`.
// Headings/descriptions live in messages under `timeline.<id>`.
export const TIMELINE: Timeline = {
  1991: [
    {
      id: '1991-birth',
      date: '1991-11-30',
      Icon: ({ className = '' }) => <FaBaby className={className} />,
    },
  ],
  1997: [
    {
      id: '1997-computer',
      date: '1997-01-01',
      Icon: ({ className = '' }) => (
        <ComputerDesktopIcon className={className} />
      ),
    },
  ],
  2003: [
    {
      id: '2003-web',
      date: '2003-06-01',
      Icon: ({ className = '' }) => <WifiIcon className={className} />,
    },
  ],
  2004: [
    {
      id: '2004-games',
      date: '2004-06-01',
      Icon: ({ className = '' }) => <BiGame className={className} />,
    },
  ],
  2009: [
    {
      id: '2009-quant',
      date: '2009-01-01',
      Icon: ({ className = '' }) => <TbMathIntegrals className={className} />,
    },
  ],
  2013: [
    {
      id: '2013-firstlang',
      date: '2013-01-01',
      Icon: ({ className = '' }) => <CodeBracketIcon className={className} />,
    },
    {
      id: '2013-finance',
      date: '2013-09-01',
      Icon: ({ className = '' }) => <PiLeafThin className={className} />,
    },
  ],
  2015: [
    {
      id: '2015-finance-action',
      date: '2015-01-01',
      Icon: ({ className = '' }) => <AiOutlineFund className={className} />,
    },
  ],
  2016: [
    {
      id: '2016-surf-community',
      date: '2016-01-01',
      Icon: ({ className = '' }) => (
        <CodeBracketSquareIcon className={className} />
      ),
    },
  ],
  2017: [
    {
      id: '2017-research',
      date: '2017-01-01',
      Icon: ({ className = '' }) => <IoBookOutline className={className} />,
    },
  ],
  2022: [
    {
      id: '2022-covid',
      date: '2022-01-01',
      Icon: ({ className = '' }) => <CodeBracketIcon className={className} />,
    },
    {
      id: '2022-selftaught',
      date: '2022-05-01',
      Icon: ({ className = '' }) => (
        <CodeBracketSquareIcon className={className} />
      ),
    },
    {
      id: '2022-lacapsule',
      date: '2022-09-01',
      Icon: ({ className = '' }) => <CodeBracketIcon className={className} />,
    },
  ],
  2023: [
    {
      id: '2023-tcm',
      date: '2023-02-01',
      Icon: ({ className = '' }) => (
        <CodeBracketSquareIcon className={className} />
      ),
    },
    {
      id: '2023-laprovence',
      date: '2023-07-01',
      Icon: ({ className = '' }) => <CodeBracketIcon className={className} />,
    },
  ],
  2024: [
    {
      id: '2024-perso',
      date: '2024-03-01',
      Icon: ({ className = '' }) => <CiKeyboard className={className} />,
    },
  ],
  2025: [
    {
      id: '2025-batmat',
      date: '2025-01-01',
      Icon: ({ className = '' }) => <GlobeAltIcon className={className} />,
    },
  ],
  2026: [
    {
      id: '2026-freelance',
      date: '2026-01-01',
      Icon: ({ className = '' }) => <RocketLaunchIcon className={className} />,
    },
  ],
};
