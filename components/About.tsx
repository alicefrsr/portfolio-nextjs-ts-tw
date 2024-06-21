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
      className='font-atk  tracking-wide  max-w-[50rem] text-center text-[1rem] sm:text-[1.1rem] leading-8 sm:mb-60 scroll-mt-28 mb-28 '
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>

      <p className='mb-4'>
        <span className='pr-2 sm:text-2xl'>🎬</span> In a previous life I was a{' '}
        <strong className='text-primaryLight dark:text-focusColor'>
          film editor
        </strong>{' '}
        based in London for 20 years, working on{' '}
        <strong>TV & feature documentaries</strong> for major broadcasters (BBC,
        ITV, Channel 4, Sky etc), music promos, corporate videos, and was a VFX
        editor on award-winning animation shorts and commercials.
      </p>
      <p className='mb-4'>
        <span className='pr-2 sm:text-2xl'>⛵️</span> I left after Brexit in
        pursuit of new challenges and sailing adventures, which led me to the
        Mediterranean where I worked on <strong>private superyachts </strong>
        as{' '}
        <strong className='text-primaryLight dark:text-focusColor'>
          {' '}
          crew
        </strong>
        , lending a hand on deck, the interior and the engine room. For a while
        I juggled a life at sea during the summer with working on short editing
        contracts with my regular clients in London during the winter
        (2017-2021).
      </p>
      <p className=' dark:text-gray-300'>
        <span className='pr-2 sm:text-2xl'>👩‍💻</span>I discovered{' '}
        <strong className='text-primaryLight dark:text-focusColor'>
          {' '}
          programming{' '}
        </strong>{' '}
        in my travels and got hooked.
      </p>
      <p>
        Now that I have a good foundation in{' '}
        <strong className='text-primaryLight dark:text-focusColor'>
          {' '}
          web development
        </strong>
        , my focus is to expand my skillset by continuing to
        <strong> build things for the web</strong> keeping accessibility in
        mind, integrating <strong>tests</strong> in my projects, and more
        recently, explore the <strong>devops</strong> toolkit.
      </p>
    </motion.section>
  );
}
