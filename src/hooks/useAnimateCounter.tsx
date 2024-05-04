import { useEffect } from 'react';

import {
  LazyMotion,
  domAnimation,
  m,
  useAnimate,
  useMotionValue,
  useTransform,
} from 'framer-motion';

export const useAnimateCounter = (numbers: string) => {
  const [, animate] = useAnimate();
  const startingValue = useMotionValue(0);

  const currentValue = useTransform(
    startingValue,
    (value) => Math.round(value).toLocaleString() + '+'
  );

  const parseString = parseInt(numbers);

  useEffect(() => {
    animate(startingValue, parseString, {
      duration: 5,
      ease: 'easeInOut',
    });
  }, [animate, parseString, startingValue]);

  return (
    <LazyMotion features={domAnimation}>
      <m.p>{currentValue}</m.p>
    </LazyMotion>
  );
};
