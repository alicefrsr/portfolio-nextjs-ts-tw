import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className='mx-auto group flex items-center gap-2 justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full  focus:scale-110 hover:scale-110 active:scale-105  hover:bg-grey-950 transition-all disabled:scale-100 disabled:bg-opacity-60 dark:bg-white dark:bg-opacity-20  focus:outline-focusColor hover:border-2  duration-200 shadow-md'
    >
      {pending ? (
        <div className='w-5 h-5 animate-spin rounded-full border-b-2 border-white '></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className='text-xs  transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primaryLight dark:group-hover:text-primaryDark' />
        </>
      )}
    </button>
  );
}
