import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    // <h2 className='text-4xl font-bold text-center capitalize mb-8 '>
    <h2 className=' text-2xl mb-12 text-center font-fira uppercase tracking-widest'>
      {children}
    </h2>
  );
}
