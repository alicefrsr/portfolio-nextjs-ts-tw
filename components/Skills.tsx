'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

import { skills, languages, softSkills } from '@/lib/skillsData';
import { useSectionInView } from '@/lib/hooks';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      ref={ref}
      id='skills'
      className='max-w-[50rem] text-center sm:mb-40 scroll-mt-28 mb-28'
    >
      <SectionHeading>Some of my Skills</SectionHeading>

      {/* Hard skills */}
      <ul className='flex flex-wrap justify-center gap-2 text-lg mb-12 '>
        {skills.map((skill: string, index: number) => (
          <motion.li
            key={index}
            className='text-base font-fira bg-white text-gray-500 px-3 py-2 tracking-normal rounded-md border border-secondaryLight dark:border-secondaryDark  dark:bg-white/10 dark:text-white/80'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>

      {/* Languages */}
      <ul className='flex flex-wrap justify-center gap-2 text-lg  mb-12 '>
        {languages.map((language: string, index: number) => (
          <motion.li
            key={index}
            className='text-base font-fira bg-white text-gray-500 px-3 py-2 tracking-normal rounded-md border border-lightOrange  dark:bg-white/10 dark:text-white/80'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {language}
          </motion.li>
        ))}
      </ul>

      {/* Soft skills */}
      <ul className='flex flex-wrap justify-center gap-2 text-lg '>
        {softSkills.map((skill: string, index: number) => (
          <motion.li
            key={index}
            className='text-base font-fira bg-white text-gray-500 px-3 py-2 tracking-normal rounded-md border border-black/20 dark:border-gray-500  dark:bg-white/10 dark:text-white/80'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
