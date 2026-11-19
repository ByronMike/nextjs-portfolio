import Bouddha from '@/public/images/about/bouddha.jpg';
import Calanques from '@/public/images/about/calanques.jpg';
import Dev from '@/public/images/about/dev.jpg';
import JurassicPark from '@/public/images/about/jurassic-park.jpg';
import Me from '@/public/images/about/me.png';
import SurfPortugal from '@/public/images/about/surf-portugal.jpg';
import TahitiJardin from '@/public/images/about/tahiti-jardin.jpg';
import TahitiPk0 from '@/public/images/about/tahiti-pk0.jpg';
import Tahiti from '@/public/images/about/tahiti.jpg';

// Locale-invariant about data: animated stat values (keyed to message captions
// under `about.stats.<key>`) and the image gallery (alt text comes from
// `about.imageAlts` by index). Bio paragraphs live in `about.p1/p2/p3`.
export const ABOUT = {
  stats: [
    { statistic: '2', key: 'products' },
    { statistic: '4', key: 'code' },
    { statistic: '8', key: 'research' },
    { statistic: '1000+', key: 'commits' },
  ],
  images: [
    Me,
    SurfPortugal,
    Bouddha,
    Tahiti,
    Calanques,
    TahitiPk0,
    TahitiJardin,
    JurassicPark,
    Dev,
  ],
};
