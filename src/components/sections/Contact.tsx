'use client';

import { FunctionComponent } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Section from '@/components/layout/Section';
import { CONTACTS } from '@/content/sections/Contact';
import { upVariants } from '@/helpers/framer-motion/animationVariants';

const Contact: FunctionComponent = () => {
  const t = useTranslations('contact');
  const locale = useLocale();
  const cvHref = locale === 'en' ? '/documents/cv-en.pdf' : '/documents/cv.pdf';

  return (
    <Section id="contact">
      <div className="mx-auto mb-20 grid w-full max-w-6xl px-10 md:mb-40 md:px-8">
        <div className="heading-pre flex justify-center">{t('pre')}</div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={upVariants}
        >
          <h1 className="heading-2xl -ml-1 flex justify-center">
            {t('title')}
          </h1>
          <p className="tracking tight mb-2 text-center leading-relaxed text-gray-500 d:text-gray-100/70 [&>p+p]:mt-4">
            {t('body')}
          </p>
          <div className="-ml-0.5 mt-0.5 flex items-center justify-center gap-3  tracking-tight text-black d:text-gray-200">
            {CONTACTS.map(({ key, Icon, url }) => (
              <a key={key} href={key === 'resume' ? cvHref : url}>
                <div className="flex select-none items-center gap-1 whitespace-nowrap rounded border border-gray-700/10  bg-sky-500/90 px-1.5 py-[2px] text-[13px]  font-medium  text-white transition-colors hfa:bg-sky-600/80 d:bg-sky-600/90 d:hfa:bg-sky-500/80">
                  <Icon />
                  {t(`links.${key}`)}
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
