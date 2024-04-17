'use client';

import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { LinkIcon } from '@heroicons/react/24/solid';
import { FaGithub } from 'react-icons/fa';

import { ProjectCardProps } from '@/types/components/project-card';

const variants = {
  hover: { opacity: 0, y: '100%' },
};

export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  project,
}) => {
  return (
    <motion.section
      key={project.name}
      whileHover="hover"
      className={clsx(
        'backdrop relative h-[380px] w-[340px] min-w-[340px] snap-start rounded-xl border-2 border-gray-700/30 bg-white bg-opacity-10  bg-clip-padding p-4 shadow-xl  transition-[min-width,width,margin-left,opacity] duration-300 spacing-0 d:border-white/20'
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
      <div className="absolute bottom-0 left-0 w-full">
        <motion.header
          className="h-[160px] rounded-b-xl bg-opacity-60 bg-clip-padding px-4 pb-2 pt-2 text-[15px] tracking-tight text-black backdrop-blur-lg backdrop-filter d:text-black"
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold tracking-tighter text-black d:text-white">
            {project.name}
          </h2>
          <div className="-ml-0.5 mt-0.5 flex items-center gap-2 tracking-tight text-black d:text-gray-200">
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
          <p className="line-clamp-4 py-2">{project.description}</p>
        </motion.header>
        <footer className="absolute bottom-0 left-0 w-full rounded-b-xl bg-opacity-60 bg-clip-padding px-4 py-2 backdrop-blur-lg backdrop-filter">
          <div className="flex w-full items-end justify-end gap-2">
            <div className="mr-auto text-sm font-semibold text-black d:text-gray-300/80">
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
          </div>
        </footer>
      </div>
    </motion.section>
  );
};
