'use client';

import { useRef } from 'react';
import projectsData from '@/lib/projectsData';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { LuExternalLink } from 'react-icons/lu';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';

type ProjectsProps = (typeof projectsData)[number];

export default function Project({
  title,
  summary,
  desc,
  imageURL,
  demoURL,
  codeURL,
  tech,
}: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      className='mb-8 last:mb-0 group '
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <article className='font-atk  tracking-wide sm:px-8 sm:py-8 bg-secondaryLight max-w-[42rem] borderBlack overflow-hidden rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-8 sm:group-even:flex-row-reverse  transition dark:bg-darkGrey  dark:text-white'>
        {/* Image */}
        <div className=''>
          <Image
            src={imageURL}
            alt={title}
            quality={95}
            className='sm:w-[18.25rem] sm:shadow-lg sm:rounded-lg '
          />
        </div>

        {/* Text */}
        <div className=' pt-4 px-5 gap-6 sm:px-0 pb-7 sm:max-w-[50%] flex flex-col h-full '>
          <div className='flex justify-between '>
            <h3 className='text-2xl font-semibold'>{title}</h3>
          </div>

          <p className='mt-2 leading-relaxed text-gray-700  dark:text-white/70'>
            {desc}
          </p>
          <ul className='flex flex-wrap  gap-1 sm:mt-auto'>
            {tech.map((tech, index) => (
              <li
                key={index}
                className='font-fira bg-primaryLight dark:bg-primaryDark text-white px-2 py-1 text-xs tracking-wide rounded-md'
              >
                {tech}
              </li>
            ))}
          </ul>
          {/* External links */}
          <div className='flex gap-2'>
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
              className='flex items-center  hover:cursor-pointer outline-none focus:text-focusColor hover:text-focusColor active:text-focusColor duration-200'
            >
              <FiGithub size={24} />
              <span className='sr-only'>Github (Opens in new tab)</span>
            </a>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
