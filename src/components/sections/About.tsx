'use client';

import { FunctionComponent, useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import StatisticItem from '@/components/StatisticItem';
import { ABOUT } from '@/content/sections/About';
import { rightVariants } from '@/helpers/framer-motion/animationVariants';

export const About: FunctionComponent = () => {
  const [focusImageIndex, setFocusImageIndex] = useState(0);
  const [images, setImages] = useState(ABOUT.images);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleImageClick = useCallback(() => {
    if (focusImageIndex === images.length - 1) {
      setFocusImageIndex((current) => current + 1);
      setImages((current) => current.sort(() => 0.5 - Math.random()));
      setTimeout(() => {
        setFocusImageIndex(0);
        const trigger = new Event('mouseover');
        setTimeout(() => {
          buttonRef.current?.dispatchEvent(trigger);
        }, 50);
      }, 350);
    }

    if (focusImageIndex < images.length - 1) {
      setFocusImageIndex((current) => current + 1);
      setTimeout(() => {
        const trigger = new Event('mouseover');
        setTimeout(() => {
          buttonRef.current?.dispatchEvent(trigger);
        }, 50);
      }, 50);
    }
  }, [focusImageIndex, images.length]);

  return (
    <Section
      id="about"
      isMotion
      className="overflow-hidden pt-10 md:-mt-12 md:pt-40"
    >
      <div className="heading-pre mx-auto w-full max-w-6xl px-4 md:px-8 lg:pt-16">
        Présentation
      </div>
      <div className="mx-auto flex max-w-6xl flex-col justify-center gap-16 px-4 pb-16 md:px-8 lg:grid lg:grid-cols-[540px_auto]">
        <button
          ref={buttonRef}
          className="relative mx-auto mb-12 mt-10 aspect-3/2 max-h-[405px] w-full max-w-[540px] flex-1 hfa:outline-none lg:mb-auto  lg:mr-0 lg:aspect-4/3"
          onClick={handleImageClick}
          type="button"
        >
          <span className="sr-only">Parcourir les images</span>
          {images.map(({ src, alt }, index) => {
            return (
              <Image
                src={src}
                alt={alt}
                key={alt}
                width={2000}
                height={1500}
                sizes="(min-width: 580px) 540px, 400px"
                priority={index === 0}
                className="absolute left-0 top-0 rounded-xl border-2 border-gray-50/80 object-cover transition-all duration-300  d:border-gray-600/80"
                style={{
                  transform:
                    focusImageIndex > index
                      ? `translate(-700px, -${(index % 4) * 60 + 25}px) rotate(${
                          (index % 4) * (index % 2 === 0 ? 0.5 : -1.2) * 3
                        }deg)`
                      : `rotate(${(index % 4) * (index % 2 === 0 ? 0.5 : -1.2) * 3}deg)`,
                  zIndex: -index,
                  filter: focusImageIndex !== index ? 'grayscale(80)' : '',
                  opacity: focusImageIndex > index ? '0' : '1',
                }}
              />
            );
          })}
        </button>
        <div className="spacing-8">
          <div className="grid max-w-xl grid-cols-2 gap-4 text-center sm:grid-cols-4 sm:text-left">
            {ABOUT.stats.map(({ statistic, caption }, index) => (
              <StatisticItem
                key={caption + index}
                statistic={statistic}
                caption={caption}
              />
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={rightVariants}
            className="max-w-3xl leading-relaxed text-gray-500 d:text-gray-100/70 [&>p+p]:mt-4"
          >
            {ABOUT.description}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
