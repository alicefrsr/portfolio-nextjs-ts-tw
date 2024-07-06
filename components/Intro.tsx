'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

// import { HiDownload } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import { LiaLinkedinIn } from 'react-icons/lia';
import profilePix from '../public/images/me/bw_LR_portrait.jpg';

import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  // refactored: custom hook useSectionInView()
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
      className='mb-28 pb-56 max-w-[55rem] text-center sm:mb-0 scroll-mt-[100rem]'
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
              src={profilePix}
              alt='Anne smiling'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        className='mb-10 mt-4 px-4 text-2xl !leading-[1.5] font-medium sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className='m-8 flex items-center justify-center'>
          <span>👋</span>
          <h1 className='pl-2 text-2xl sm:pl-4 sm:text-4xl font-extrabold md:text-5xl xl:text-6xl'>
            Hello, I'm Anne.{' '}
          </h1>
        </div>

        <p className='font-atk   text-[1.2rem] sm:text-[1.4rem] pt-4 leading-9'>
          I'm a self-taught{' '}
          <strong className='text-primaryLight dark:text-primaryDark'>
            web developer
          </strong>{' '}
          focused on building responsive and accessible web apps with{' '}
          <strong>React</strong>, <strong>Next.js</strong> and{' '}
          <strong>Tailwind</strong>, as well as integrating back-end
          technologies with <strong>Node.js</strong>, <strong>Express </strong>
          and <strong>MongoDB</strong>.
        </p>

        {/* <p className='text-[1.4rem] pb-4 leading-8'>
          Endlessly curious, I'm also exploring the world of NoCode with{' '}
          <strong>Bubble</strong>.
        </p> */}
      </motion.div>

      {/* Links to projects, CV, socials */}
      <motion.div
        className='flex flex-row items-center justify-center text-lg font-medium gap-4 px-4'
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
        {/* 
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
        </a> */}

        {/* Socials icons */}
        <a
          // data-testid='linkedin'
          href='https://www.linkedin.com/in/annemonnehay/'
          target='_blank'
          rel='noreferrer'
          className='btnSocials'
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
          className='btnSocials'
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
