'use client';

import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { LinkIcon } from '@heroicons/react/24/solid';
import { FaGithub } from 'react-icons/fa';

import { ProjectCardProps } from '@/types/components/projectCard';
import {
  upScaleVariants,
  cardAnimationVariants,
  blurAnimationVariations,
} from '@/helpers/framer-motion/animationVariants';

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  project,
  cardNumber,
}) => {
  const isFirstPortfolio = project.name === 'Portfolio V1';
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: 0.2 * cardNumber, duration: 0.5 }}
      variants={upScaleVariants}
    >
      <motion.div
        key={project.name}
        whileHover="hover"
        className={clsx(
          'd:hover:dark-shadow-neon hover:shadow-neon backdrop to-black-500 spacing-0 relative h-[380px] w-[340px] min-w-[340px] snap-start rounded-xl border-2 border-gray-700/30 bg-white bg-opacity-10 from-[#06b6d4] bg-clip-padding  p-4 shadow-xl  transition-[min-width,width,margin-left,opacity] duration-300 d:border-[#06b6d4]   d:bg-opacity-0 d:bg-gradient-to-r'
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
            variants={cardAnimationVariants}
            transition={{ duration: 0.3 }}
          >
            <h2
              className={clsx(
                'text-2xl font-bold tracking-tighter text-black',
                isFirstPortfolio && 'text-gray-200'
              )}
            >
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
            <p
              className={clsx(
                'line-clamp-4 py-2',
                isFirstPortfolio && 'text-gray-200'
              )}
            >
              {project.description}
            </p>
          </motion.header>
          <motion.footer
            className="absolute bottom-0 left-0 w-full rounded-b-xl bg-opacity-60 bg-clip-padding px-4 py-2 backdrop-blur-lg backdrop-filter d:backdrop-blur-none"
            variants={blurAnimationVariations}
            transition={{ duration: 0.3 }}
          >
            <div className="flex w-full items-end justify-end gap-2">
              <div className="mr-auto text-sm font-semibold text-black">
                {project.year}
              </div>
              {project.repository ? (
                <Link
                  target="_blank"
                  href={project.repository}
                  className="p-1 text-gray-700/80 transition-all"
                  data-tip="View repository"
                >
                  <span className="sr-only">Lien vers GitHub</span>
                  <FaGithub className="h-5 w-5 " />
                </Link>
              ) : null}
              {project.url ? (
                <Link
                  target="_blank"
                  href={project.url}
                  className="p-1 text-gray-700/80 transition-all"
                  data-tip="View site"
                >
                  <span className="sr-only">Lien vers mes projets</span>
                  <LinkIcon className="h-5 w-5 " />
                </Link>
              ) : null}
            </div>
          </motion.footer>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectCard;
