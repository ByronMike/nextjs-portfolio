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
      statistic: `${
        new Date(Date.now() - new Date('1991-11-30').getTime()).getFullYear() -
        1970
      }`,
      caption: 'ans',
    },
    {
      statistic: `${
        new Date(Date.now() - new Date('2017').getTime()).getFullYear() - 1970
      }`,
      caption: 'années Webmaster',
    },
    {
      statistic: `${
        new Date(Date.now() - new Date('2021').getTime()).getFullYear() - 1970
      }+`,
      caption: 'années Développeur',
    },
    {
      statistic: '1000+',
      caption: 'Commits',
    },
  ],
  description: (
    <>
      <p>
        Mon domaine de prédilection est le développement front-end avec{' '}
        <strong>Next.js</strong>, <strong>Typescript</strong> et{' '}
        <strong>TailwindCSS</strong> pour créer de belles expériences
        utilisateurs (UI / UX).
      </p>
      <p>
        Après une première expérience personnelle de plus de 7 ans à gérer un{' '}
        <a
          href="https://www.surf-community.fr"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 underline"
        >
          blog communautaire
        </a>{' '}
        sur Wordpress, en parallèle de mes travaux d'enseignant-chercheur en
        économie quantitative, j'ai décidé de devenir développeur à plein temps.
      </p>
      <p>
        Actuellement en poste à La Provence, un quotidien régional français créé
        en 1997 à Marseille, je reste ouvert à d'autres opportunités
        professionnelles.
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
