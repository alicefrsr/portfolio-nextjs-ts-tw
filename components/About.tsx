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
      className='mb-28 max-w-[50rem] text-center leading-7 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        In a previous life I was a <strong>film editor</strong> based in London
        for 20 years, working on TV & feature documentaries, music promos,
        corporate videos, commercials, 2D/3D animation and VFX editing.
      </p>
      <p className='mb-3'>
        I left after Brexit in pursuit of new horizons and sailing adventures,
        which led me to the Côte d&#39;Azur in France, the Costa Brava and
        Mallorca in Spain, juggling working as a
        <strong> deck/stew, crew cook </strong> or
        <strong> junior engineer </strong>
        on private superyachts during the summer in the Mediterranean
        (2017-2020), with short editing contracts with my regular clients back
        in London during the winter.
      </p>
      <p>
        As the world shut down during the pandemic in 2020, it was a chance to
        explore what <strong>programming</strong> was all about. Two months of
        Python during lockdown got me hooked. Since 2022 I've been focusing on
        building things for the web and adding to my skillset full-time every
        day.
      </p>
    </motion.section>
  );
}
