import { useEffect, useRef } from 'react';

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(startingValue, parseString, {
            duration: 5,
            ease: 'easeInOut',
          });
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [animate, parseString, startingValue]);

  return (
    <div ref={containerRef}>
      <LazyMotion features={domAnimation}>
        <m.p>{currentValue}</m.p>
      </LazyMotion>
    </div>
  );
};
