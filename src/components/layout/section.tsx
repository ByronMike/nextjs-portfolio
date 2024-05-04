'use client';

import React, { FunctionComponent, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { sectionVariants } from '@/helpers/framer-motion/animationVariants';
import { SectionProps } from '@/types/components/section';

const Section: FunctionComponent<SectionProps> = ({
  children,
  id,
  isMotion = false,
  className,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionProps = isMotion
    ? {
        ref,
        initial: 'initial',
        animate: isInView ? 'animate' : 'initial',
        variants: sectionVariants,
      }
    : {};

  return (
    <motion.section id={id} className={className} {...motionProps}>
      {children}
    </motion.section>
  );
};

export default Section;
