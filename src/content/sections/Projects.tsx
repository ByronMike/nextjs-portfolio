import { TECH } from '@/content/sections/TechStack';
import BatMat from '@/public/images/projects/batmat.png';
import LaProvence from '@/public/images/projects/la-provence.png';
import MyKard from '@/public/images/projects/mykard.png';
import MyQuiver from '@/public/images/projects/my-quiver.png';
import SurfAndCamp from '@/public/images/projects/surf-and-camp.png';
import SurfCommunity from '@/public/images/projects/surf-community.png';

// TODO: remplacer batmat.png / la-provence.png / mykard.png (placeholders
// dégradés) par de vraies captures des sites ch.batmat.io, laprovence.com,
// mykard.ch.
export const PROJECTS = [
  {
    name: 'SurfAndCamp',
    type: ['Next.js'],
    tech: [TECH.nextjs, TECH.typescript, TECH.stripe, TECH.postgresql],
    url: 'https://www.surfandcamp.com/',
    repository: '',
    description: `Fondateur tech — marketplace internationale de surf camps : réservation, paiements multi-vendeurs (Stripe Connect), multi-pays FR/EN.`,
    featuredImage: SurfAndCamp,
    year: '2025',
  },
  {
    name: 'BatMat',
    type: ['Next.js'],
    tech: [TECH.nextjs, TECH.reactjs, TECH.postgresql, TECH.cloudflare],
    url: 'https://ch.batmat.io/',
    repository: '',
    description: `Marketplace B2B/B2C du bâtiment multi-pays (Kode) : internationalisation, paiements Stripe, sécurité Cloudflare et SEO international.`,
    featuredImage: BatMat,
    year: '2025',
  },
  {
    name: 'La Provence',
    type: ['Next.js'],
    tech: [TECH.nextjs, TECH.nestjs, TECH.typescript, TECH.tailwind],
    url: 'https://www.laprovence.com/',
    repository: '',
    description: `Refonte web & mobile de 3 médias (CMA Média) avec un Design System. Lighthouse 65 → 92, temps de chargement −30 %.`,
    featuredImage: LaProvence,
    year: '2023',
  },
  {
    name: 'MyKard / M-EG',
    type: ['Next.js'],
    tech: [TECH.nextjs, TECH.typescript, TECH.nodejs],
    url: 'https://www.mykard.ch/',
    repository: '',
    description: `Console métier & tracking pour une agence digitale suisse (MyDMC) : socle applicatif, module de demandes, chatbot Botpress.`,
    featuredImage: MyKard,
    year: '2026',
  },
  {
    name: 'surf-community.fr',
    type: ['Wordpress'],
    tech: [TECH.wordpress, TECH.php, TECH.javascript, TECH.mysql],
    description: `Fondateur tech — média dédié à la communauté Surf (WordPress) : 50+ articles, 500k+ vues, 12k abonnés Instagram.`,
    featuredImage: SurfCommunity,
    year: '2017',
    repository: '',
    url: 'https://surf-community.fr/',
  },
  {
    name: 'MyQuiver',
    type: ['React Native'],
    tech: [TECH.react_native, TECH.expo, TECH.nestjs],
    description: `App mobile pour créer son « quiver » de surf virtuel. React Native (Expo, NativeWind, Nest.js).`,
    featuredImage: MyQuiver,
    year: '2020',
    repository: '',
    url: 'https://myquiver.glideapp.io/',
  },
];
