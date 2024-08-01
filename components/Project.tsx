'use client';

import { useRef, useState } from 'react';
import projectsData from '@/lib/projectsData';
import Image from 'next/image';
import {
  useScroll,
  motion,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { LuExternalLink } from 'react-icons/lu';
import { FiEye, FiEyeOff, FiGithub } from 'react-icons/fi';

import Link from 'next/link';

type ProjectsProps = (typeof projectsData)[number];

export default function Project({
  title,
  summary,
  desc,
  other,
  imageURL,
  demoURL,
  codeURL,
  tech,
}: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false);
  const toggleDetails = () => {
    setIsDetailsVisible(() => !isDetailsVisible);
  };

  return (
    <div
      className='mb-8 last:mb-0 group'
      // ref={ref}
    >
      <article className='font-atk tracking-wide sm:px-8 sm:py-8 bg-cardBgLight max-w-[50rem] border border-black/10 dark:border-white/20 overflow-hidden rounded-lg flex flex-col sm:flex-row sm:items-start sm:justify-center sm:gap-8 sm:group-even:flex-row-reverse transition dark:bg-cardBgDark dark:text-white'>
        {/* Image */}
        <div className='sm:max-w-[18rem]'>
          <Image
            src={imageURL}
            alt={title}
            quality={95}
            className='sm:shadow-xl sm:rounded-lg'
          />
        </div>

        {/* Text */}
        <div className='sm:w-[24rem] h-full flex flex-col gap-3 text-gray-800 leading-relaxed dark:text-white/80 pt-4 pb-7 sm:p-0 px-5 sm:px-0'>
          <div className='flex justify-between items-center'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <div className='flex gap-2'>
              <div className=''>
                <a
                  href={demoURL}
                  target='_blank'
                  rel='noreferrer'
                  title='Live demo (Opens in new tab)'
                  className='flex items-center hover:cursor-pointer outline-none focus:outline-focusColor  group-hover:text-primaryLight dark:group-hover:text-primaryDark duration-200 border-2 border-transparent rounded-md'
                >
                  <LuExternalLink size={25} />
                  <span className='sr-only'>Live demo. Opens in new tab</span>
                </a>
              </div>

              <div>
                <a
                  href={codeURL}
                  target='_blank'
                  rel='noreferrer'
                  title='Github (Opens in new tab)'
                  className='flex items-center hover:cursor-pointer outline-none focus:outline-focusColor  hover:text-primaryLight dark:hover:text-primaryDark duration-200 border-2 border-transparent rounded-md'
                >
                  <FiGithub size={24} />
                  <span className='sr-only'>Github (Opens in new tab)</span>
                </a>
              </div>
            </div>
          </div>
          <p className='font-semibold'>{summary}</p>
          {/* EXPAND/COLLAPSE SECTION */}
          <motion.div initial={false} className='w-fit' onClick={toggleDetails}>
            {/* BUTTON / ("Header")*/}
            <button className='group flex items-center justify-between px-2 h-[2rem] w-[9rem] bg-transparent rounded-md transition-all duration-200 text-gray-700 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white border border-black/30 dark:border dark:border-white/30 group-hover:bg-navLight dark:group-hover:bg-navDark outline-none focus:outline-focusColor'>
              <span>{isDetailsVisible ? 'Hide details' : 'Show details'}</span>
              <span className='group-hover:text-primaryLight dark:group-hover:text-primaryDark font-bold'>
                {isDetailsVisible ? <FiEyeOff /> : <FiEye />}
              </span>
            </button>
            {/* EXPANDED DETAILS */}
            <AnimatePresence initial={false}>
              {isDetailsVisible && (
                <motion.div
                  initial='collapsed'
                  animate='open'
                  exit='collapsed'
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {/* Description */}
                  <div className=''>
                    <p className='my-6'>
                      {desc} {other}
                    </p>

                    {/* Tech tags */}
                    <ul className='mt-4 flex flex-wrap gap-1 sm:mt-auto'>
                      {tech.map((tech, index) => (
                        <li
                          key={index}
                          className='techTag text-white bg-techTagsLight dark:bg-techTagsDark'
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          {/* External links */}
          {/* <div className='mt-4 flex gap-2'>
            <a
              href={demoURL}
              target='_blank'
              rel='noreferrer'
              title='Live demo (Opens in new tab)'
              className='flex items-center hover:cursor-pointer outline-none focus:text-focusColor hover:text-focusColor active:text-focusColor duration-200'
            >
              <LuExternalLink size={25} />
              <span className='sr-only'>Live demo. Opens in new tab</span>
            </a>

            <a
              href={codeURL}
              target='_blank'
              rel='noreferrer'
              title='Github (Opens in new tab)'
              className='flex items-center hover:cursor-pointer outline-none focus:text-focusColor hover:text-focusColor active:text-focusColor duration-200'
            >
              <FiGithub size={24} />
              <span className='sr-only'>Github (Opens in new tab)</span>
            </a>
          </div> */}
        </div>
      </article>
    </div>
  );
}
