// Canonical site URL. Override via NEXT_PUBLIC_SITE_URL (e.g. a custom domain)
// in the Vercel project settings; falls back to the current production URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://michael-auger-nextjs-portfolio.vercel.app'
).replace(/\/$/, '');

export const SITE_NAME = 'Michaël Auger';

// Locale-invariant identity used for the JSON-LD Person schema. The localized
// jobTitle/description are passed in from messages at render time.
export const PERSON = {
  name: 'Michaël Auger',
  email: 'auger.michaell@gmail.com',
  sameAs: [
    'https://github.com/ByronMike',
    'https://www.linkedin.com/in/auger-michael/',
  ],
};

export function buildPersonSchema({
  locale,
  jobTitle,
  description,
}: {
  locale: string;
  jobTitle: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSON.name,
    url: `${SITE_URL}/${locale}`,
    email: `mailto:${PERSON.email}`,
    jobTitle,
    description,
    sameAs: PERSON.sameAs,
    knowsLanguage: ['en', 'fr'],
    knowsAbout: [
      'Next.js',
      'React',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Stripe',
      'Product Engineering',
    ],
  };
}
