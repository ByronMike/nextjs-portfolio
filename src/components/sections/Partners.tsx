import { FunctionComponent } from 'react';
import Section from '@/components/layout/Section';
import LogoAristid from '@/public/svg/partners/aristid.svg';
import LogoLP from '@/public/svg/partners/la-provence.svg';
import LogoProcivis from '@/public/svg/partners/procivis.svg';
import LogoReezocar from '@/public/svg/partners/reezocar.svg';
import LogoTCM from '@/public/svg/partners/the-coding-machine.svg';

export const Partners: FunctionComponent = () => {
  return (
    <Section
      id="partners"
      className="portfolio-preview md:px-8> mx-auto my-32 grid w-full max-w-6xl px-4"
    >
      <div className="mx-auto grid w-full max-w-6xl px-4 md:px-8">
        <h2 className="headline text-center text-xl font-bold md:text-2xl lg:text-3xl">
          Ces marques me font confiance en tant que Développeur Web
        </h2>
        <div className="tracking tight text-center leading-relaxed text-gray-500 d:text-gray-100/70 [&>p+p]:mt-4">
          Il s'agit d'entreprises très diverses selon leur taille (PME, ETI) et
          leur secteur d'activité (média, retail tech, ESN, immobilier,
          automobile)
        </div>
        <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          <a href="https://www.aristid.com/">
            <LogoAristid
              className="w-32"
              aria-label="Logo de l'entreprise Aristid"
            />
          </a>
          <a href="https://www.laprovence.com/">
            <LogoLP
              className="w-32"
              aria-label="Logo de l'entreprise La Provence"
            />
          </a>
          <a href="https://thecodingmachine.com/">
            <LogoTCM
              className="w-32"
              aria-label="Logo de l'entreprise The Coding Machine"
            />
          </a>
          <a href="https://procivis.fr/">
            <LogoProcivis
              className="mr-10 w-32"
              aria-label="Logo de l'entreprise Procivis"
            />
          </a>
          <a href="https://www.reezocar.com/">
            <LogoReezocar
              className="ml-4 w-32"
              aria-label="Logo de l'entreprise Reezocar"
            />
          </a>
        </div>
      </div>
    </Section>
  );
};
