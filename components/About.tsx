'use client';
import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

// import { useInView } from 'react-intersection-observer';
// import { useActiveSessionContext } from '@/context/ActiveSectionContext';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  // refactored: custom hook useSectionInView()
  // const { ref, inView } = useInView({
  //   threshold: 0.75,
  // });
  // const { setActiveSection, timeOfLastClick } = useActiveSessionContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection('About');
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);
  const { ref } = useSectionInView('About', 0.75);

  return (
    <motion.section
      ref={ref}
      id='about'
      className='max-w-[50rem] text-center text-[1.1rem] leading-8 sm:mb-60 scroll-mt-28 mb-28 '
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-4'>
        In a previous life I was a{' '}
        <strong className='text-primaryLight dark:text-primaryDark'>
          film editor
        </strong>{' '}
        based in London for 20 years, working on{' '}
        <strong>TV & feature documentaries</strong> for major broadcasters (BBC,
        ITV, Channel 4, Sky etc), music promos, corporate videos, and was a VFX
        editor on award-winning animation shorts and commercials.
      </p>
      <p className='mb-4'>
        I left after Brexit in pursuit of new challenges and sailing adventures,
        which led me to the Mediterranean where I worked on{' '}
        <strong>private superyachts </strong>
        as a{' '}
        <strong className='text-primaryLight dark:text-primaryDark'>
          {' '}
          crew
        </strong>
        , lending a hand on deck, the interior and the engine room. For a while
        I juggled a life at sea during the summer with working on short editing
        contracts with my regular clients in London during the winter
        (2017-2021).
      </p>
      <p className=' dark:text-gray-300'>
        I discovered{' '}
        <strong className='text-primaryLight dark:text-primaryDark'>
          {' '}
          coding{' '}
        </strong>{' '}
        in my travels and as the world shut down during the pandemic in 2020, it
        was a chance to dive a little deeper. Two months of Python during
        lockdown got me hooked.
      </p>
      <p>
        Since 2022 I've been <strong>building things for the web</strong>.
        Currently my focus is to continue to expand my skillset by integrating{' '}
        <strong>tests</strong> in my projects, learning React Testing Library,
        Cypress, Jest/Vitest, as well as keeping accessibility in mind, and to
        keep building.
      </p>
    </motion.section>
  );
}
