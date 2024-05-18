import { FunctionComponent } from 'react';
import Section from '@/components/layout/Section';
import { PARTNERS } from '@/content/sections/Partners';

const Partners: FunctionComponent = () => {
  return (
    <Section
      id="partners"
      className="mx-auto my-32 grid w-full max-w-6xl px-6 md:px-8"
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
          {PARTNERS.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noreferrer"
            >
              {partner.logo}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Partners;
