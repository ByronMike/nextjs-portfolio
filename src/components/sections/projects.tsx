'use client';

import { FunctionComponent, useState } from 'react';
import { PROJECTS } from '@/content/projects';
import { ProjectCard } from '@/components/project-card';

export const Projects: FunctionComponent = () => {
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
    <section
      id="portfolio"
      className="portfolio-preview mx-auto grid w-full max-w-6xl px-4 md:px-8"
    >
      <header className="mx-auto grid w-full max-w-6xl px-4 md:px-8">
        <div className="heading-pre">Mes projets</div>
        <h1 className="heading-2xl -ml-1">Une sélection de mes projets</h1>
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
                    name="Tag Filtersss"
                    value={type}
                  />
                  <div className="cursor-pointer appearance-none whitespace-nowrap rounded-full border border-gray-200 bg-gray-400/10 px-3 py-1 text-[13px] font-medium text-gray-400 transition-colors peer-checked:text-gray-900 hfa:text-gray-500 d:border-gray-700 d:peer-checked:text-gray-50 d:hfa:text-gray-300">
                    {type}
                  </div>
                </label>
              );
            })}
          </fieldset>
        </div>
      </header>
      <div className="flex flex-wrap gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};
