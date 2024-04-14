import { TECH } from '@/content/tech-stack';
import SurfCommunity from '@/public/images/projects/surf-community.png';

export const PROJECTS = [
  {
    name: 'Lunatag',
    type: ['Shopify Apps'],
    tech: [
      TECH.typescript,
      TECH.vercel,
      TECH.nextjs,
      TECH.reactjs,
      TECH.prisma,
    ],
    url: 'https://apps.shopify.com/lunatag',
    repository: '',
    description: `I've created a Shopify App that allows users to add Tags to any image on their Shopify site to upsell products. The app is available on the Shopify App store and works for all Shopify themes.`,
    content: (
      <>
        <p>
          I build LunaTag together with @LizT as a solution to create shoppable
          images anywhere on a Shopify hosted site. The apps interface fully
          integrates into a Shopify backend.
        </p>
        <p>
          The project had several core challenges: Iframe Proxying, Image
          tagging stacking context, reverse dom selectors, serverless Shopify
          app authentication.
        </p>
      </>
    ),
    featuredImage: SurfCommunity,
    year: '2022',
  },
  {
    name: 'Tellmann',
    type: ['Marketing Sites'],
    tech: [TECH.typescript, TECH.vercel, TECH.nextjs, TECH.reactjs],
    url: 'https://tellmann.co.za',
    repository: 'https://github.com/FelixTellmann/tellmann.co.za',
    description: `Tellmann Shopify Ecommerce Agency Website. I've built the site to establish a basis to find new Web Development projects and promote Shopify services.`,
    content: (
      <>
        <p>
          I have create the Tellmann Shopify Ecommerce Agency Website in 2020 to
          establish a basis to find new Web Development projects.
        </p>
      </>
    ),
    featuredImage: SurfCommunity,
    year: '2020',
  },
  {
    name: 'ClickUpload',
    type: ['Shopify Apps'],
    tech: [
      TECH.typescript,
      TECH.vercel,
      TECH.nextjs,
      TECH.reactjs,
      TECH.tailwind,
      TECH.prisma,
    ],
    url: 'https://apps.shopify.com/click-upload',
    repository: '',
    description: `ClickUpload enables Shopify store owners to let customers upload files to their orders. The Shopify App supports all file types and sizes. All files are linked to the order and can be downloaded easily.`,
    content: (
      <>
        <p>
          I build ClickUpload together with @LizT in order to allow merchants
          add file Upload capabilities to their Shopify site. The apps interface
          fully integrates into a Shopify backend.
        </p>
      </>
    ),
    featuredImage: SurfCommunity,
    year: '2021',
  },
  {
    name: 'Kids Living',
    type: ['Ecommerce Sites', 'Integrations'],
    tech: [TECH.typescript, TECH.vercel],
    url: 'https://kidsliving.co.za',
    repository: '',
    description: `Large scale Ecommerce website for a South African based client with 3 brick & mortar locations and over 3000 products.`,
    content: (
      <>
        <p>
          I have worked with Kids Living since 2017 as their Ecommerce success
          partner covering everything from web development, inventory
          management, and marketing to custom API integrations.
        </p>
      </>
    ),
    featuredImage: SurfCommunity,
    year: '2017',
  },
  {
    name: 'Lunalemon',
    type: ['Marketing Sites'],
    tech: [TECH.typescript, TECH.tailwind, TECH.nextjs, TECH.vercel],
    description:
      "Headless Web agency site utilizing Shopify's theme editor as a custom CMS. The site showcases my client oriented projects and promotes web development services.",
    featuredImage: SurfCommunity,
    year: '2022',
    url: 'https://kidsliving.co.za',
    repository: 'https://github.com/FelixTellmann/lunalemon.dev',
  },
  {
    name: 'Lunalemon',
    type: ['Marketing Sites'],
    tech: [TECH.typescript, TECH.tailwind, TECH.nextjs, TECH.vercel],
    description:
      "Headless Web agency site utilizing Shopify's theme editor as a custom CMS. The site showcases my client oriented projects and promotes web development services.",
    featuredImage: SurfCommunity,
    year: '2022',
    url: 'https://kidsliving.co.za',
    repository: 'https://github.com/FelixTellmann/lunalemon.dev',
  },
];
