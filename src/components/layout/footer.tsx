import { FunctionComponent } from 'react';
import Link from 'next/link';
import { FOOTER } from '@/content/layout/Footer';

export const Footer: FunctionComponent = () => {
  return (
    <footer className="print:hidden">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {Object.values(FOOTER.socialAccount).map(({ name, Icon, href }) => (
            <Link
              key={name}
              href={href}
              className="p-1 text-gray-400 hover:text-gray-500 d:text-gray-600 d:hover:text-gray-500"
            >
              <span className="sr-only">{name}</span>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <small className="block text-center text-sm text-gray-400 d:text-gray-600">
            {FOOTER.copyright}
          </small>
        </div>
      </div>
    </footer>
  );
};
