'use client';
import React, { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import projectsData from '@/lib/projectsData';
import Project from './Project';

import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
      <SectionHeading>Selected projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
