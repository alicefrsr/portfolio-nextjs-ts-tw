'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './SubmitBtn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  //   // implementing server action ==> in server component (sendEmail.ts)
  //   const sendEmail = async (formData: FormData) => {
  //     'use server';
  //     console.log('running on server');
  //     console.log(formData.get('senderEmail'));
  //     console.log(formData.get('message'));
  //   };

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='sm:mb-40 scroll-mt-28 mb-40 w-[min(100%,38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading>GET IN TOUCH</SectionHeading>
      <p className='text-gray-700 dark:text-white/80'>
        Please contact me directly on{' '}
        <a
          className='underline  focus:outline-focusColor'
          href='mailto:anne3.dev@gmail.com'
        >
          anne3.dev@gmail.com
        </a>{' '}
        or using this form.
      </p>
      <form
        // (type inferred here)
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          // error handling
          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent successfully! :)');
        }}
        className='mt-10 flex flex-col gap-4 dark:text-black'
      >
        <input
          className='h-14 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 focus:dark:bg-opacity-100 transition-all focus:outline-focusColor dark:placeholder:text-gray-600'
          type='email'
          name='senderEmail'
          placeholder='Your email'
          required
          maxLength={500}
        />
        <textarea
          className='h-52 mb-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 focus:dark:bg-opacity-100 transition-all  focus:outline-focusColor  dark:placeholder:text-gray-600'
          placeholder='Your message'
          name='message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
