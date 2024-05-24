import { TECH } from '@/content/sections/TechStack';
import MyQuiver from '@/public/images/projects/my-quiver.png';
import PlantSitting from '@/public/images/projects/plant-sitting.png';
import PortfolioV1 from '@/public/images/projects/portfolio-v1.png';
import PortfolioV2 from '@/public/images/projects/portfolio-v2.png';
import SurfAndCamp from '@/public/images/projects/surf-and-camp.png';
import SurfCommunity from '@/public/images/projects/surf-community.png';

export const PROJECTS = [
  {
    name: 'surfandcamp.fr (en cours)',
    type: ['Next.js'],
    tech: [TECH.nextjs, TECH.nestjs, TECH.mongodb, TECH.nodejs],
    url: '',
    repository: '',
    description: `Site de réservation et d'évaluation des Surf Camps dans le monde.`,
    featuredImage: SurfAndCamp,
    year: '2024',
  },
  {
    name: 'Portfolio V2',
    type: ['Next.js'],
    tech: [TECH.nextjs, TECH.tailwind, TECH.framer_motion, TECH.typescript],
    url: 'https://michael-auger-nextjs-portfolio.vercel.app/',
    repository: 'https://github.com/ByronMike/nextjs-portfolio',
    description: `Mon portfolio V2 réalisé avec Next.js (App router) et hébergé sur Vercel.`,
    featuredImage: PortfolioV2,
    year: '2024',
  },
  {
    name: 'Portfolio V1',
    type: ['React.js'],
    tech: [TECH.reactjs, TECH.tailwind, TECH.framer_motion],
    description: `Mon portfolio V1 réalisé avec React.js et hébergé sur Vercel.`,
    featuredImage: PortfolioV1,
    repository: 'https://github.com/ByronMike/react-portfolio',
    url: 'https://michael-auger-react-portfolio.vercel.app/',
    year: '2023',
  },
  {
    name: 'Plant Sitting (MVP)',
    type: ['React Native'],
    tech: [TECH.react_native, TECH.expo, TECH.expressJS, TECH.mongodb],
    description: `Une application mobile de mise en réseau pour le gardiennage des plantes.`,
    featuredImage: PlantSitting,
    repository: 'https://github.com/ByronMike/plantsitting-frontend',
    url: 'https://youtu.be/tuxQFKX-yO0',
    year: '2022',
  },
  {
    name: 'My quiver (MVP)',
    type: ['No code'],
    tech: [TECH.no_code, TECH.glide, TECH.excel],
    description: `My Quiver est une app mobile permettant aux Surfeurs de créer un quiver virtuel.`,
    featuredImage: MyQuiver,
    year: '2020',
    repository: '',
    url: 'https://myquiver.glideapp.io/',
  },
  {
    name: 'surf-community.fr',
    type: ['Wordpress'],
    tech: [TECH.wordpress, TECH.linux, TECH.apache, TECH.mysql],
    description: `Surf Community est un site dédié à la communauté Surf (+300k vues).`,
    featuredImage: SurfCommunity,
    year: '2017',
    repository: '',
    url: 'https://surf-community.fr/',
  },
];
