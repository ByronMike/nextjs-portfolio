import Bouddha from '@/public/images/about/bouddha.jpg';
import Calanques from '@/public/images/about/calanques.jpg';
import Dev from '@/public/images/about/dev.jpg';
import JurassicPark from '@/public/images/about/jurassic-park.jpg';
import Me from '@/public/images/about/me.png';
import SurfPortugal from '@/public/images/about/surf-portugal.jpg';
import TahitiJardin from '@/public/images/about/tahiti-jardin.jpg';
import TahitiPk0 from '@/public/images/about/tahiti-pk0.jpg';
import Tahiti from '@/public/images/about/tahiti.jpg';

export const ABOUT = {
  stats: [
    {
      statistic: '2',
      caption: 'produits fondés',
    },
    {
      statistic: '4',
      caption: 'années de code',
    },
    {
      statistic: '1000+',
      caption: 'Commits',
    },
    {
      statistic: '8',
      caption: 'ans recherche & finance',
    },
  ],
  description: (
    <>
      <p>
        Je suis Product Engineer fullstack freelance, en full remote près de
        Genève. Je construis des produits web de bout en bout avec{' '}
        <strong>Next.js</strong>, <strong>Node.js</strong> et{' '}
        <strong>Typescript</strong> pour créer de belles expériences
        utilisateurs (UI / UX).
      </p>
      <p>
        Fondateur tech de{' '}
        <a
          href="https://www.surfandcamp.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          SurfAndCamp
        </a>
        , une marketplace internationale de surf camps, et de Surf-Community, je
        sais ce que c'est de construire un produit de A à Z — pas seulement de
        coder des tickets.
      </p>
      <p>
        Avant le code, plus de 8 ans dans la recherche et la finance durable
        m'ont laissé la rigueur, le sens analytique et la compréhension du
        business. Je travaille en freelance, à temps plein ou en deux missions à
        50 %, partout dans le monde.
      </p>
    </>
  ),
  images: [
    {
      src: Me,
      alt: 'Votre aimable serviteur',
    },
    {
      src: SurfPortugal,
      alt: 'Surf au Portugal dans la région de Peniche',
    },
    {
      src: Bouddha,
      alt: "Le jardin d'eden de Buddha à Bombarral au Portugal",
    },
    {
      src: Tahiti,
      alt: "Les jardins d'Harrison Smith à Tahiti",
    },
    {
      src: Calanques,
      alt: 'Les fameuses calanques de Marseille',
    },
    {
      src: TahitiPk0,
      alt: 'Le centre du monde de la planète Surf',
    },
    {
      src: TahitiJardin,
      alt: 'La forêt tropicale tahitienne',
    },
    {
      src: JurassicPark,
      alt: 'Un T-rex au pays des cigales',
    },
    {
      src: Dev,
      alt: 'Un développeur dans son élément',
    },
  ],
};
