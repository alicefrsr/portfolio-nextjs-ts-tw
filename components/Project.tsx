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
  other,
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
      <article className='font-atk tracking-wide sm:px-8 sm:py-8 bg-cardBgLight max-w-[50rem] border border-black/10 dark:border-white/20 overflow-hidden rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-8 sm:group-even:flex-row-reverse  transition dark:bg-cardBgDark  dark:text-white'>
        {/* Image */}
        <div className=''>
          <Image
            src={imageURL}
            alt={title}
            quality={95}
            className='sm:shadow-2xl sm:rounded-lg'
          />
        </div>

        {/* Text */}
        <div className=' h-full flex flex-col gap-3 text-gray-800 leading-relaxed dark:text-white/80 pt-4 pb-7 px-5 sm:px-0  sm:max-w-[50%] '>
          <div className='flex justify-between '>
            <h3 className='text-2xl font-semibold'>{title}</h3>
          </div>
          <p className='font-semibold'>{summary}</p>
          <p className=''>
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
          {/* External links */}
          <div className='mt-4 flex gap-2'>
            <ToolTip>
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
            </ToolTip>

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
          </div>
        </div>
      </article>
    </motion.div>
  );
}
