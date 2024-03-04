'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

import { skills } from '@/lib/skillsData';
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
      className='mb-28 max-w-[50rem] text-center sm:mb-40 scroll-mt-28'
    >
      <SectionHeading>Skillset</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg '>
        {skills.map((skill: string, index: number) => (
          <motion.li
            key={index}
            className='text-base font-fira bg-white text-gray-500 px-2 py-1 tracking-normal rounded-md border border-black/20'
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
