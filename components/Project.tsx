'use client';

import { useRef } from 'react';
import projectsData from '@/lib/projectsData';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { LuExternalLink } from 'react-icons/lu';
import { FaGithubSquare } from 'react-icons/fa';
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
      <article className='sm:px-4 sm:py-8 bg-gray-100 max-w-[42rem] borderBlack overflow-hidden rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-center  sm:gap-8 sm:group-even:flex-row-reverse  hover:bg-gray-200  transition'>
        {/* Image */}
        <div className=''>
          <Image
            src={imageURL}
            alt={title}
            quality={95}
            className='sm:w-[16.25rem] sm:shadow-lg sm:rounded-lg sm:group-hover:scale-110 transition'
          />
        </div>

        {/* Text */}
        <div className=' pt-4 px-5 sm:px-0 pb-7 sm:max-w-[50%] flex flex-col h-full '>
          <div className='flex justify-between pb-4'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            {/* External links */}
            <div className='flex justify-center gap-2'>
              <a
                href={demoURL}
                target='_blank'
                rel='noreferrer'
                title='Live demo (Opens in new tab)'
                className='flex items-center  hover:cursor-pointer outline-none focus:text-[#138cd3] hover:text-[#138cd3] active:text-[#138cd3]duration-200'
              >
                <LuExternalLink size={25} />
                <span className='sr-only'>Live demo. Opens in new tab</span>
              </a>

              <a
                href={codeURL}
                target='_blank'
                rel='noreferrer'
                title='Github (Opens in new tab)'
                className='flex items-center  hover:cursor-pointer outline-none focus:text-[#138cd3] hover:text-[#138cd3] active:text-[#138cd3]duration-200'
              >
                <FaGithubSquare size={25} />
                <span className='sr-only'>Github (Opens in new tab)</span>
              </a>
            </div>
          </div>

          <p className='mt-2 leading-relaxed text-gray-700 pb-4'>{summary}</p>
          <a className='pb-4'>See details</a>
          <ul className='flex flex-wrap mt-4 gap-1 sm:mt-auto'>
            {tech.map((tech, index) => (
              <li
                key={index}
                className='font-fira bg-[#138cd3] text-white px-2 py-1 text-xs tracking-wide rounded-md'
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </motion.div>
  );
}
