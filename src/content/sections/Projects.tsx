import { projectType } from '@/types/components/projectCard';
import { TECH } from '@/content/sections/TechStack';
import BatMat from '@/public/images/projects/batmat.png';
import LaProvence from '@/public/images/projects/la-provence.png';
import MyKard from '@/public/images/projects/mykard.png';
import MyQuiver from '@/public/images/projects/my-quiver.png';
import SurfAndCamp from '@/public/images/projects/surf-and-camp.png';
import SurfCommunity from '@/public/images/projects/surf-community.png';

// Classés du plus récent au plus ancien. Descriptions in messages under
// `projects.items.<id>`.
export const PROJECTS: projectType[] = [
  {
    id: 'batmat',
    name: 'BatMat',
    type: ['Next.js'],
    tech: [TECH.nextjs, TECH.reactjs, TECH.postgresql, TECH.cloudflare],
    url: 'https://ch.batmat.io/',
    repository: '',
    featuredImage: BatMat,
    objectPosition: 'left center',
    year: '2026',
  },
  {
    id: 'mykard',
    name: 'MyKard',
    type: ['Next.js'],
    tech: [TECH.nextjs, TECH.typescript, TECH.nodejs],
    url: 'https://www.mykard.ch/',
    repository: '',
    featuredImage: MyKard,
    objectPosition: 'center top',
    darkPanel: true,
    year: '2026',
  },
  {
    id: 'surfandcamp',
    name: 'SurfAndCamp',
    type: ['Next.js'],
    tech: [TECH.nextjs, TECH.typescript, TECH.stripe, TECH.postgresql],
    url: 'https://www.surfandcamp.com/',
    repository: '',
    featuredImage: SurfAndCamp,
    year: '2025',
  },
  {
    id: 'laprovence',
    name: 'La Provence',
    type: ['Next.js'],
    tech: [TECH.nextjs, TECH.nestjs, TECH.typescript, TECH.tailwind],
    url: 'https://www.laprovence.com/',
    repository: '',
    featuredImage: LaProvence,
    year: '2023',
  },
  {
    id: 'myquiver',
    name: 'MyQuiver',
    type: ['React Native'],
    tech: [TECH.react_native, TECH.expo, TECH.nestjs],
    featuredImage: MyQuiver,
    year: '2020',
    repository: '',
    url: 'https://myquiver.glideapp.io/',
  },
  {
    id: 'surf-community',
    name: 'surf-community.fr',
    type: ['Wordpress'],
    tech: [TECH.wordpress, TECH.php, TECH.javascript, TECH.mysql],
    featuredImage: SurfCommunity,
    year: '2017',
    repository: '',
    url: 'https://surf-community.fr/',
  },
];
