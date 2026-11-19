const messages = {
  meta: {
    title: 'Michaël Auger — Fullstack Product Engineer (Freelance)',
    description:
      'Freelance Fullstack Product Engineer: marketplaces, payments and internal tools with Next.js, Node.js and PostgreSQL. Fully remote, worldwide.',
    jobTitle: 'Fullstack Product Engineer (Freelance)',
  },

  nav: {
    items: {
      about: {
        title: 'About',
        alt: 'My professional and personal introduction',
      },
      projects: { title: 'Projects', alt: 'My best projects' },
      partners: { title: 'Partners', alt: 'Partners who trust me' },
      contact: { title: 'Contact', alt: 'Get in touch' },
    },
    cta: "Let's work",
  },

  localeSwitcher: {
    label: 'Change language',
    fr: 'Français',
    en: 'English',
  },

  hero: {
    pre: 'Available for remote missions',
    heading: 'I’m <name>Michaël Auger</name> Product Engineer.',
    body: 'I design and ship web products end to end — marketplaces, payment flows and internal tools — with <react>React.js</react>, <next>Next.js</next>, <node>Node.js</node> and PostgreSQL. Fully remote, worldwide.<break></break>A product mindset forged by building my own products, and the rigour of 8 years in research and finance before moving to code. My goal: improve code quality for its business impact.',
    ctaContact: 'Get in touch',
    ctaCv: 'CV',
    badges: {
      role: 'Product Engineer',
      surfer: 'Surfer',
      ukulele: 'Ukuleleist',
      tea: 'Ginger tea aficionado',
    },
  },

  techstack: {
    title: 'My favourite tools for web development',
  },

  about: {
    pre: 'About',
    srBrowse: 'Browse images',
    stats: {
      products: 'products founded',
      code: 'years of code',
      research: 'years research & finance',
      commits: 'Commits',
    },
    p1: 'I’m a freelance fullstack Product Engineer, fully remote near Geneva. I build web products end to end with <strong>Next.js</strong>, <strong>Node.js</strong> and <strong>Typescript</strong> to craft great user experiences (UI / UX).',
    p2: 'Tech founder of <link>SurfAndCamp</link>, an international surf-camp marketplace, and of Surf-Community, I know what it takes to build a product from A to Z — not just close tickets.',
    p3: 'Before code, 8+ years in research and sustainable finance left me with rigour, analytical skills and business sense. I work freelance, full-time or as two 50% missions, anywhere in the world.',
    imageAlts: [
      'Yours truly',
      'Surfing in Portugal, near Peniche',
      "Buddha's garden of eden in Bombarral, Portugal",
      "Harrison Smith's gardens in Tahiti",
      'The famous calanques of Marseille',
      'The epicentre of the surfing world',
      'The Tahitian rainforest',
      'A T-rex in the land of cicadas',
      'A developer in their element',
    ],
  },

  timeline: {
    today: 'Today',
    '1991-birth': {
      heading: 'Born',
      description:
        'In La Roche-sur-Yon (France), the brioche capital of Vendée',
    },
    '1997-computer': {
      heading: 'First computer',
      description:
        'Discovering computing on the family machine — an Intel Pentium II (233 MHz) running Windows 95. That first video game stays unforgettable: Dynamite Joe 👾',
    },
    '2003-web': {
      heading: 'The Web',
      description:
        'A few years after discovering the web on 128 kbps modems, I got involved in my gaming community (OGame, Yu-Gi-Oh) by creating and moderating my first free forum-management platforms (forumactif)',
    },
    '2004-games': {
      heading: 'Video games',
      description:
        'With a strong taste for challenges, I posted a few results in my favourite games (Vietcong, Age of Mythology, Halo) — including a top 10 (out of 25,000) in OGame.fr universe 36',
    },
    '2009-quant': {
      heading: 'Quantitative passions',
      description:
        'The year of the baccalauréat, when a few passions surfaced that would stay with me for years: economics, finance and mathematics',
    },
    '2013-firstlang': {
      heading: 'First programming language',
      description:
        'My training in quantitative economics and econometrics in the Ingénieur Économiste programme at Aix-Marseille University introduced my first lines of code for statistics: SAS and Visual Basic',
    },
    '2013-finance': {
      heading: 'Responsible finance',
      description:
        'Joining KEDGE Business School (Grande École programme) gave me my first courses on responsible finance within a European business school',
    },
    '2015-finance-action': {
      heading: 'Responsible finance in action',
      description:
        '2015 marked my first professional work in responsible finance, with reports published by French public bodies (the AMF, the Ministry of Ecology) and in asset management (Ecofi Investissements)',
    },
    '2016-surf-community': {
      heading: 'surf-community.fr',
      description:
        'My passion for surf and my urge to share led me to build a site for surfers — a WordPress site where I wrote my first (non-statistical) lines of code to customise it (HTML, CSS, JS)',
    },
    '2017-research': {
      heading: 'Finance & research',
      description:
        "I joined the Environmental Economics master's hosted by AgroParisTech and École Polytechnique. I enjoyed writing bits of code for my projects in Scilab (numerical computing), R and Python",
    },
    '2022-covid': {
      heading: 'Covid & code',
      description:
        'After several years in teaching and research (X, KEDGE BS, University of French Polynesia), Covid ended and I realised what I love most, professionally and personally: code and the web',
    },
    '2022-selftaught': {
      heading: 'Self-taught',
      description:
        'I love to code, but do I love coding full-time? To be sure, I followed tutorials dating back to Site du Zéro, online courses and other certificates (codecademy). Yes, I love coding full-time and I want to step it up',
    },
    '2022-lacapsule': {
      heading: 'La Capsule',
      description:
        'To accelerate, I completed an intensive "Fullstack web & mobile developer" programme (RNCP 6 — bac +3/+4) at La Capsule, nearly 400 hours focused on modern tech: the MERN stack (MongoDB, Express.js, React and Node.js)',
    },
    '2023-tcm': {
      heading: 'The Coding Machine',
      description:
        'On assignment for a B2B software agency (The Coding Machine), I had the chance to work with a dual project-manager / web-developer hat on a modern tech stack: React, Redux, Apollo GraphQL, Cypress',
    },
    '2023-laprovence': {
      heading: 'La Provence',
      description:
        'I joined La Provence, a French regional daily founded in 1997 in Marseille, for a full site redesign. Hired on a permanent contract as a web developer, my stack is: ⚡ Next, Tailwind, StoryBook, TS ⚡',
    },
    '2024-perso': {
      heading: 'Personal projects',
      description:
        '2024 brought personal projects back to the forefront and the redesign of my portfolio with tech that adds real value to UI and UX: framer-motion and three.js',
    },
    '2025-batmat': {
      heading: 'BatMat — Kode',
      description:
        'I started freelancing for Kode (Switzerland) on BatMat, a multi-country B2B/B2C building-materials marketplace: internationalisation, Stripe payments, Cloudflare security (~75% fewer attacks) and international SEO. In parallel, I build SurfAndCamp, my surf-camp marketplace.',
    },
    '2026-freelance': {
      heading: 'Full-time freelance',
      description:
        'I go full-time freelance, fully remote: Product Engineer for startups, agencies and software editors — from business need to production (Kode, MyDMC/Zintra).',
    },
  },

  projects: {
    pre: 'My projects',
    title: 'A selection of my projects',
    filterAll: 'All Projects',
    srRepository: 'Link to GitHub',
    srUrl: 'Link to the project',
    items: {
      batmat:
        'Multi-country B2B/B2C building marketplace (Kode): i18n, Stripe, Cloudflare security.',
      mykard:
        'NFC business card & digital profile (MyDMC): e-commerce and tracking (Meta Pixel).',
      surfandcamp:
        'Tech founder — international surf-camp marketplace, Stripe Connect, multi-country.',
      laprovence:
        'Redesign of 3 media brands (CMA Média) + Design System. Lighthouse 65→92, −30% load.',
      myquiver:
        'Mobile app to build your virtual surf quiver. React Native (Expo, Nest.js).',
      'surf-community':
        'Tech founder — surf media (WordPress): 50+ articles, 500k+ views, 12k followers.',
    },
  },

  partners: {
    title: 'They trusted me',
    subtitle:
      'A diverse mix of companies by size (SMEs, mid-caps) and sector (media, retail tech, agencies, real estate, automotive)',
    logoAlt: '{name} company logo',
  },

  contact: {
    pre: 'Contact',
    title: 'Keep in Touch',
    body: 'Feel free to reach out to talk about my projects or any other professional opportunity:',
    links: {
      email: 'Email',
      linkedin: 'Linkedin',
      github: 'GitHub',
      resume: 'Resume',
    },
  },

  footer: {
    rights: 'All rights reserved.',
  },
} as const;

export default messages;
