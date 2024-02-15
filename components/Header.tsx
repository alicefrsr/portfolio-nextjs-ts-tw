'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/linksData';
import Link from 'next/link';
import clsx from 'clsx';

import { useActiveSessionContext } from '@/context/ActiveSectionContext';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSessionContext();

  return (
    <header className='z-[999] relative'>
      {/* nav bar */}
      <motion.div
        className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/5 backdrop-blur-md sm:top-6 sm:h-[3.25rem] sm:w-[36rem]  sm:rounded-full '
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>
      {/* nav links */}
      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 '>
        <ul className='flex w-[22rem] items-center justify-center flex-wrap gap-1 text-[0.9rem]  font-medium  text-gray-500 sm:w-[intial] sm:flex-nowrap sm:gap-5'>
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className='h-3/4 flex items-center justify-center relative'
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  'flex w-full items-center justify-center p-3 hover:text-gray-950 transition',
                  {
                    'text-gray-950': activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className='bg-gray-200 rounded-full absolute inset-0 -z-10 '
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
