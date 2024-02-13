'use client';

import { useRef } from 'react';
import projectsData from '@/lib/projectsData';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { LuExternalLink } from 'react-icons/lu';
import { FaGithubSquare } from 'react-icons/fa';

type ProjectsProps = (typeof projectsData)[number];

export default function Project({
  title,
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
      className='mb-3 sm:mb-8 last:mb-0 group '
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <article className='rounded-lg overflow-hidden relative bg-gray-100 max-w-[42rem] border border-black/5 sm:pr-8 sm:h-[30rem] hover:bg-gray-200 transition '>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2  sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem] '>
          <h3 className='text-2xl font-semibold '>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700'>{desc}</p>
          <ul className='flex gap-1 flex-wrap mt-4 sm:mt-auto'>
            {tech.map((tech, index) => (
              <li
                className='font-fira bg-[#138cd3] px-2 py-1 text-xs tracking-wide text-white rounded-md'
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>
          {/* External links */}
          <div className='mt-8 flex items-center justify-center gap-2 sm:justify-start'>
            <a
              href={demoURL}
              target='_blank'
              rel='noreferrer'
              title='Live demo (Opens in new tab)'
              className='flex items-center  hover:cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 duration-200'
            >
              <LuExternalLink size={28} />
              <span className='sr-only'>Live demo. Opens in new tab</span>
            </a>

            <a
              href={codeURL}
              target='_blank'
              rel='noreferrer'
              title='Github (Opens in new tab)'
              className='flex items-center  hover:cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 duration-200'
            >
              <FaGithubSquare size={28} />
              <span className='sr-only'>Github (Opens in new tab)</span>
            </a>
          </div>
        </div>
        <Image
          src={imageURL}
          alt={title}
          quality={95}
          className='absolute bottom-16 -right-20 w-[24.25rem] rounded-lg shadow-2xl group-even:right-[initial] group-even:-left-20 group-hover:-translate-x-3  group-hover:translate-y-3 group-hover:-rotate-2  group-hover:scale-105 transition group-even:group-hover:translate-x-3  group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 '
        />
      </article>
    </motion.div>
  );
}
