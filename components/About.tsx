'use client';
import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

// import { useInView } from 'react-intersection-observer';
// import { useActiveSessionContext } from '@/context/ActiveSectionContext';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  // refactored, custom hook
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
      className='max-w-[50rem] text-center leading-7 sm:mb-60 scroll-mt-28 mb-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        In a previous life I was a <strong>film editor</strong> based in London
        for 20 years, working on TV & feature documentaries, music promos,
        corporate videos, and was a VFX editor on award-winning animation shorts
        and commercials.
      </p>
      <p className='mb-3'>
        I left after Brexit in pursuit of new challenges and sailing adventures,
        which led me to the Mediterranean. For a while I juggled working as a
        <strong> crew </strong>
        on private superyachts during the summer (2017-2020), with short editing
        contracts with my regular clients in London during the winter.
      </p>
      <p>
        I discovered coding in my travels and as the world shut down during the
        pandemic in 2020, it was a chance to dive a little deeper. Two months of
        Python during lockdown got me hooked. Since 2022 I've been focusing on
        building things for the web.
      </p>
      <p>
        Currently my focus is to continue to expand my skillset by integrating{' '}
        <strong>tests</strong> in my projects, learning React Testing Library,
        Cypress, Jest/ Vitest, as well as keeping accessibility in mind.
      </p>
    </motion.section>
  );
}
