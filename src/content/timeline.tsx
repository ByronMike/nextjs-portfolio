import {
  CodeBracketIcon,
  CodeBracketSquareIcon,
  ComputerDesktopIcon,
  WifiIcon,
} from '@heroicons/react/24/solid';

import { AiOutlineFund } from 'react-icons/ai';
import { BiGame } from 'react-icons/bi';
import { CiKeyboard } from 'react-icons/ci';
import { FaBaby } from 'react-icons/fa';
import { IoBookOutline } from 'react-icons/io5';
import { PiLeafThin } from 'react-icons/pi';
import { TbMathIntegrals } from 'react-icons/tb';

interface TIMELINEOBJECTTYPE {
  [year: string]: {
    date: string;
    heading: string;
    description: string;
    Icon: React.FunctionComponent<{ className?: string }>;
  }[];
}

export const TIMELINEOBJECT: TIMELINEOBJECTTYPE = {
  1991: [
    {
      date: '1991-11-30',
      heading: 'Naissance',
      description:
        'A la Roche-sur-Yon (France), capitale de la brioche vendéenne',
      Icon: ({ className = '' }) => <FaBaby className={className} />,
    },
  ],
  1997: [
    {
      date: '1997-01-01',
      heading: 'Premier Ordinateur',
      description:
        "Découverte de l'univers informatique avec l'ordinateur familial tournant avec Intel Pentium II (233 MHz) sur Windows 95. Le premier jeu vidéo restera un souvenir impérissable: Dynamite Joe 👾",
      Icon: ({ className = '' }) => (
        <ComputerDesktopIcon className={className} />
      ),
    },
  ],
  2003: [
    {
      date: '2003-06-01',
      heading: 'Le Web',
      description:
        "Quelques années après avoir découvert le web sur des modems 128 kbps, je décide de m'impliquer dans ma communauté de joueurs (OGame, Yu-Gi-Oh) avec la création et la modération des premières plateformes de gestion de forums gratuits (forumactif)",
      Icon: ({ className = '' }) => <WifiIcon className={className} />,
    },
  ],
  2004: [
    {
      date: '2004-06-01',
      heading: 'Jeux vidéo',
      description:
        "Avec un goût prononcé pour les challenges, je réalise quelques performances dans mes jeux de prédilection (Vietcong, Age of Mythology, Halo) et notamment un top 10 (sur 25.000) dans l'univers 36 d'OGame.fr ",
      Icon: ({ className = '' }) => <BiGame className={className} />,
    },
  ],
  2009: [
    {
      date: '2009-01-01',
      heading: 'Passions quantitatives',
      description:
        "L'année du baccalauréat, une période où se sont révélées quelques passions qui allaient me suivre des années durant : l'économie, la finance et les mathématiqes",
      Icon: ({ className = '' }) => <TbMathIntegrals className={className} />,
    },
  ],
  2013: [
    {
      date: '2013-01-01',
      heading: 'Premier langage de programmation',
      description:
        "Ma formation en économie quantitative et économétrie dans le magistère Ingénieur Economiste d'Aix-Marseille Université m'a fait découvrir mes premières lignes de code pour la statistique : SAS et Visual Basic",
      Icon: ({ className = '' }) => <CodeBracketIcon className={className} />,
    },
    {
      date: '2013-09-01',
      heading: 'Finance Responsable',
      description:
        "Mon entrée à Kedge Business School dans le Programme Grande Ecole est l'opportunité d'avoir les premiers enseignements sur la finance responsable dans une école de commerce européenne",
      Icon: ({ className = '' }) => <PiLeafThin className={className} />,
    },
  ],
  2015: [
    {
      date: '2015-01-01',
      heading: 'Finance Responsable en Action',
      description:
        "L'année 2015 marque mes premiers engagements professionnels dans la finance responsable avec des travaux publiés par différents services d'état (Autorité des Marchés Financiers, Ministère de l'Ecologie) ou dans la gestion d'actifs (Ecofi Investissements)",
      Icon: ({ className = '' }) => <AiOutlineFund className={className} />,
    },
  ],
  2016: [
    {
      date: '2016-01-01',
      heading: 'surf-community.fr',
      description:
        "Ma passion pour le Surf et mon envie de partager mes expériences  me conduisent à créer un site pour les pratiquants de Surf. Un site Wordpress avec lequel j'ai fait mes premières lignes de code (non-statistiques) pour customiser mon site (HTML, CSS, JS)",
      Icon: ({ className = '' }) => (
        <CodeBracketSquareIcon className={className} />
      ),
    },
  ],
  2017: [
    {
      date: '2017-01-01',
      heading: 'Finance et Recherche',
      description:
        "J'intègre le master en Economie de l'Environnement hébergé par AgroParisTech et l'Ecole Polytechnique. Je prends du plaisir à réaliser quelques bouts de code pour mes projets en Scilab (calcul numérique), R et Python",
      Icon: ({ className = '' }) => <IoBookOutline className={className} />,
    },
  ],
  2022: [
    {
      date: '2022-01-01',
      heading: 'Covid et Code',
      description:
        "Après plusieurs années dans l'enseignement et la recherche (X, Kedge BS, Université de la Polynésie Française), le covid prend fin, et je me rends compte que ce qui me passionne le plus dans mes activités pro et perso : c'est le code et le web",
      Icon: ({ className = '' }) => <CodeBracketIcon className={className} />,
    },
    {
      date: '2022-05-01',
      heading: 'Apprentissage autodidacte',
      description:
        "J'aime coder, mais est-ce que j'aime coder à temps plein ? Pour en être sûr, je suis des tutos qui datent du Site du Zéro, des formations en ligne et autres certificats (codecademy). Oui, j'aime coder à temps plein et je veux passer à la vitesse supérieure ",
      Icon: ({ className = '' }) => (
        <CodeBracketSquareIcon className={className} />
      ),
    },
    {
      date: '2022-09-01',
      heading: 'La Capsule',
      description:
        'Pour accompagner ma progression, je réalise une formation intensive avec le programme "Développeur Fullstack web & mobile" (RNCP 6 - bac +3/+4) de La Capsule avec près de 400 heures de formation qui se focalisent sur quelques technos modernes : la stack MERN (MongoDB, Express.js, React et Node.js)',
      Icon: ({ className = '' }) => <CodeBracketIcon className={className} />,
    },
  ],
  2023: [
    {
      date: '2023-02-01',
      heading: 'The Coding Machine',
      description:
        "En mission pour une ESN spécialisée sur le éditeurs de logiciels en B2B (The Coding Machine), j'ai eu la chance de travailler sur un tech stack que j'apprécie et sur laquelle je souhaitais me spécialiser en tant que développeur front-end : React, Redux, Apollo GraphL, Cypress",
      Icon: ({ className = '' }) => (
        <CodeBracketSquareIcon className={className} />
      ),
    },
    {
      date: '2023-07-01',
      heading: 'La Provence',
      description:
        'Je rejoins La Provence, un quotidien régional français créé en 1997 à Marseille, qui souhaite faire une refonte totale du site. Recruté en CDI en tant que développeur front-end, ma stack est : ⚡Next, Tailwind, StoryBook, TS⚡',
      Icon: ({ className = '' }) => <CodeBracketIcon className={className} />,
    },
  ],
  2024: [
    {
      date: '2024-03-01',
      heading: 'Projets perso',
      description:
        "L'année 2024 annonce le retour au premier plan des projets perso et la refonte de mon portfolio avec des technos qui apportent une réelle plus-value dans l'UI et l'UX : framer-motion et three.js",
      Icon: ({ className = '' }) => <CiKeyboard className={className} />,
    },
  ],
};
