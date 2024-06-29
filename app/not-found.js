'use client';

import Link from 'next/link';
import { useActiveSessionContext } from '@/context/ActiveSectionContext';

function NotFound() {
  const { setActiveSection } = useActiveSessionContext();
  setActiveSection(null);
  return (
    // <main className='text-center h-screen space-y-12 mt-16'>
    <main className='flex flex-col items-center text-center h-screen space-y-12 mt-16'>
      {/* // <main className='h-96 flex flex-col justify-center items-center gap-24'> */}{' '}
      <h1 className='flex flex-col gap-2 text-2xl sm:text-3xl font-semibold'>
        <span> 404 error.</span>
        <span> This page doesn't actually exist.</span>
      </h1>
      <p className='max-w-[40rem] text-xl sm:text-xl'>
        You've disabled the main navigation by venturing into unchartered
        territories. Only this button will take you back to basecamp.
      </p>
      <Link
        href='/'
        className='flex group mx-auto items-center gap-2 justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full  focus:scale-110 hover:scale-110 active:scale-105  hover:bg-grey-950 transition-all dark:bg-white dark:bg-opacity-20  focus:outline-focusColor hover:border-2  duration-200 shadow-md'
      >
        <span className='group-hover:text-primaryLight dark:group-hover:text-primaryDark'>
          {' '}
          &larr;{' '}
        </span>
        Home
      </Link>
      {/* <iframe
        className='absolute w-full h-full z-50'
        src='https://chromedino.com/'
        frameborder='0'
        scrolling='no'
        width='100%'
        height='100%'
        loading='lazy'
      ></iframe> */}
    </main>
  );
}

export default NotFound;
