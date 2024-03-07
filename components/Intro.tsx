'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi';
import { IoLogoLinkedin } from 'react-icons/io5';
// import { FaGithubSquare } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { LiaLinkedinIn } from 'react-icons/lia';
import pix from '../public/images/me/bw_LR_portrait.jpg';
import SectionHeading from './SectionHeading';

// import { useActiveSessionContext } from '@/context/ActiveSectionContext';
// import { useInView } from 'react-intersection-observer';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  // refactored, custom
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  // });
  // const { setActiveSection, timeOfLastClick } = useActiveSessionContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection('Home');
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);
  const { ref } = useSectionInView('Home', 0.5);
  return (
    <section
      ref={ref}
      id='intro'
      className='mb-28 pb-56 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              stiffness: 125,
              delay: 0.1,
              duration: 0.2,
            }}
          >
            <Image
              src={pix}
              alt='Anne smiling'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>

          {/* <motion.span
            className='absolute bottom-0 left-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
        </div>
      </div>
      <motion.div
        className='mb-10 mt-4 px-4 text-2xl !leading-[1.5] font-medium sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <SectionHeading>Hi, I'm Anne.</SectionHeading>

        <p className='text-[1.4rem] pt-4 leading-8'>
          I'm a self-taught developer focused on building responsive and
          accessible web apps with <strong>React</strong> and{' '}
          <strong>Tailwind</strong>, as well as integrating back-end
          technologies with <strong>Node.js</strong>, <strong>Express </strong>
          and <strong>MongoDB</strong>.
        </p>
        <p className='text-[1.4rem] pb-4 leading-8'>
          Endlessly curious, I'm also exploring the world of NoCode with{' '}
          <strong>Bubble</strong>.
        </p>
      </motion.div>

      {/* Links to projects, CV, socials */}
      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center text-lg font-medium gap-4 px-4'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* <Link href=''>
          <div className='bg-gray-900 text-white px-7 py-3 flex items-center rounded-full gap-2 group  hover:cursor-pointer outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 hover:shadow-lg hover:shadow-gray-400 active:scale-105 duration-200 '>
            View projects
            <HiArrowNarrowRight
              aria-hidden='true'
              className='opacity-80 group-hover:rotate-90 duration-200'
            />
          </div>
        </Link> */}

        <a
          className='group bg-gray-900 text-white px-7 py-3 flex items-center rounded-full gap-2 border-2 border-transparent outline-none hover:cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 focus:border-focusColor duration-200 shadow-md dark:shadow-black/30'
          href='/CV.pdf'
          download
        >
          Download CV
          <HiDownload
            aria-hidden='true'
            className='opacity-80 group-hover:translate-y-1 duration-200'
          />
        </a>

        {/* Socials icons */}
        <a
          // data-testid='linkedin'
          href='https://www.linkedin.com/in/annemonnehay/'
          target='_blank'
          rel='noreferrer'
          className='shadow-md dark:shadow-black/30 bg-white text-gray-700 p-[0.8rem] flex items-center rounded-full gap-2 hover:cursor-pointer  outline-none   border-2 border-transparent focus:border-focusColor focus:scale-110 hover:scale-110  active:scale-105 hover:shadow-gray-400 duration-200 dark:bg-white/10  dark:text-white/80'
          aria-hidden='true'
        >
          <LiaLinkedinIn size={28} />
          <span className='sr-only'>LinkedIn (Opens in new tab)</span>
        </a>

        <a
          // data-testid='github'
          href='https://github.com/alicefrsr'
          target='_blank'
          rel='noreferrer'
          // className='icon-link'
          className='shadow-md dark:shadow-black/30 bg-white text-gray-700 p-[0.8rem] flex items-center rounded-full gap-2 hover:cursor-pointer  outline-none  border-2 border-transparent  focus:border-focusColor focus:scale-110 hover:scale-110 hover:shadow-gray-400 active:scale-105 duration-200 dark:bg-white/10  dark:text-white/80 '
          aria-hidden='true'
        >
          <FiGithub size={28} />
          <span className='sr-only'>Github (Opens in new tab)</span>
        </a>
      </motion.div>
      {/* </div> */}
    </section>
  );
}
