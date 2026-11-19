'use client';

import { FunctionComponent, useState } from 'react';
import { useTranslations } from 'next-intl';
import Section from '@/components/layout/Section';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS } from '@/content/sections/Projects';

const Projects: FunctionComponent = () => {
  const t = useTranslations('projects');
  const [filter, setFilter] = useState('All Projects');
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  const handleFilterChange = (newFilter = filter) => {
    setFilter(newFilter);
    if (newFilter === 'All Projects') {
      setFilteredProjects(PROJECTS);
    } else {
      const filtered = PROJECTS.filter((project) =>
        project.type.includes(newFilter)
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <Section
      id="projects"
      isMotion
      className="mx-auto grid w-full max-w-6xl px-6 pt-10 md:px-8 md:pt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl">
        <div className="heading-pre">{t('pre')}</div>
        <h1 className="heading-2xl -ml-1">{t('title')}</h1>
        <div className="relative -mx-4 mb-2 flex gap-2 overflow-x-auto px-4 pb-2">
          <fieldset className="flex gap-3">
            <legend className="sr-only">Filter by Tag</legend>
            {[
              'All Projects',
              ...new Set(PROJECTS.map((p) => p.type).flat()),
            ].map((type) => {
              return (
                <label key={type} className="flex">
                  <input
                    type="radio"
                    className="peer hidden"
                    checked={type === filter}
                    onChange={() => handleFilterChange(type)}
                    name="Tag Filters"
                    value={type}
                  />
                  <div className="cursor-pointer appearance-none whitespace-nowrap rounded-full border border-gray-200 bg-gray-400/10 px-3 py-1 text-[13px] font-medium text-gray-400 transition-colors peer-checked:text-gray-900 hfa:text-gray-500 d:border-gray-700 d:peer-checked:text-gray-50 d:hfa:text-gray-300">
                    {type === 'All Projects' ? t('filterAll') : type}
                  </div>
                </label>
              );
            })}
          </fieldset>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {filteredProjects.map((project, key) => (
          <ProjectCard key={project.id} project={project} cardNumber={key} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
