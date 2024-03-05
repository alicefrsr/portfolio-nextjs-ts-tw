'use client';
import React from 'react';
import SectionHeading from './SectionHeading';
import projectsData from '@/lib/projectsData';
import Project from './Project';

// import { useInView } from 'react-intersection-observer';
// import { useActiveSessionContext } from '@/context/ActiveSectionContext';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  // refactored, custom hook
  // const { ref, inView } = useInView();
  // const { setActiveSection, timeOfLastClick } = useActiveSessionContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection('Projects');
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);
  const { ref } = useSectionInView('Projects', 0);

  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
      <SectionHeading>Some of my Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
