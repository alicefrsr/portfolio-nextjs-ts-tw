'use server';

import { Resend } from 'resend';
import { validateString } from '@/lib/utils';
import { getErrorMessage } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);
// extracted to utils.ts
// const validateString = (value: unknown, maxLength: number) => {
//   if (!value || typeof value !== 'string' || value.length > maxLength) {
//     return false;
//   }
//   return true;
// };

// extracted to utils.ts:
// const getErrorMessage = (error: unknown): string => {
//   let message: string;
//   if (error instanceof Error) {
//     message = error.message;
//   } else if (error && typeof error === 'object' && 'message' in error) {
//     message = String(error.message);
//   } else if (typeof error === 'string') {
//     message = error;
//   } else {
//     message = 'Unknown error';
//   }
//   return message;
// };

export const sendEmail = async (formData: FormData) => {
  console.log('running on server');
  const senderEmail = formData.get('senderEmail'); // input name attribute 'email'
  const message = formData.get('message'); // input name attribute 'message'
  console.log(senderEmail);
  console.log(message);
  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }
  let data;

  try {
    data = await resend.emails.send({
      from: 'From Portfolio Contact Form <onboarding@resend.dev>',
      to: 'alicefrsr@gmail.com',
      subject: 'Message from portfolio contact form',
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    // extracted:
    // if (error instanceof Error) {
    //   return {
    //     error: error.message,
    //   };
    // } else if (error && typeof error === 'object' && 'message' in error) {
    // }
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
