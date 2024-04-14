import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/24/solid';
import { FaGithub } from 'react-icons/fa';
import clsx from 'clsx';
import { PROJECTS } from '@/content/projects';

export const Projects: FunctionComponent = () => {
  return (
    <section
      id="portfolio"
      className="portfolio-preview mx-auto grid w-full max-w-6xl px-4 md:px-8"
    >
      <header className="mx-auto grid w-full max-w-6xl px-4 md:px-8">
        <div className="heading-pre">Mes projets</div>
        <h1 className="heading-2xl -ml-1">Une sélection de mes projets</h1>
        <div className="mb relative -mx-4 mb-2 flex overflow-x-auto px-4 pb-2">
          {['All Projects', ...new Set(PROJECTS.map((p) => p.type).flat())].map(
            (type, index) => {
              return (
                <label key={type} className="flex">
                  <input
                    type="radio"
                    className="peer hidden"
                    defaultChecked={index === 0}
                    name="Tag Filter"
                    value={type}
                  />
                  <div className="cursor-pointer appearance-none whitespace-nowrap rounded-full border border-gray-200 bg-gray-400/10 px-3 py-1 text-[13px] font-medium text-gray-400 transition-colors peer-checked:text-gray-900 hfa:text-gray-500 d:border-gray-700 d:peer-checked:text-gray-50 d:hfa:text-gray-300">
                    {type}
                  </div>
                </label>
              );
            }
          )}
        </div>
      </header>
      <div className="flex flex-wrap gap-4">
        {PROJECTS.map((project) => {
          return (
            <section
              key={project.name}
              className={clsx(
                'backdrop relative h-[380px] w-[340px] min-w-[340px] snap-start rounded-xl border-2 border-gray-700/30 bg-white bg-opacity-10  bg-clip-padding p-4 shadow-lg shadow-xl transition-[min-width,width,margin-left,opacity] duration-300 spacing-0 d:border-white/20',
                project
                  ? 'flex'
                  : '-ml-8 !w-0 !min-w-0 !overflow-hidden !border-0 !px-0 opacity-20'
              )}
            >
              <figure className="relative flex aspect-2 h-full w-full">
                <Image
                  src={project.featuredImage}
                  alt={project.name}
                  width={400}
                  height={200}
                  className="rounded-t-lg object-cover object-center"
                />
              </figure>
              <div className="absolute bottom-0 left-0">
                <header>
                  <h2 className="text-2xl font-bold tracking-tighter text-gray-800 d:text-white">
                    {project.name}
                  </h2>
                  <div className="-ml-0.5 mt-0.5 flex items-center gap-2 tracking-tight text-gray-600 d:text-gray-200">
                    {project.tech?.map(({ name }, i) => {
                      if (i > 3) return null;
                      return (
                        <div
                          key={name}
                          className="flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10 bg-gray-200/30 px-1.5 py-[2px] text-[13px] font-medium hfa:bg-gray-200/60 d:bg-gray-900/20 d:text-gray-50/80 d:hfa:bg-gray-900/30"
                        >
                          {name}
                        </div>
                      );
                    })}
                  </div>
                </header>
                <main className="mt-2 text-[15px] tracking-tight text-gray-600 d:text-gray-200 ">
                  <p className="line-clamp-4">{project.description}</p>
                </main>
                <footer className="bottom-3 left-0 mt-auto flex w-full items-end justify-end gap-2 px-4">
                  <div className="mr-auto text-sm font-semibold text-gray-700/80 d:text-gray-300/80">
                    {project.year}
                  </div>
                  {project.repository ? (
                    <Link
                      target="_blank"
                      href={project.repository}
                      className="p-1 text-gray-700/80 transition-all hfa:text-gray-900 d:text-gray-300/80 d:hfa:text-gray-50"
                      data-tip="View repository"
                    >
                      <span className="sr-only">Link to Github repository</span>
                      <FaGithub className="h-5 w-5 " />
                    </Link>
                  ) : null}
                  {project.url ? (
                    <Link
                      target="_blank"
                      href={project.url}
                      className="p-1 text-gray-700/80 transition-all hfa:text-gray-900 d:text-gray-300/80 d:hfa:text-gray-50"
                      data-tip="View site"
                    >
                      <span className="sr-only">Link to Project</span>
                      <LinkIcon className="h-5 w-5 " />
                    </Link>
                  ) : null}
                </footer>
              </div>
            </section>
          );
        })}{' '}
      </div>
    </section>
  );
};
