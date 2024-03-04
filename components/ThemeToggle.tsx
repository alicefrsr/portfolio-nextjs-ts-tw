import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeToggle() {
  return (
    <button className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] p-[0.8rem] bg-opacity-70 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-md rounded-full flex items-center justify-center focus:scale-110 hover:scale-[1.15] hover:shadow-md hover:shadow-gray-400 active:scale-105 transition-all'>
      <BsSun />
    </button>
  );
}
