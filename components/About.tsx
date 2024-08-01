'use client';
import React from 'react';
import Image from 'next/image';
import gitCont from '../public/images/me/GitCont-Job.png';
import gitContCropped from '../public/images/me/GitCont-JobCropped.png';
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
      className='font-atk tracking-wide  max-w-[50rem] text-center text-[1rem] sm:text-[1.1rem] leading-8 sm:mb-60 scroll-mt-28 mb-28'
      // initial={{ opacity: 0, y: 100 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ delay: 0.175 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <section>
        <SectionHeading>About me</SectionHeading>

        <p className='mb-4'>
          <span className='pr-2 sm:text-2xl'>🎬</span> In a previous life I was
          a{' '}
          <strong className='text-primaryLight dark:text-primaryDark'>
            film editor
          </strong>{' '}
          based in London for 20 years, working on{' '}
          <strong>TV & feature documentaries</strong> for major broadcasters
          (BBC, ITV, Channel 4, Sky etc), music promos, corporate videos, and
          was a VFX editor on award-winning animation shorts and commercials.
        </p>
        <p className='mb-4'>
          <span className='pr-2 sm:text-2xl'>⛵️</span> I left after Brexit in
          pursuit of new challenges and sailing adventures, which led me to the
          Mediterranean where I worked on <strong>private superyachts </strong>
          as{' '}
          <strong className='text-primaryLight dark:text-primaryDark'>
            {' '}
            crew
          </strong>
          , lending a hand on deck, the interior and the engine room. For a
          while I juggled a life at sea during the summer with working on short
          editing contracts with my regular clients in London during the winter
          (2017-2021).
        </p>
        <p className='mb-4'>
          <span className='pr-2 sm:text-2xl'>👩‍💻</span>I (re)discovered{' '}
          <strong className='text-primaryLight dark:text-primaryDark'>
            {' '}
            programming{' '}
          </strong>{' '}
          in my travels and got hooked. Now that I have a good foundation in{' '}
          <strong className='text-primaryLight dark:text-primaryDark'>
            {' '}
            web development
          </strong>
          , my focus is to expand my skillset by continuing to
          <strong> build things for the web</strong> keeping accessibility in
          mind, integrating <strong>tests</strong> in my projects, and more
          recently, explore the <strong>devops</strong> toolkit.
        </p>
        <p>
          😎 It's about the right time for me to get my teeth into real-world,
          ground-breaking, planet-saving projects, so if you are a cool team
          looking for a keen rookie, please get in touch.
        </p>
        {/* <div className='mt-8 sm:mt-16'>
        <Image
          // src={gitCont}
          src={gitContCropped}
          alt='Github contribution graph reading "I need a job"'
          // width=''
          // height=''
          quality='95'
          // priority={true}
          className='object-cover border-[0.35rem] rounded-md shadow-xl '
        />
      </div> */}
      </section>
    </motion.section>
  );
}
