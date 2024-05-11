import { useAnimateCounter } from '@/hooks/useAnimateCounter';
import { FunctionComponent } from 'react';
import { StatisticItemProps } from '@/types/components/statisticItem';

const StatisticItem: FunctionComponent<StatisticItemProps> = ({
  statistic,
  caption,
}) => {
  const animatedStatistic = useAnimateCounter(statistic);

  return (
    <figure className="select-none spacing-1">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-4xl font-extrabold tracking-tighter text-transparent">
        {animatedStatistic}
      </div>
      <figcaption className="text-[15px] font-semibold tracking-tight text-gray-400 d:text-gray-300/80">
        {caption}
      </figcaption>
    </figure>
  );
};

export default StatisticItem;
