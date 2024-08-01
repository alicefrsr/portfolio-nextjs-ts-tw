'use client';
import React, { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import projectsData from '@/lib/projectsData';
import Project from './Project';
// import { FiEye, FiEyeOff } from 'react-icons/fi';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
        <SectionHeading>Selected projects</SectionHeading>
        <div>
          {projectsData.map((project, index) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </section>
    </motion.section>
  );
}
