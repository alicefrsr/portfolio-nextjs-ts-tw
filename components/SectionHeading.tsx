import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    // <h2 className='text-4xl font-bold text-center capitalize mb-8 '>
    <h2 className='text-xl sm:text-2xl  text-center lg:text-3xl mb-12 font-fira uppercase tracking-widest  '>
      {children}
    </h2>
  );
}
