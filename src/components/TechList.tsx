import { FunctionComponent } from 'react';
import { TechListProps } from '@/types/components/techList';

const TechList: FunctionComponent<TechListProps> = ({ tech }) => {
  const techItems = tech.map(({ name, Icon }) => (
    <li
      className="flex items-center gap-2 text-gray-500 d:text-gray-400"
      key={name}
    >
      <Icon className="h-7 w-7 text-gray-400 d:text-gray-300/80" />
      {name}
    </li>
  ));

  return (
    <div className="group inline-flex w-full max-w-[710px] flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul
        aria-label="tech stack"
        className="group-hover:paused flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-8"
      >
        {techItems}
      </ul>
      <ul
        aria-label="tech stack"
        className="group-hover:paused flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-8"
      >
        {techItems}
      </ul>
    </div>
  );
};

export default TechList;
